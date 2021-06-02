(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95016],{22122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"===typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},20749:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r,o=t(22122),i=t(17375),a=t(67294),l=t(3905),s=(a.createElement,r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),c={};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"inlining-constants"},"Inlining Constants"),(0,l.kt)("p",null,"Sometime, in the JavaScript output, you might want a certain value to be forcefully inlined. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),"if (process.env.mode === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,l.kt)("p",null,"The reason is that your JavaScript bundler (e.g. Webpack) might turn that into:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),"if ('production' === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,l.kt)("p",null,"Then your subsequent Uglifyjs optimization would remove that entire ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," block. This is how projects like ReactJS provide a development mode code with plenty of dev warnings, while ensuring that the uglified (minified) production code is free of those expensive blocks."),(0,l.kt)("p",null,"So, in ReScript, producing that example ",(0,l.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === 'development')")," output is important. This first try doesn't work:"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),'var mode = "development";\n\nif (process.env.mode === mode) {\n  console.log("Dev-only code here!");\n}\n'))),(0,l.kt)("p",null,"The JS output shows ",(0,l.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === mode)"),", which isn't what we wanted. To inline ",(0,l.kt)("inlineCode",{parentName:"p"},"mode"),"'s value, use ",(0,l.kt)("inlineCode",{parentName:"p"},"@inline"),":"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\n@inline\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),'if (process.env.mode === "development") {\n  console.log("Dev-only code here!");\n}\n'))),(0,l.kt)("p",null,"Now your resulting JS code can pass through Webpack and Uglifyjs like the rest of your JavaScript code, and that whole ",(0,l.kt)("inlineCode",{parentName:"p"},"console.log")," can be removed."),(0,l.kt)("p",null,"The inlining currently only works for ",(0,l.kt)("strong",{parentName:"p"},"string, float and boolean"),"."),(0,l.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,l.kt)("p",null,"This is ",(0,l.kt)("strong",{parentName:"p"},"not")," an optimization. This is an edge-case feature for folks who absolutely need particular values inlined for a JavaScript post-processing step, like conditional compilation. Beside the difference in code that the conditional compilation might end up outputting, there's no performance difference between inlining and not inlining simple values in the eyes of a JavaScript engine."))}p.isMDXComponent=!0,p.frontmatter={title:"Inlining Constants",description:"Inlining constants",canonical:"/docs/manual/latest/inlining-constants",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/inlining-constants.mdx"}},11821:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/inlining-constants",function(){return t(20749)}])}},function(e){e.O(0,[49774],(function(){return n=11821,e(e.s=n);var n}));var n=e.O();_N_E=n}]);