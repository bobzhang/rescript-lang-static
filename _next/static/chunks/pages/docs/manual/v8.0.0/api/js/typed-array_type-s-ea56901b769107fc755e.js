(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38409],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),o=function(e){var t=r.useContext(g),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(g.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,d=u["".concat(g,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s.mdxType="string"===typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},24070:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r,a=n(22122),i=n(17375),l=n(67294),s=n(3905),g=(l.createElement,r="Intro",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),o={};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"typedarray-type-s"},"TypedArray type S"),(0,s.kt)(g,{mdxType:"Intro"},(0,s.kt)("p",null,"TODO")),(0,s.kt)("h2",{id:"t"},"t"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type elt;\ntype typed_array('a);\ntype t = typed_array(elt);\n")),(0,s.kt)("h2",{id:"unsafe_get"},"unsafe_get"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let unsafe_get: (t, int) => elt;\n")),(0,s.kt)("h2",{id:"unsafe_set"},"unsafe_set"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let unsafe_set: (t, int, elt) => unit;\n")),(0,s.kt)("h2",{id:"buffer"},"buffer"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let buffer: t => Js_typed_array.array_buffer;\n")),(0,s.kt)("h2",{id:"bytelength"},"byteLength"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let byteLength: t => int;\n")),(0,s.kt)("h2",{id:"byteoffset"},"byteOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let byteOffset: t => int;\n")),(0,s.kt)("h2",{id:"setarray"},"setArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setArray: (array(elt), t) => unit;\n")),(0,s.kt)("h2",{id:"setarrayoffset"},"setArrayOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setArrayOffset: (array(elt), int, t) => unit;\n")),(0,s.kt)("h2",{id:"length"},"length"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let length: t => int;\n")),(0,s.kt)("h2",{id:"copywithin"},"copyWithin"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let copyWithin: (~to_: int, t) => t;\n")),(0,s.kt)("h2",{id:"copywithinfrom"},"copyWithinFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let copyWithinFrom: (~to_: int, ~from: int, t) => t;\n")),(0,s.kt)("h2",{id:"copywithinfromrange"},"copyWithinFromRange"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let copyWithinFromRange: (~to_: int, ~start: int, ~end_: int, t) => t;\n")),(0,s.kt)("h2",{id:"fillinplace"},"fillInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fillInPlace: (elt, t) => t;\n")),(0,s.kt)("h2",{id:"fillfrominplace"},"fillFromInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fillFromInPlace: (elt, ~from: int, t) => t;\n")),(0,s.kt)("h2",{id:"fillrangeinplace"},"fillRangeInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fillRangeInPlace: (elt, ~start: int, ~end_: int, t) => t;\n")),(0,s.kt)("h2",{id:"reverseinplace"},"reverseInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reverseInPlace: t => t;\n")),(0,s.kt)("h2",{id:"sortinplace"},"sortInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let sortInPlace: t => t;\n")),(0,s.kt)("h2",{id:"sortinplacewith"},"sortInPlaceWith"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let sortInPlaceWith: ((. elt, elt) => int, t) => t;\n")),(0,s.kt)("h2",{id:"includes"},"includes"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let includes: (elt, t) => bool;\n")),(0,s.kt)("h2",{id:"indexof"},"indexOf"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let indexOf: (elt, t) => int;\n")),(0,s.kt)("h2",{id:"indexoffrom"},"indexOfFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let indexOfFrom: (elt, ~from: int, t) => int;\n")),(0,s.kt)("h2",{id:"join"},"join"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let join: t => string;\n")),(0,s.kt)("h2",{id:"joinwith"},"joinWith"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let joinWith: (string, t) => string;\n")),(0,s.kt)("h2",{id:"lastindexof"},"lastIndexOf"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let lastIndexOf: (elt, t) => int;\n")),(0,s.kt)("h2",{id:"lastindexoffrom"},"lastIndexOfFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let lastIndexOfFrom: (elt, ~from: int, t) => int;\n")),(0,s.kt)("h2",{id:"slice"},"slice"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let slice: (~start: int, ~end_: int, t) => t;\n")),(0,s.kt)("h2",{id:"copy"},"copy"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let copy: t => t;\n")),(0,s.kt)("h2",{id:"slicefrom"},"sliceFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let sliceFrom: (int, t) => t;\n")),(0,s.kt)("h2",{id:"subarray"},"subarray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let subarray: (~start: int, ~end_: int, t) => t;\n")),(0,s.kt)("h2",{id:"subarrayfrom"},"subarrayFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let subarrayFrom: (int, t) => t;\n")),(0,s.kt)("h2",{id:"tostring"},"toString"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let toString: t => string;\n")),(0,s.kt)("h2",{id:"tolocalestring"},"toLocaleString"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let toLocaleString: t => string;\n")),(0,s.kt)("h2",{id:"every"},"every"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let every: ((. elt) => bool, t) => bool;\n")),(0,s.kt)("h2",{id:"everyi"},"everyi"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let everyi: ((. elt, int) => bool, t) => bool;\n")),(0,s.kt)("h2",{id:"filter"},"filter"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let filter: ((. elt) => bool, t) => t;\n")),(0,s.kt)("h2",{id:"filteri"},"filteri"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let filteri: ((. elt, int) => bool, t) => t;\n")),(0,s.kt)("h2",{id:"find"},"find"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let find: ((. elt) => bool, t) => Js.undefined(elt);\n")),(0,s.kt)("h2",{id:"findi"},"findi"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let findi: ((. elt, int) => bool, t) => Js.undefined(elt);\n")),(0,s.kt)("h2",{id:"findindex"},"findIndex"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let findIndex: ((. elt) => bool, t) => int;\n")),(0,s.kt)("h2",{id:"findindexi"},"findIndexi"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let findIndexi: ((. elt, int) => bool, t) => int;\n")),(0,s.kt)("h2",{id:"foreach"},"forEach"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let forEach: ((. elt) => unit, t) => unit;\n")),(0,s.kt)("h2",{id:"foreachi"},"forEachi"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let forEachi: ((. elt, int) => unit, t) => unit;\n")),(0,s.kt)("h2",{id:"map"},"map"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let map: ((. elt) => 'b, t) => typed_array('b);\n")),(0,s.kt)("h2",{id:"mapi"},"mapi"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let mapi: ((. elt, int) => 'b, t) => typed_array('b);\n")),(0,s.kt)("h2",{id:"reduce"},"reduce"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reduce: ((. 'b, elt) => 'b, 'b, t) => 'b;\n")),(0,s.kt)("h2",{id:"reducei"},"reducei"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reducei: ((. 'b, elt, int) => 'b, 'b, t) => 'b;\n")),(0,s.kt)("h2",{id:"reduceright"},"reduceRight"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reduceRight: ((. 'b, elt) => 'b, 'b, t) => 'b;\n")),(0,s.kt)("h2",{id:"reducerighti"},"reduceRighti"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reduceRighti: ((. 'b, elt, int) => 'b, 'b, t) => 'b;\n")),(0,s.kt)("h2",{id:"some"},"some"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let some: ((. elt) => bool, t) => bool;\n")),(0,s.kt)("h2",{id:"somei"},"somei"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let somei: ((. elt, int) => bool, t) => bool;\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/js/typed-array_type-s.mdx"}},87734:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/js/typed-array_type-s",function(){return n(24070)}])}},function(e){e.O(0,[49774],(function(){return t=87734,e(e.s=t);var t}));var t=e.O();_N_E=t}]);