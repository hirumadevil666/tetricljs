(ns ^:figwheel-no-load mytetris.dev
  (:require
    [mytetris.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
