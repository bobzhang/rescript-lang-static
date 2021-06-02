(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18561],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},37935:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(22122),a=n(17375),o=n(67294),i=n(3905),s=(o.createElement,{});function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interop-miscellaneous"},"Interop Miscellaneous"),(0,i.kt)("h2",{id:"composing-bs-attributes"},"Composing ",(0,i.kt)("inlineCode",{parentName:"h2"},"bs")," Attributes"),(0,i.kt)("p",null,"As you might have guessed, most ",(0,i.kt)("inlineCode",{parentName:"p"},"bs.*")," attributes can be used together. Here's an extreme example:"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"bs.splice")," was renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"bs.variadic")," after version 4.08"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-reason"}),'[@bs.val] [@bs.scope "global"] [@bs.variadic]\nexternal draw : ([@bs.as "dog"] _, array(int)) => unit = "draw";\n\ndraw([|1, 2|]);\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'global.draw("dog", 1, 2);\n')),(0,i.kt)("h2",{id:"safe-external-data-handling"},"Safe External Data Handling"),(0,i.kt)("p",null,"In some cases, the data could either come from JS or BS; it's very hard to give precise type information because of this. For example, for an external promise whose creation could come from the JS API, its failed value caused by ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.reject")," could be of any shape."),(0,i.kt)("p",null,"BuckleScript provides a solution, ",(0,i.kt)("inlineCode",{parentName:"p"},"bs.open"),", to filter out OCaml structured exception data from the mixed data source. It preserves type safety while allowing you to deal with mixed source. It makes use of OCaml\u2019s extensible variant, so that users can mix values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"exn")," with JS data."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-reason"}),"let handleData = [@bs.open] (\n  fun\n  | Invalid_argument(_) => 0\n  | Not_found => 1\n  | Sys_error(_) => 2\n);\n\n/* handleData is 'a => option(int) */\n")),(0,i.kt)("p",null,"For any input source, as long as it matches the exception pattern (nested pattern match supported), the matched value is returned, otherwise return ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."))}l.isMDXComponent=!0,l.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/reason-compiler/latest/interop-misc.mdx"}},76307:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/reason-compiler/latest/interop-misc",function(){return n(37935)}])}},function(e){e.O(0,[49774],(function(){return t=76307,e(e.s=t);var t}));var t=e.O();_N_E=t}]);