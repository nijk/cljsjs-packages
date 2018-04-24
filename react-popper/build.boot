(set-env!
 :resource-paths #{"resources"}
 :dependencies '[[cljsjs/boot-cljsjs "0.10.0"  :scope "test"]
                 [cljsjs/react "16.3.0-1"]
                 [cljsjs/react-dom "16.3.0-1"]
                 [cljsjs/popperjs "1.14.3-1"]
                 [cljsjs/prop-types "15.6.0-0"]])

(def +lib-version+ "0.10.1")
(def +version+ (str +lib-version+ "-1"))
(def +lib-folder+ (format "react-popper-%s" +lib-version+))

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(task-options!
 pom  {:project     'cljsjs/react-popper
       :version     +version+
       :description "React wrapper around PopperJS"
       :url         "https://github.com/souporserious/react-popper"
       :scm         {:url "https://github.com/cljsjs/packages"}
       :license     {"MIT" "http://opensource.org/licenses/MIT"}})

(require '[boot.core :as boot]
         '[boot.tmpdir :as tmpd]
         '[clojure.java.io :as io]
         '[clojure.string :as string])

(deftask download-react-popper []
  (download :url (format "https://github.com/souporserious/react-popper/archive/v%s.zip" +lib-version+)
            :unzip true))

(deftask build []
  (let [tmp (boot/tmp-dir!)]
    (with-pre-wrap
     fileset
     (doseq [f (boot/input-files fileset)]
       (let [target (io/file tmp (tmpd/path f))]
         (io/make-parents target)
         (io/copy (tmpd/file f) target)))
     (io/copy
      (io/file tmp "webpack.config.js")
      (io/file tmp +lib-folder+ "webpack.config.js"))
     (io/copy
      (io/file tmp "webpack.production.config.js")
      (io/file tmp +lib-folder+ "webpack.production.config.js"))
     (binding [*sh-dir* (str (io/file tmp +lib-folder+))]
              ((sh "npm" "install" "--ignore-scripts"))
              ((sh "npm" "run" "build:es"))
              ((sh "npm" "install" "babel-loader"))
              ((sh "npm" "install" "webpack"))
              ((sh "npm" "install" "webpack-cli"))
              ((sh "./node_modules/.bin/webpack" "--config" "webpack.config.js"))
              ((sh "./node_modules/.bin/webpack" "--config" "webpack.production.config.js")))
     (-> fileset (boot/add-resource tmp) boot/commit!))))

(deftask package []
  (comp
    (download-react-popper)
    (build)

    (sift :move {#"^react-popper-.*/dist/react-popper.js" "cljsjs/react-popper/development/react-popper.inc.js"})
    (sift :move {#"^react-popper-.*/dist/react-popper.min.js" "cljsjs/react-popper/production/react-popper.min.inc.js"})

    (sift :include #{#"^cljsjs"})
    (deps-cljs :name "cljsjs.react-popper"
               :requires ["cljsjs.react"
                          "cljsjs.react.dom"
                          "cljsjs.popperjs"
                          "cljsjs.prop-types"])
    (pom)
    (jar)
    (validate-checksums)))
