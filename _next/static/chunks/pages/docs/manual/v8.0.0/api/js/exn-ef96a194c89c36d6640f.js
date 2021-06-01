(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40899],{22122:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},17375:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,{Z:function(){return n}})},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"===typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(t),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"===typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"===typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96086:function(e){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},50471:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n,a=t(22122),i=t(17375),s=t(67294),o=t(3905),l=(s.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),c={};function p(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exn"},"Exn"),(0,o.kt)(l,{mdxType:"Intro"},(0,o.kt)("p",null,"Provide utilities for dealing with JS exceptions.")),(0,o.kt)("h2",{id:"t"},"t"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"  type t;\n")),(0,o.kt)("h2",{id:"exn-1"},"exn"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"  type exn +=\n    pri\n    | Error(t);\n")),(0,o.kt)("h2",{id:"asjsexn"},"asJsExn"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let asJsExn: exn => option(t);\n")),(0,o.kt)("h2",{id:"stack"},"stack"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let stack: t => option(string);\n")),(0,o.kt)("h2",{id:"message"},"message"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let message: t => option(string);\n")),(0,o.kt)("h2",{id:"name"},"name"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let name: t => option(string);\n")),(0,o.kt)("h2",{id:"filename"},"fileName"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fileName: t => option(string);\n")),(0,o.kt)("h2",{id:"iscamlexceptionoropenvariant"},"isCamlExceptionOrOpenVariant"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let isCamlExceptionOrOpenVariant: 'a => bool;\n")),(0,o.kt)("p",null,"Internal use only."),(0,o.kt)("h2",{id:"raiseerror"},"raiseError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseError: string => 'a;\n")),(0,o.kt)("p",null,"Raise Js exception Error object with stacktrace."),(0,o.kt)("h2",{id:"raiseevalerror"},"raiseEvalError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseEvalError: string => 'a;\n")),(0,o.kt)("h2",{id:"raiserangeerror"},"raiseRangeError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseRangeError: string => 'a;\n")),(0,o.kt)("h2",{id:"raisereferenceerror"},"raiseReferenceError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseReferenceError: string => 'a;\n")),(0,o.kt)("h2",{id:"raisesyntaxerror"},"raiseSyntaxError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseSyntaxError: string => 'a;\n")),(0,o.kt)("h2",{id:"raisetypeerror"},"raiseTypeError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseTypeError: string => 'a;\n")),(0,o.kt)("h2",{id:"raiseurierror"},"raiseUriError"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let raiseUriError: string => 'a;\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/js/exn.mdx"}},84386:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/js/exn",function(){return t(50471)}])}},function(e){e.O(0,[49774],(function(){return r=84386,e(e.s=r);var r}));var r=e.O();_N_E=r}]);