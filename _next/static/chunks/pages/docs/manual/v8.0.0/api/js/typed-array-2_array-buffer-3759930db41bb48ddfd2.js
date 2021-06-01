(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42971],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},17375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(u,".").concat(y)]||f[y]||p[y]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"===typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},13753:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n,a=r(22122),o=r(17375),i=r(67294),c=r(3905),u=(i.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),l={};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"typedarray2arraybuffer"},"TypedArray2.ArrayBuffer"),(0,c.kt)(u,{mdxType:"Intro"},(0,c.kt)("p",null,"Provide bindings to JS typed array ArrayBuffer.")),(0,c.kt)("h2",{id:"t"},"t"),(0,c.kt)("pre",null,(0,c.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type t = Js_typed_array2.array_buffer;\n")),(0,c.kt)("h2",{id:"make"},"make"),(0,c.kt)("pre",null,(0,c.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let make: int => t;\n")),(0,c.kt)("p",null,"Takes length. initializes elements to 0."),(0,c.kt)("h2",{id:"bytelength"},"byteLength"),(0,c.kt)("pre",null,(0,c.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let byteLength: t => int;\n")),(0,c.kt)("h2",{id:"slice"},"slice"),(0,c.kt)("pre",null,(0,c.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let slice: (t, ~start: int, ~end_: int) => Js_typed_array2.array_buffer;\n")),(0,c.kt)("h2",{id:"slicefrom"},"sliceFrom"),(0,c.kt)("pre",null,(0,c.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let sliceFrom: (t, int) => Js_typed_array2.array_buffer;\n")))}s.isMDXComponent=!0,s.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/js/typed-array-2_array-buffer.mdx"}},57804:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/js/typed-array-2_array-buffer",function(){return r(13753)}])}},function(e){e.O(0,[49774],(function(){return t=57804,e(e.s=t);var t}));var t=e.O();_N_E=t}]);