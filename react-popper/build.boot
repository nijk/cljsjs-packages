(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.9.0"  :scope "test"]
                  [cljsjs/prop-types "15.6.0-0"]
                  [cljsjs/react "15.6.2-0"]
                  [cljsjs/react-dom "15.6.2-0"]
                  [cljsjs/popperjs "1.14.3-0"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "0.10.0")
(def +version+ (str +lib-version+ "-0"))
(def +lib-folder+ (format "react-popper-%s" +lib-version+))

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

(deftask build-react-popper []
  (let [tmp (boot/tmp-dir!)]
    (with-pre-wrap fileset
      (doseq [f (boot/input-files fileset)
              :let [target (io/file tmp (tmpd/path f))]]
        (io/make-parents target)
        (io/copy (tmpd/file f) target))
      (binding [boot.util/*sh-dir* (str (io/file tmp +lib-folder+))]
        ((sh "npm" "install")))
      (-> fileset (boot/add-resource tmp) boot/commit!))))


(deftask package []
  (comp

    (download-react-popper)

    (build-react-popper)

    (sift :move {#"^react-popper-.*/dist/react-popper.umd.js" "cljsjs/react-popper/development/react-popper.umd.inc.js"})

    (sift :move {#"^react-popper-.*/dist/react-popper.umd.min.js" "cljsjs/react-popper/production/react-popper.umd.min.inc.js"})

    (sift :include #{#"^cljsjs"})
    (deps-cljs :name "cljsjs.react-popper"
               :requires ["cljsjs.react" "cljsjs.react.dom" "cljsjs.prop-types" "cljsjs.popperjs"])
    (pom)
    (jar)
    (validate-checksums)))
