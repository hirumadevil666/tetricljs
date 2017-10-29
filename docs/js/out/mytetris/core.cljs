(ns mytetris.core
  (:require
   [reagent.core :as r]))

(declare rot-left rot-right move-left move-right move-down set-line draw-canvas-contents initial-field initial-state generate-block state main-loop blocks can-move?)
(declare set-block erase-blocks render-button stop-game stop-timer field-width field-height make-initial-state get-block-pattern key-down)
;; Canvas settings
;; Views
(def window-width (r/atom nil))
(defn on-window-resize [ evt ]
  (reset! window-width (.-innerWidth js/window)))

(defn div-with-canvas [dom-node state]
  (r/create-class
   {:component-did-update
    (fn [ this ]
      (draw-canvas-contents (.-firstChild @dom-node) @state))

    :component-did-mount
    (fn [ this ]
      (reset! dom-node (r/dom-node this)))

    :reagent-render
    (fn []
      @window-width ;; Trigger re-render on window resizes
      [:div.with-canvas
       ;; reagent-render is called before the compoment mounts, so
       ;; protect against the null dom-node that occurs on the first
       ;; render
       [:canvas#field (if-let [ node @dom-node ]
                        {:width (.-clientWidth node)
                         :height (.-clientHeight node)})]
       ])}))

(defn render-button [value on-click]
  [:button.squre {:on-click on-click} value])

(def color-map
  {0  "rgb(180, 180, 180)"
   1  "rgb(50, 30, 100)"
   2   "rgb(0, 180, 180)"
   3   "rgb(180, 0, 180)"
   4   "rgb(0, 180, 0)"
   5   "rgb(130, 50, 0)"
   6   "rgb(0, 80, 180)"
   7   "rgb(0, 80, 0)"
   })

