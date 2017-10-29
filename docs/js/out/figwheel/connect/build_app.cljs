(ns figwheel.connect.build-app (:require [mytetris.core] [mytetris.dev] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mytetris.core.mount-root (apply js/mytetris.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mytetris.core/mount-root' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

