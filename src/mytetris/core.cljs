(ns mytetris.core
  (:require
   [reagent.core :as r]))

(declare rot-left rot-right move-left move-right move-down  set-line draw-canvas-contents initial-field initial-state generate-block state main-loop can-move? move-block)
(declare set-block erase-blocks render-button stop-game stop-timer field-width field-height make-initial-state get-block-pattern key-down)
(declare blocks  ->Block ->Pos select-block-index rot-left-internal)

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
       [:canvas#next-block (if-let [ node @dom-node ]
                             {:width (* 5 (/ (.-clientWidth node ) field-width ))
                              :height (* 3 (/  (.-clientHeight node) field-height))})]
       ])}))

(defn render-button [value on-click]
  [:button.squre {:on-click on-click} value])

(def color-map
  {0 "rgb(180, 180, 180)"
   1 "rgb(50, 30, 100)"
   2 "rgb(0, 180, 180)"
   3 "rgb(180, 0, 180)"
   4 "rgb(0, 180, 0)"
   5 "rgb(130, 50, 0)"
   6 "rgb(0, 80, 180)"
   7 "rgb(180, 30, 20)"
   8 "rgb(100, 50, 20)"
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
                                 (- w 3)
                                 (- h 3)))
                   (map-indexed vector row))))]
    (doall (map #(do
                   (draw-row (% 1) (% 0) ctx cell-w cell-h))
                (map-indexed vector block)))))

(defn draw-next-block [canvas block]
  (let [ctx (.getContext canvas "2d")
        b (move-block block -3 1)
        f (vec (repeat 2 (vec (repeat 4 0))))]
    (draw-block ctx (set-block f b) 0 0 25 25)))

(defn draw-canvas-contents [canvas state]
  (let [ ctx (.getContext canvas "2d")
        field (state :field)
        block (state :current-block)
        w (/ (.-clientWidth canvas) field-width)
        h (/ (.-clientHeight canvas) field-height) ]
    (if (not (nil? block))
      (draw-block ctx (set-block field block) 0 0 w h)
      (draw-block ctx field 0 0 w h))))

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
                ;; "ArrowDown" (move-down b)
                "Space" (move-down b)
                nil))]
      (if (and
           (= "keydown" (.-type ev))
           (not (nil? (@state :current-block))))
        (let [new-block (get-new-block ev (@state :current-block))
              field (@state :field)]
          (cond (nil? new-block) nil
                (can-move? field (get-block-pattern new-block))
                (do
                  (swap! state assoc :current-block new-block)
                  (draw-canvas-contents (.-firstChild @dom-node) @state))))))))

(defn set-timer [dom-node state]
  (let [interval-id (.setTimeout js/window main-loop (@state :interval) dom-node  state)]
    (swap! state assoc :interval-id interval-id)))

(defn set-main-loop [dom-node state handler]
  (swap! state assoc :current-block (generate-block))
  (.addEventListener js/window "keydown" handler)
  (set-timer dom-node state))

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

(defn get-new-interval [current-interval min-interval count]
  (if (zero? (mod count 20))
    (max min-interval (- current-interval 50) )  ; dec 50 milisec
    current-interval))

