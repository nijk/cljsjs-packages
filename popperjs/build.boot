(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.9.0"  :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "1.14.3")
(def +version+ (str +lib-version+ "-0"))
(def +lib-folder+ (format "popperjs-%s" +lib-version+))

(task-options!
 pom  {:project     'cljsjs/popperjs
       :version     +version+
       :description "PopperJS"
       :url         "https://github.com/FezVrasta/popper.js"
       :scm         {:url "https://github.com/cljsjs/packages"}
       :license     {"MIT" "http://opensource.org/licenses/MIT"}})

(require '[boot.core :as boot]
         '[boot.tmpdir :as tmpd]
         '[clojure.java.io :as io]
         '[clojure.string :as string])

(deftask download-popperjs []
  (download :url (format "https://github.com/FezVrasta/popper.js/archive/v%s.zip" +lib-version+)
            :unzip true))

(deftask build-popperjs []
  (let [tmp (boot/tmp-dir!)]
    (with-pre-wrap fileset
      (doseq [f (boot/input-files fileset)
              :let [target (io/file tmp (tmpd/path f))]]
        (io/make-parents target)
        (io/copy (tmpd/file f) target))
      (-> fileset (boot/add-resource tmp) boot/commit!))))


(deftask package []
  (comp

   (download-popperjs)

   (build-popperjs)

   (sift :move {#"^popper.*/dist/umd/popper.js" "cljsjs/popperjs/development/popper.umd.inc.js"})

   (sift :move {#"^popper.*/dist/umd/popper.min.js" "cljsjs/popperjs/production/popper.umd.inc.js"})

   (deps-cljs :name "cljsjs.popperjs"
              :global-exports '{popper Popper})
  (pom)
  (jar)
  (validate-checksums)))
