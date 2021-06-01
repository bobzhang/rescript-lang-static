(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78810],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},31460:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r,a=n(22122),o=n(17375),i=n(67294),l=n(3905),p=(i.createElement,r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),s={};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"external-stdlib"},"External Stdlib"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since 9.0")),(0,l.kt)("p",null,"Your ReScript project depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"bs-platform")," (soon ",(0,l.kt)("inlineCode",{parentName:"p"},"rescript"),") package as a ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file"}),(0,l.kt)("inlineCode",{parentName:"a"},"devDependency")),", which includes our compiler, build system and runtime like ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt"),". However, you had to move it to ",(0,l.kt)("inlineCode",{parentName:"p"},"dependency")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," if you publish your code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To Docker or other low-storage deployment devices."),(0,l.kt)("li",{parentName:"ul"},"For pure JS/TS consumers who probably won't install ",(0,l.kt)("inlineCode",{parentName:"li"},"bs-platform")," in their own project.")),(0,l.kt)("p",null,"In these cases, the size or mere presence of ",(0,l.kt)("inlineCode",{parentName:"p"},"bs-platform")," can be troublesome, since it includes not just our necessary runtime like ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt"),", but also our compiler and build system."),(0,l.kt)("p",null,"To solve that, we now publish our runtime as a standalone package at ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://www.npmjs.com/package/@rescript/std"}),(0,l.kt)("inlineCode",{parentName:"a"},"@rescript/std")),", whose versions mirror ",(0,l.kt)("inlineCode",{parentName:"p"},"bs-platform"),"'s. Now you can keep ",(0,l.kt)("inlineCode",{parentName:"p"},"bs-platform")," as a ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependency")," and have only ",(0,l.kt)("inlineCode",{parentName:"p"},"@rescript/std")," as your runtime ",(0,l.kt)("inlineCode",{parentName:"p"},"dependency"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This is an advanced feature"),". Please only use it in the aforementioned scenarios. If you already use a JS bundler with dead code elimination, you might not need this feature."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Say you want to publish a JS-only ReScript 9.0 library. Install the packages like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-sh"}),"npm install bs-platform@9.0.0 --save-dev\nnpm install @rescript/std@9.0.0 --save\n")),(0,l.kt)("p",null,"Then add this to ",(0,l.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "external-stdlib" : "@rescript/std"\n}\n')),(0,l.kt)("p",null,"Now the compiled JS code will import using the path defined by ",(0,l.kt)("inlineCode",{parentName:"p"},"external-stdlib"),". Check the JS output tab:"),(0,l.kt)(p,{labels:["ReScript","JS output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"Belt.Array.forEach([1, 2, 3], num => Js.log(num))\n")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'// Note the require path starting with "@rescript/std".\nvar Belt_Array = require("@rescript/std/lib/js/belt_Array.js");\n\nBelt_Array.forEach([1, 2, 3], function (num) {\n  console.log(num);\n});\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Make sure the version number of ",(0,l.kt)("inlineCode",{parentName:"strong"},"bs-platform")," and ",(0,l.kt)("inlineCode",{parentName:"strong"},"@rescript/std")," match in your ",(0,l.kt)("inlineCode",{parentName:"strong"},"package.json"))," to avoid running into runtime issues due to mismatching stdlib assumptions."))}c.isMDXComponent=!0,c.frontmatter={title:"External Stdlib",metaTitle:"External Stdlib",description:"Configuring an external ReScript stdlib package",canonical:"/docs/manual/latest/build-external-stdlib",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/build-external-stdlib.mdx"}},88225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/build-external-stdlib",function(){return n(31460)}])}},function(e){e.O(0,[49774],(function(){return t=88225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);