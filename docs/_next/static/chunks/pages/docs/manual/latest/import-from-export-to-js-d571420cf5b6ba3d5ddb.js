(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11181],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},87352:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(17375),r=a(96156),o=(a(67294),a(3905));function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,u=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),s={};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},s),a),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"import-fromexport-to-js"}),"Import from/Export to JS"),(0,o.kt)("p",null,"You've seen how ReScript's idiomatic ",(0,o.kt)("a",i({parentName:"p"},{href:"import-export.md"}),"Import & Export")," works. This section describes how we work with importing stuff from JavaScript and exporting stuff for JavaScript consumption."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": due to JS ecosystem's module compatibility issues, our advice of keeping your ReScript file's compiled JS output open in a tab applies here ",(0,o.kt)("strong",{parentName:"p"},"more than ever"),", as you don't want to subtly output the wrong JS module import/export code, on top of having to deal with Babel/Webpack/Jest/Node's CommonJS<->ES6 compatibility shims."),(0,o.kt)("p",null,"In short: ",(0,o.kt)("strong",{parentName:"p"},"make sure your bindings below output what you'd have manually written in JS"),"."),(0,o.kt)("h2",i({},{id:"output-format"}),"Output Format"),(0,o.kt)("p",null,"We support 2 JavaScript import/export formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CommonJS: ",(0,o.kt)("inlineCode",{parentName:"li"},"require('myFile')")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"module.export = ..."),"."),(0,o.kt)("li",{parentName:"ul"},"ES6 modules: ",(0,o.kt)("inlineCode",{parentName:"li"},"import * from 'MyReScriptFile'")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"export let ..."),".")),(0,o.kt)("p",null,"The format is ",(0,o.kt)("a",i({parentName:"p"},{href:"build-configuration.md#package-specs"}),"configurable in via ",(0,o.kt)("inlineCode",{parentName:"a"},"bsconfig.json")),"."),(0,o.kt)("h2",i({},{id:"import-from-javascript"}),"Import From JavaScript"),(0,o.kt)("h3",i({},{id:"import-a-javascript-modules-named-export"}),"Import a JavaScript Module's Named Export"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," ",(0,o.kt)("a",i({parentName:"p"},{href:"external.md"}),"external"),":"),(0,o.kt)(u,{labels:["ReScript","JS Output (CommonJS)","JS Output (ES6)"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// Import nodejs\' path.dirname\n@module("path") external dirname: string => string = "dirname"\nlet root = dirname("/User/github") // returns "User"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar root = Path.dirname("/User/github");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'import * as Path from "path";\nvar root = Path.dirname("/User/github");\n'))),(0,o.kt)("p",null,"Here's what the ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," does:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'@module("path")'),": pass the name of the JS module; in this case, ",(0,o.kt)("inlineCode",{parentName:"li"},'"path"'),". The string can be anything: ",(0,o.kt)("inlineCode",{parentName:"li"},'"./src/myJsFile"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},'"@myNpmNamespace/myLib"'),", etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"external"),": the general keyword for declaring a value that exists on the JS side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),": the binding name you'll use on the ReScript side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string => string"),": the type signature of ",(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),". Mandatory for ",(0,o.kt)("inlineCode",{parentName:"li"},"external"),"s."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'= "dirname"'),": the name of the variable inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," JS module. There's repetition in writing the first and second ",(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),", because sometime the binding name you want to use on the ReScript side is different than the variable name the JS module exported.")),(0,o.kt)("h3",i({},{id:"import-a-javascript-module-as-a-single-value"}),"Import a JavaScript Module As a Single Value"),(0,o.kt)("p",null,"By omitting the string argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),", you bind to the whole JS module:"),(0,o.kt)(u,{labels:["ReScript","JS Output (CommonJS)","JS Output (ES6)"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module external leftPad: string => int => string = "./leftPad"\nlet paddedResult = leftPad("hi", 5)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var LeftPad = require("./leftPad");\nvar paddedResult = LeftPad("hi", 5);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'import * as LeftPad from "./leftPad";\nvar paddedResult = LeftPad("hi", 5);\n'))),(0,o.kt)("p",null,"Depending on whether you're compiling ReScript to CommonJS or ES6 module, ",(0,o.kt)("strong",{parentName:"p"},"this feature will generate subtly different code"),". Please check both output tabs to see the difference. The ES6 output here would be wrong!"),(0,o.kt)("h3",i({},{id:"import-an-es6-default-export"}),"Import an ES6 Default Export"),(0,o.kt)("p",null,"Use the value ",(0,o.kt)("inlineCode",{parentName:"p"},'"default"')," on the right hand side:"),(0,o.kt)(u,{labels:["ReScript","JS Output (ES6)"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("./student") external studentName: string = "default"\nJs.log(studentName)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'import Student from "./student";\nvar studentName = Student;\n'))),(0,o.kt)("h2",i({},{id:"export-to-javascript"}),"Export To JavaScript"),(0,o.kt)("h3",i({},{id:"export-a-named-value"}),"Export a Named Value"),(0,o.kt)("p",null,"As mentioned in ReScript's idiomatic ",(0,o.kt)("a",i({parentName:"p"},{href:"import-export.md"}),"Import & Export"),", every let binding and module is exported by default to other ReScript modules (unless you use a ",(0,o.kt)("inlineCode",{parentName:"p"},".resi")," ",(0,o.kt)("a",i({parentName:"p"},{href:"module#signatures"}),"interface file"),"). If you open up the compiled JS file, you'll see that these values can also directly be used by a ",(0,o.kt)("em",{parentName:"p"},"JavaScript")," file too."),(0,o.kt)("h3",i({},{id:"export-an-es6-default-value"}),"Export an ES6 Default Value"),(0,o.kt)("p",null,"If your JS project uses ES6 modules, you're likely exporting & importing some default values:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'// student.js\nexport default name = "Al";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// teacher.js\nimport studentName from 'student.js';\n")),(0,o.kt)("p",null,"A JavaScript default export is really just syntax sugar for a named export implicitly called ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," (now you know!). So to export a default value from ReScript, you can just do:"),(0,o.kt)(u,{labels:["ReScript","JS Output (CommonJS)","JS Output (ES6)"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// ReScriptStudent.res\nlet default = "Bob"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var $$default = "Bob";\n\nexports.$$default = $$default;\nexports.default = $$default;\n// informal transpiler-compatible marker of a default export compiled from ES6\nexports.__esModule = true;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var $$default = "Bob";\n\nexport {\n  $$default,\n  $$default as default,\n}\n'))),(0,o.kt)("p",null,"You can then import this default export as usual on the JS side:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// teacher2.js\nimport studentName from 'ReScriptStudent.js';\n")),(0,o.kt)("p",null,"If your JavaScript's ES6 default import is transpiled by Babel/Webpack/Jest into CommonJS ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"s, we've taken care of that too! See the CommonJS output tab for ",(0,o.kt)("inlineCode",{parentName:"p"},"__esModule"),"."))}m.isMDXComponent=!0,m.frontmatter={title:"Import from / Export to JS",description:"Importing / exporting JS module content in ReScript",canonical:"/docs/manual/latest/import-from-export-to-js",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/import-from-export-to-js.mdx"}},75465:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/import-from-export-to-js",function(){return a(87352)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=75465,e(e.s=t);var t}));var t=e.O();_N_E=t}]);