(defn draw-block [ctx block x y cell-w cell-h]
  (letfn [(draw-row
            [row row-index ctx w h]
            (doall
             (map  #(do
                      (aset  ctx "fillStyle" (color-map (% 1)))
                      (.fillRect ctx
                                 (* (+ (% 0) x) w )
                                 (* (+ row-index y) h)
                                 (- w 3 )
                                 (- h 3 )))
                   (map-indexed #(vector %1 %2) row))))]
    (doall
     (map #(do
             (draw-row (% 1) (% 0) ctx cell-w cell-h))
          (map-indexed #(vector %1 %2) block)))))

(defn draw-canvas-contents [canvas state]
  (let [ ctx (.getContext canvas "2d")
        field (state :field)
        block (state :current-block)
        h (.-clientHeight canvas)
        w (.-clientWidth canvas)
        cell-w (/ w field-width )
        cell-h (/ h field-height )
        ]
    (if (not (nil? block))
      (let [x (get-in block [:pos :x])
            y (get-in block [:pos :y])
            b (get-block-pattern block)]
        (draw-block ctx (set-block field block) 0 0 cell-w cell-h)))))
;;; state handling
(defn initialize-state [state]
  (swap! state #(identity %2) (make-initial-state))
  @state)

(defn key-down-handler [dom-node state]
  (fn [ev]
    (letfn [(get-new-block [e b]
              (case (.-code ev)
                "ArrowRight" (move-right b)
                "ArrowLeft" (move-left b)
                "ArrowUp" (rot-left b)
                "ArrowDown" (rot-right b)
                "Space" (move-down b)
                nil))]
      (if (and
           (= "keydown" (.-type ev))
           (not (nil? (@state :current-block))))
        (let [new-block (get-new-block ev (@state :current-block))
              field (@state :field)]
          (cond (nil? new-block) nil
                (can-move? field new-block)
                (do
                  (swap! state assoc :current-block new-block)
                  (draw-canvas-contents (.-firstChild @dom-node) @state))))))))

(defn set-main-loop [dom-node state handler]
  (swap! state assoc :current-block (generate-block))
  (.addEventListener js/window "keydown" handler)
  (let [interval-id (.setInterval js/window main-loop (@state :interval) dom-node  state)]
    (swap! state assoc :interval-id interval-id)))

(defn stop-timer [state]
  (let [interval-id (:interval-id @state)]
    (if (not (nil? interval-id))
      (do
        (.clearInterval  js/window interval-id)
        (swap! state assoc :interval-id nil)
        true))))

(defn top-of-field? [block]
  (if (zero? (get-in block [:pos :y]))
    true
    false))

(defn main-loop [dom-node state]
  (if-let [erased-field (erase-blocks (@state :field))]
    (swap! state assoc :field erased-field)
    (let [current-block (@state :current-block)
          field (@state :field)
          b (move-down current-block)]
      (if (can-move? field  b)
        (swap! state assoc :current-block b)
        ;; 下に移動できないかつ、最上段 なのでgame over
        (do (if (top-of-field? current-block)
              (stop-game state)
              ;; 最上段でない場合はブロック消去判定を実施,次のブロックを生成
              (do (let [new-field (set-block (@state :field) current-block)]
                    (swap! state assoc :field new-field))
                  (swap! state assoc :current-block (generate-block))))))))
  (draw-canvas-contents (.-firstChild @dom-node) @state))

(def initial-state {:field nil
                    :current-block nil
                    :next-block nil
                    :score 0
                    :interval 600
                    :interval-id nil
                    })
(defn make-initial-state []
  (let [v (vec  (repeat field-height (vec (repeat field-width 0))))]
    (assoc initial-state :field v)))

(defn stop-game [state]
  (stop-timer state)
  (swap! state assoc :current-block nil)
  (.log js/console "stop block " (@state :current-block)))

;; -------------------------
;; Views

(defn game []
  (let [state (r/atom initial-state)
        dom-node (r/atom nil)
        handler (key-down-handler dom-node state)
        ]
    [:div
     (render-button "start" #(if (nil? (@state :current-block))
                               (do (initialize-state state) (set-main-loop dom-node state handler))))
     (render-button "stop" #(stop-game state))
     [div-with-canvas dom-node state]]))

;; ---------- event handlers on canvas
(defn on-click [ev]
  (.log js/console "xxxxx"))
;; -------------------------
;; Initialize app

(defn main []
  (r/render [game]
            (.getElementById js/document "app"))
  (.addEventListener js/window "resize" on-window-resize)
  (let [canvas (.getElementById js/document "field")]
    (.addEventListener canvas "click" on-click)))

(defn init! []
  (main))
;; -------------------------
;; Tetris logic

(def block0
  [[[1,1,1],
    [0,1,0]],
   [[0,1],
    [1,1],
    [0,1]],
   [[0,1,0],
    [1,1,1]],
   [[1,0],
    [1,1],
    [1,0]]
   ])

(def block1
  [[[2,2,2],
    [0,0,2]],
   [[0,2],
    [0,2],
    [2,2]],
   [[2,0,0],
    [2,2,2]],
   [[2,2],
    [2,0],
    [2,0]]
   ])

(def block2
  [[[3,3,3],
    [3,0,0]],
   [[3,3],
    [0,3],
    [0,3]],
   [[0,0,3],
    [3,3,3]],
   [[3,0],
    [3,0],
    [3,3]]])

(def block3
  [[[4,4,0],
    [0,4,4]],
   [[0,4],
    [4,4],
    [4,0]],
   [[4,4,0],
    [0,4,4]],
   [[0,4],
    [4,4],
    [4,0]]])

(def block4
  [[[0,5,5],
    [5,5,0]],
   [[5,0],
    [5,5],
    [0,5]],
   [[0,5,5],
    [5,5,0]],
   [[5,0],
    [5,5],
    [0,5]]])

(def block5
  [[[6,1],
    [1,6]],
   [[1,6],
    [6,1]],
   [[6,1],
    [1,6]],
   [[1,6],
    [6,1]]])

(def block6
  [[[7,7,7,7]],
   [[7],
    [7],
    [7],
    [7]],
   [[7,7,7,7]],
   [[7],
    [7],
    [7],
    [7]]
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
        y 0]
    (->Block i dir (->Pos x y))))

(defn get-block-pattern [block]
  (-> block
      :type
      blocks
      (nth (:direction block))))

(def b (generate-block))
(def b2 (generate-block))

;;; 20(h) x 10(w)
(def initial-field (vec  (repeat field-height (vec (repeat field-width 0)))))

(defn unerase-line? [l]
  (not-every? #(>= % 1) l))

(defn get-store-candidate
  "消さないブロックのインデクスのシーケンスを返す"
  [field]
  (let [ indexed-field (map-indexed #(vector %1 %2) field)]
    (->> indexed-field
         (filter #(unerase-line? (second %)))
         (map first)
         (seq))))
;; (get-store-candidate [ [1 1 1 1] [0 0 1 ] [0 0 0] [1 2 1]]) => (1 2)

(defn erase-blocks
  "0000.... 行を消して落とす"
  [field]
  (let [store-lines (get-store-candidate field)
        c (- field-height  (count store-lines))]
    (if (> c 0)
      (let [clean-field (repeat c (repeat field-width 0))
            deleted-field (replace field store-lines)]
        (apply vector  (concat clean-field deleted-field)))
      nil)))

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
        h (count pattern)
        end  (get-in b [:pos :y])
        start (- end h)
        ;; start (:y (:pos b))
        ;; end (+ (count pattern) start)
        targets (->> pattern
                     (interleave (range start end))
                     (partition 2)
                     (filter #(<= 0 (first %))))]
    targets))
;; (set-line [0 0 0 0 0 5 0 0] [1 0 3] 4)
;; [0 0 0 0 1 5 3 0]
;; (set-line [0 0 0 0 0] [1 2 3] -1)
;; [2 3 0 0 0 0 0 0 0]

(defn set-line [target data x]
  (letfn [(f [lis n]
            (concat (repeat n 0 ) lis (repeat field-width 0))
            )]
    (apply vector
           (map #(apply max %)  (partition 2 (interleave target (f data x)))))))

(defn set-block [field block]
  (let [pattern (get-match-pattern block)
        key (map first pattern)
        x (get-in block [:pos :x])
        new-lines (map #(set-line (nth field (first %)) (second %) x) pattern)]
    (if (not (empty? key))
      (apply assoc field (interleave key new-lines)))))

(defn rot-right [block]
  (assoc block :direction (mod (inc (:direction block))4)))

(defn rot-left [block]
  (assoc block :direction (mod (dec (:direction block))4)))

;; (check-line [1 1 0 0 1 0 0 0 ] [2 0 0] 2)
(defn check-line [target data x]
  (letfn [(f [lis]
            (not-every? #(> % 0) lis))
          (get-newdata [x data]
            (concat (repeat x 0) data))]
    (let [new-data (get-newdata x data)]
      (every? true?  (map f (partition 2 (interleave new-data target)))))))
(not-every? #(> % 0)  [3 3])

(defn can-move? [field block]
  (let [pattern (get-match-pattern block)
        bp (get-block-pattern block)
        x (get-in block [:pos :x])
        y (get-in block [:pos :y])]
    (cond
      (< x 0) false
      (> (+  x (count (bp 0))) field-width) false ;右端
      (> y field-height) false ;; 一番下
      :else (let [r (map #(check-line (nth field (first %)) (second %) x) pattern)]
              (every? true? r)))))

;; (def f [[0 0 0 0 ] [0 0 0 0 ] [0 0 0 0 ]])
;; (def b (->Block 3 1 (->Pos 0 18)))
;; (count (nth (get-block-pattern b)0))
;; (can-move? initial-field b)

(defn can-down? [field block]
  (let [b (move-down block)]
    (can-move? field b)))
;; (can-move? (assoc initial-field 0 [1 1 1 1 1 1 1 1 1 ])  (assoc-in b2 [:pos :y] 4))
;; (can-move? (assoc initial-field 1 [1 1 1 1 1 1 1 1 1 ])  (-> b2 move-down ))