(defn main-loop [dom-node state]
  (if-let [erased-field (erase-blocks (@state :field))]
    (do (swap! state assoc :field erased-field)
        (set-timer dom-node state))
    (let [current-block (@state :current-block)
          next-block (@state :next-block)
          field (@state :field)
          b (move-down current-block)]
      (if (can-move? field  (get-block-pattern b))
        (do (swap! state assoc :current-block b)
            (set-timer dom-node state))
        (do (if (top-of-field? current-block)
              ;; 下に移動できないかつ、最上段 なのでgame over
              (do
                (swap! state update-in [:field] #(set-block % current-block))
                (stop-game state))
              ;; 最上段でない場合はブロック消去判定を実施,次のブロックを生成
              (do (let [new-field (set-block (@state :field) current-block)
                        c (inc (@state :count))
                        interval (get-new-interval  (@state :interval) (@state :min-inteval) c) ]
                    (swap! state assoc
                           :field new-field
                           :current-block next-block
                           :next-block (generate-block)
                           :interval interval
                           :count c))
                  (set-timer dom-node state)))))))
  (draw-canvas-contents (.-firstChild @dom-node) @state)
  (if-let [next-block (@state :next-block)]
    (draw-next-block (aget (.-childNodes @dom-node) 1) next-block)))

(def initial-state {:field nil
                    :current-block nil
                    :next-block nil
                    :score 0
                    :interval 600
                    :interval-id nil
                    :min-inteval 100
                    :count 0
                    })

(defn make-initial-state []
  (let [v (vec  (repeat field-height (vec (repeat field-width 0))))]
    (assoc initial-state
           :field v
           :next-block (generate-block))))

(defn stop-game [state]
  (stop-timer state)
  (swap! state assoc :current-block nil :next-block nil)
  (.log js/console "stop block " (@state :current-block)))

;; -------------------------
;; Views
(defn usage []
  [:div
   [:div "↑ rotate right"]
   [:div "↓ rotate left"]
   [:div "→ right"]
   [:div "← left"]
   [:div "space  down"]])

(defn game []
  (let [state (r/atom (make-initial-state))
        dom-node (r/atom nil)
        handler (key-down-handler dom-node state)
        ]
    [:div
     (render-button "start" #(if (nil? (@state :current-block))
                               (do (initialize-state state) (set-main-loop dom-node state handler))))
     (render-button "stop" #(stop-game state))
     [div-with-canvas dom-node state]
     ]))

;; -------------------------
;; Initialize app

(defn main []
  (r/render [game]
            (.getElementById js/document "app"))
  (.addEventListener js/window "resize" on-window-resize)
  (let [canvas (.getElementById js/document "field")]))

(defn init! []
  (main))
;; -------------------------
;; Tetris logic
;;
(def blocks
  [[[-1 0] [0 0] [1 0] [0 -1]] ;; I
   [[-1 0] [0 0] [1, 0] [2 0]] ;; O
   [[0, -1] [1 -1] [0 0] [1 0]] ;; S
   [[-1 0] [0 0] [0 -1] [1 -1]] ;; Z
   [[-1 -1] [0 -1] [0 0]  [1 0]] ;; L
   [[1 -1] [-1 0] [0 0] [1 0]] ;; J
   [[-1 -1] [-1 0] [0 0] [1 0]]])

;;;
;;; [x y] の配列を90左回転させる
;;; (rot-left-internal [[0 0] [0 1] [1 0] [1 1]]) [[0 0] [1 0] [0 -1] [1 -1]]
;;;
(defn rot-left-internal [b]
  (mapv #(vector (% 1) (- (% 0))) b))

(defn rot-left [block]
  (let [{pattern :pattern type :type} block]
    (if-not (= type 2)
      (assoc block :pattern (rot-left-internal pattern)))))

(defn rot-right-internal [b]
  (mapv #(vector (- (% 1)) (% 0)) b))

(defn rot-right [block]
  (let [{pattern :pattern type :type} block]
    (if-not (= type 2)
      (assoc block :pattern (rot-right-internal pattern)))))

(def field-width 10)
(def field-height 20)

(def select-block-index
  (let [c (count blocks)]
    #(rand-int c)))

(defrecord Pos [x y])
(defrecord Block [type pattern pos])

(defn generate-block []
  (let [i (select-block-index)
        x 4
        y 0]
    (->Block i (blocks i) (->Pos x y))))

;;; 20(h) x 10(w)
(def initial-field (vec (repeat field-height (vec (repeat field-width 0)))))

(defn unerase-line? [l]
  (not-every? #(>= % 1) l))

(defn get-store-candidate
  "消さないブロックのインデクスのシーケンスを返す"
  [field]
  (let [ indexed-field (map-indexed vector field)]
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
      (let [clean-field (repeat c (vec  (repeat field-width 0)))
            deleted-field (replace field store-lines)]
        (apply vector  (concat clean-field deleted-field)))
      nil)))

(defn move-block [block dx dy]
  (let [{x :x y :y } (:pos block)
        p (->Pos (+ x dx) (+ y dy))]
    (assoc block :pos p)))

(defn move-left [block]
  (move-block block -1 0))

(defn move-right [block]
  (move-block block 1 0))

(defn move-down [block]
  (move-block block 0 1))

;; ブロックのセル毎の座標のvector返す
;; (let [b (->Block 0 (blocks 0)  (->Pos 0 0))]
;;   (let [b2 (move-down b)]
;;     (get-block-pattern b2)))
;; [[-1 1] [0 1] [1 1] [0 0]]

(defn get-block-pattern[block]
  (let [{dx :x dy :y} (:pos block)
        block-pattern (:pattern block) ]
    (mapv #(vector (+ (% 0) dx) (+ (% 1) dy)) block-pattern)))

;;; return new field
(defn set-block [field block]
  (let [pattern (get-block-pattern block)
        color   (inc  (:type block))
        valid-pattern (filter #(>= (% 1) 0) pattern)]
    (reduce #(assoc-in %1 [(%2 1) (%2 0)] color) field valid-pattern)))
;; (reduce #(assoc-in %1 %2 3)
;;         [[0 0 0] [0 0 0]]
;;         [[0 0] [0 1]])
;; (in-field? [[0 0 0] [0 0 0]] 0 0) t
;; (in-field? [[0 0 0] [1 0 0]] 0 1) f
;; (in-field? [[0 0 0] [1 0 0]] 1 1) t
(defn in-field? [f x y]
  (and (>= x 0)
       (< x field-width)
       (< y field-height)
       (zero? ((f y) x))))
;; true, flase
;; (let [f [[0 0 0 0]
;;          [0 1 1 0]
;;          [1 1 0 0]]
;;       p0 [[0 0] [0 1]]
;;       p1 [[1 1] [1 1]]]
;;   (map #(can-move? f %) (list p0 p1)))

(defn can-move? [field pattern]
  (let [p (filter #(>= (% 1) 0) pattern)]
    (every? true? (map  #(apply in-field? field %) p))))
