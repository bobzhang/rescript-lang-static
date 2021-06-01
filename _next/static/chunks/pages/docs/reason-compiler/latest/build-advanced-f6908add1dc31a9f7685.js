(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54438],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},59427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(22122),a=n(17375),o=n(67294),i=n(3905),l=(o.createElement,{});function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-system-advanced"},"Build System: Advanced"),(0,i.kt)("h2",{id:"customize-rules-generators-support"},"Customize Rules (Generators Support)"),(0,i.kt)("p",null,"You might use some pre-processor to generate boilerplate code during development."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": pre-processors can be classified as two categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"System-dependent, which should be delayed until running on user machines."),(0,i.kt)("li",{parentName:"ul"},"System-independent: lex, yacc, m4, re2c, etc, which can be executed any time.")),(0,i.kt)("p",null,"BS has built in support for ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"conditional-compilation.md"}),"conditional compilation"),", which satisfies the first point. This section is about the second point."),(0,i.kt)("p",null,"An example, where bsb uses ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"http://caml.inria.fr/pub/docs/manual-ocaml-4.00/manual026.html"}),"ocamlyacc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-json"}),'{\n  "generators" : [\n    {\n      "name" : "ocamlyacc",\n      "command": "ocamlyacc $in"\n    }\n  ],\n  "sources" : {\n    "dir" : "src",\n    "generators" : [\n      {\n        "name" : "ocamlyacc",\n        "edge" : ["test.ml", "test.mli", ":", "test.mly"]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ocamlyacc")," will generate the artifacts ",(0,i.kt)("inlineCode",{parentName:"p"},"test.ml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.mli")," in the same directory than ",(0,i.kt)("inlineCode",{parentName:"p"},"test.mly"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": we highly recommend you to check in the generated files, since this cuts out dependencies like ",(0,i.kt)("inlineCode",{parentName:"p"},"ocamlyacc")," for the end-users."),(0,i.kt)("p",null,"When developing a project, ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," will track the dependencies between ",(0,i.kt)("inlineCode",{parentName:"p"},"test.ml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.mly")," properly. When released as a package, ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," will cut such dependency, so that users will only need the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"test.ml"),". To help test such behavior in development mode, users could set it manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-json"}),'{\n  "cut-generators" : true\n}\n')),(0,i.kt)("p",null,"This ",(0,i.kt)("em",{parentName:"p"},"prevents")," ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," from regenerating ",(0,i.kt)("inlineCode",{parentName:"p"},"test.ml")," whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"test.mly")," changes."))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/reason-compiler/latest/build-advanced.mdx"}},71389:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/reason-compiler/latest/build-advanced",function(){return n(59427)}])}},function(e){e.O(0,[49774],(function(){return t=71389,e(e.s=t);var t}));var t=e.O();_N_E=t}]);