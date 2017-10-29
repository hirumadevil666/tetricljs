(ns mytetris.core
  (:require
   [reagent.core :as r]))

(declare rot-left rot-right move-left move-right move-down)

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(def block0
  [[[0,0,0],
    [1,1,1],
    [0,1,0]],
   [[0,1,0],
    [1,1,0],
    [0,1,0]],
   [[0,0,0],
    [0,1,0],
    [1,1,1]],
   [[0,1,0],
    [0,1,1],
    [0,1,0]]
   ])

(def block1
  [[[0,0,0],
    [1,1,1],
    [0,0,1]],
   [[0,1,0],
    [0,1,0],
    [1,1,0]],
   [[0,0,0],
    [1,0,0],
    [1,1,1]],
   [[1,1,0],
    [1,0,0],
    [1,0,0]]
   ])

(def block2
  [[[0,0,0],
    [1,1,1],
    [1,0,0]],
   [[1,1,0],
    [0,1,0],
    [0,1,0]],
   [[0,0,0],
    [0,0,1],
    [1,1,1]],
   [[1,0,0],
    [1,0,0],
    [1,1,0]]])

(def block3
  [[[0,0,0],
    [1,1,0],
    [0,1,1]],
   [[0,0,1],
    [0,1,1],
    [0,1,0]],
   [[0,0,0],
    [1,1,0],
    [0,1,1]],
   [[0,0,1],
    [0,1,1],
    [0,1,0]]])

(def block4
  [[[0,0,0],
    [0,1,1],
    [1,1,0]],
   [[0,1,0],
    [0,1,1],
    [0,0,1]],
   [[0,0,0],
    [0,1,1],
    [1,1,0]],
   [[0,1,0],
    [0,1,1],
    [0,0,1]]])

(def block5
  [[[0,0,0],
    [0,1,1],
    [0,1,1]],
   [[0,0,0],
    [0,1,1],
    [0,1,1]],
   [[0,0,0],
    [0,1,1],
    [0,1,1]],
   [[0,0,0],
    [0,1,1],
    [0,1,1]]])

(def block6
  [[[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [1,1,1,1]],
   [[0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]],
   [[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [1,1,1,1]],
   [[0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]]
   ])
(def field-width 10)
(def field-height 20)
(def blocks [block0 block1 block2 block3 block4 block5 block6])

(def select-block-index
  (let [c (count blocks)]
    #(rand-int c)))

(defrecord Pos [x y])
(defrecord Block [type direction pos])

(defn generate-block []
  (let [i (select-block-index)
        dir 0
        x 4
        y (- (count ((blocks i) 0)))]
    (->Block i dir (->Pos x y))))

(def b (generate-block))
(def b2 (generate-block))

(defn get-block-pattern [block]
  (-> block
      :type
      blocks
      (nth (:direction block))))

(def b (generate-block))
(get-block-pattern b)

(get-block-pattern (generate-block))

;;; 20(h) x 10(w)
(def initial-field (vec  (repeat field-height (vec (repeat field-width 0)))))

(defn fill-line? [l]
  (every? #(= 1 %) l))

(defn empty-line? [l]
  (every? #(= 0 %) l))

(defn clean-line []
  (vec (repeat field-width 0)))

(defn get-erase-candidate
  "1111... で埋まった行のインデクスをかえす"
  [field]
  (let [ indexed-field (map-indexed #(vector %1 %2) field)]
    (->> indexed-field
         (filter #(fill-line? (second %)))
         (map first))))

(defn erase
  "111... を 000... に変更"
  [field erase-line]
  (let [cl (repeat (count erase-line) (clean-line))
        args (interleave erase-line cl)
        ]
    (apply assoc field args)))

(defn drop-blocks
  "0000.... 行を消して落とす"
  [field]
  (let [g (group-by empty-line? field)]
    (concat  (get g true) (get g false))))

(defn move-block [block x y]
  (let [p (->Pos (+ x (:x(:pos block))) (+ (:y (:pos block)) y))]
    (assoc block :pos p)))

(defn move-left [block]
  (move-block block -1 0))

(defn move-right [block]
  (move-block block 1 0))

(defn move-down [block]
  (move-block block 0 1))

(defn get-match-pattern [b]
  "フィールド内に含まれるブロックを位置と組み合わせて返す"
  (let [pattern (get-block-pattern b)
        start (:y (:pos b))
        end (+ (count pattern) start)
        targets (->> pattern
                     (interleave (range start end))
                     (partition 2)
                     (filter #(<= 0 (first %))))]
    targets))

(defn set-block [field block]
  (let [pattern (get-match-pattern block)
        key (map first pattern)
        x (get-in block [:pos :x])
        ]
    (apply assoc)
    ))

;; FIXME
;; (set-line [0 0 0 0 0 0 0 0] [1 2 3] 4)
;; [0 0 0 0 1 2 3 0]
(defn set-line [field-line block-line x]
  (apply assoc field-line (interleave (range x (+ x (count block-line))) block-line) ))

(set-block initial-field (assoc-in b2 [:pos :y] 3))

(defn rot-right [block]
  (assoc block :direction (mod (inc (:direction block))4)))

(defn rot-left [block]
  (assoc block :direction (mod (dec (:direction block))4)))

(defn can-move? [field block]
  nil)
