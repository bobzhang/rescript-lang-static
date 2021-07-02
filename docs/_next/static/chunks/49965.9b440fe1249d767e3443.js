(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49965],{49965:function(e,t,i){"use strict";i.r(t),i.d(t,{make:function(){return o}});var r=i(67294),s=i(95084),n=JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","definitions":{"module-format":{"enum":["commonjs","es6","es6-global"],"description":"es6-global generate relative `require` paths instead of relying on NodeJS\' module resolution. Default: commonjs."},"suffix-spec":{"enum":[".js",".bs.js",".mjs",".cjs"],"description":"suffix of generated js files, default to [.js] "},"module-format-object":{"type":"object","properties":{"module":{"$ref":"#/definitions/module-format"},"in-source":{"type":"boolean","description":"Default: false."},"suffix":{"$ref":"#/definitions/suffix-spec"}},"required":["module"]},"package-spec":{"oneOf":[{"$ref":"#/definitions/module-format"},{"$ref":"#/definitions/module-format-object"}]},"namespace-spec":{"oneOf":[{"type":"boolean","description":"true to use the package name as namespace, false to not use"},{"type":"string","description":"provide customized namespace name"}]},"package-specs":{"oneOf":[{"type":"array","items":{"$ref":"#/definitions/package-spec"}},{"$ref":"#/definitions/package-spec"}]},"react-jsx-version":{"title":"jsx-version","type":"number","description":"backward compatible mode, true means on with the default to be version 1 (the default value is subject to change)"},"ppx-specs":{"type":"array","items":{"oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}]}},"pp-specs":{"type":"string"},"bs-dependency":{"type":"string","title":"dependency"},"dependencies":{"type":"array","items":{"$ref":"#/definitions/bs-dependency"}},"js-post-build":{"type":"object","properties":{"cmd":{"type":"string"}}},"rule-generator":{"type":"object","properties":{"name":{"type":"string"},"command":{"type":"string"}},"description":"The shell command is running in *dev* time, and you generated could should be checked in, the depedency is tracked properly during dev time,example: `{ \\"name\\" : \\"ocamllex\\", \\"command\\" : \\"ocamllex.opt $in -o $out\\"}`"},"build-generator":{"type":"object","properties":{"name":{"type":"string"},"edge":{"type":"array","items":{"type":"string"}}},"description":"Note that we will add the directory path accordingly"},"sourceItem":{"title":"sourceItem","oneOf":[{"type":"object","properties":{"dir":{"type":"string","description":"name of the directory"},"type":{"enum":["dev"]},"files":{"oneOf":[{"type":"array","items":{"type":"string"},"description":"if files are empty, the build system will populate it automatically. Useful for initial build"},{"type":"object","properties":{"slow-re":{"type":"string","description":"Regex to glob the patterns, syntax is documented [here](http://caml.inria.fr/pub/docs/manual-ocaml/libref/Str.html), for better incremental build performance, we\'d suggest listing files explicitly"},"excludes":{"type":"array","items":{"type":"string"},"description":"Files to be excluded"}}}]},"generators":{"type":"array","items":{"$ref":"#/definitions/build-generator"},"description":"(WIP) Files generated in dev time"},"public":{"oneOf":[{"type":"array","items":{"type":"string"},"description":"Selected modules, for example, [Module_a, Module_b] "},{"enum":["all"]}],"description":"Default: export all modules. It is recommended for library developers to hide some files/interfaces"},"resources":{"type":"array","items":{"type":"string"}},"subdirs":{"title":"Sub directories","oneOf":[{"$ref":"#/definitions/sources","description":"More source directories"},{"type":"boolean","description":"true means traverse to all subdirs"}]},"group":{"oneOf":[{"type":"string","description":"A _unique_ name for each directory to refer as an internal dependency later"},{"type":"object","properties":{"name":{"type":"string"},"hierachy":{"type":"boolean","description":"When true, all subdirs are considered as a whole as dependency"}}}],"description":"Not implemented yet"},"internal-depends":{"type":"array","items":{"type":"string","description":"internal dependencies, if unspecified, all existing listed source files are considered potential dependencies"}}},"required":["dir"]},{"title":"Single non-nested directory","type":"string"}]},"sources":{"oneOf":[{"type":"array","items":{"$ref":"#/definitions/sourceItem"},"description":"A list of source items"},{"$ref":"#/definitions/sourceItem","description":"A single source item"}],"description":"Example: `\\"src\\"` or `[\\"src\\", \\"test\\"]` or `[{\\"dir\\": \\"src\\", \\"subdirs\\": [...]}]`"},"targetItems":{"type":"object","properties":{"kind":{"enum":["native","bytecode","js"],"description":"The compiler to use for the target"},"main":{"type":"string","description":"Name of the main module used as entry point for this target. \'entry-point\' isn\'t used when this project is built as a dependency."}}},"entries":{"type":"array","items":{"$ref":"#/definitions/targetItems"},"description":"A list of buildable targets"},"gentype-specs":{"type":"object","properties":{"path":{"type":"string"}},"description":"path to gentype, path resolution is similar to reason"},"reason-specs":{"type":"object","properties":{"react-jsx":{"$ref":"#/definitions/react-jsx-version","description":"Whether to apply the [Reason-React](https://github.com/reasonml/reason-react)-specific JSX PPX transformation."}}},"refmt-specs":{"oneOf":[{"type":"number","enum":[2,3],"description":"Reason syntax version to use. Prefer 3. Default: 2, for backward-compatiblity"},{"type":"string","description":"(Usually not needed) Alternative path to `refmt`, the Reason syntax binary. Default: path to the `refmt.exe` ReScript provides out of the box"}]},"bsc-flags":{"oneOf":[{"type":"array","items":{"type":"string"},"description":"Default: `[\\"-no-alias-deps\\"]`"},{"type":"object","properties":{"kind":{"enum":["reset","prefix","append"]},"flags":{"type":"array","items":{"type":"string"}}},"description":"(Not implemented yet)"}]}},"title":"ReScript build configuration","description":"All paths are required to be in **Unix format** (foo/bar), the build system normalizes them for other platforms internally","type":"object","properties":{"version":{"type":"string","description":"The semantic version of the OCaml library"},"name":{"type":"string","description":"Package name"},"namespace":{"$ref":"#/definitions/namespace-spec","description":"can be true/false or a customized name"},"sources":{"$ref":"#/definitions/sources","description":"Source code location"},"ignored-dirs":{"type":"array","items":{"type":"string"},"description":"a list of directories that bsb will not look into"},"bs-dependencies":{"$ref":"#/definitions/dependencies","description":"OCaml/Reason dependencies of the library, like in package.json. Currently searches in `node_modules`"},"bs-dev-dependencies":{"$ref":"#/definitions/dependencies","description":"OCaml/Reason dev dependencies of the library, like in package.json. Currently searches in `node_modules`"},"pinned-dependencies":{"$ref":"#/definitions/dependencies","description":"Those dependencies are pinned (since version 8.4)"},"generators":{"type":"array","items":{"$ref":"#/definitions/rule-generator"},"description":"(WIP) Pre defined rules"},"cut-generators":{"type":"boolean","description":"Ignore generators, cut the dependency on generator tools"},"reason":{"$ref":"#/definitions/reason-specs","description":"ReScript comes with [Reason](http://reasonml.github.io/) by default. Specific configurations here."},"gentypeconfig":{"$ref":"#/definitions/gentype-specs","description":"gentype config, see cristianoc/genType for more details"},"bsc-flags":{"$ref":"#/definitions/bsc-flags","description":"Flags passed to bsc.exe"},"warnings":{"type":"object","properties":{"number":{"type":"string","description":"Default: -40+6+7+27+32..39+44+45 [Here](https://caml.inria.fr/pub/docs/manual-ocaml/comp.html#sec270) for the meanings of the warning flags"},"error":{"oneOf":[{"type":"boolean","description":"True means warn is error(default)"},{"type":"string","description":"Same as warning number but different set"}]}},"description":"warning numbers and whether to turn it into error or not"},"ppx-flags":{"$ref":"#/definitions/ppx-specs","description":"PPX macros to pass to compiler. The syntax is package_name/binary, for example: `reason/reactjs_jsx_ppx_3.native`. Currenly searches in `node_modules`"},"pp-flags":{"$ref":"#/definitions/pp-specs","description":"preprocessors to pass to compiler. The syntax is package_name/binary, for example: `pp/syntax.exe`. Currenly searches in `node_modules`"},"js-post-build":{"$ref":"#/definitions/js-post-build","description":"(Experimental) post-processing hook. bsb will invoke `cmd ${file}` whenever a `${file}` is changed"},"package-specs":{"$ref":"#/definitions/package-specs","description":"ReScript can currently output to [Commonjs](https://en.wikipedia.org/wiki/CommonJS), and [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)"},"entries":{"$ref":"#/definitions/entries","description":"(internal) Used by bsb to build to different targets: native (ocamlopt), bytecode (ocamlc) or JS (bsc)"},"generate-merlin":{"type":"boolean","description":"Whether to generate the `.merlin` file for [Merlin](https://github.com/ocaml/merlin). Default: true"},"use-stdlib":{"type":"boolean","description":"(Experimental) whether to use the OCaml standard library. Default: true"},"external-stdlib":{"type":"string","description":"Use the external stdlib library instead of the one shipped with the compiler package"},"bs-external-includes":{"type":"array","items":{"type":"string"},"description":"(Not needed usually) external include directories, which will be applied `-I` to all compilation units"},"suffix":{"$ref":"#/definitions/suffix-spec"}},"additionalProperties":false,"required":["name","sources"]}');var o=function(e){var t=r.useRef(null);return r.useEffect((function(){null!=t.current&&(s.Z.templateBaseUrl="/static/docson",s.Z.doc("docson-root",n,void 0,"https://raw.githubusercontent.com/rescript-lang/rescript-compiler/master/docs/docson/build-schema.json"))}),[]),r.createElement("div",{ref:t,id:"docson-root"})}}}]);