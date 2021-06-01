(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9326],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},17375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),o=function(e){var t=n.useContext(g),r=t;return e&&(r="function"===typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(r),u=a,d=m["".concat(g,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"===typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},50667:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n,a=r(22122),i=r(17375),s=r(67294),l=r(3905),g=(s.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),o={};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typedarrayuint16array"},"TypedArray.Uint16Array"),(0,l.kt)(g,{mdxType:"Intro"},(0,l.kt)("p",null,"Provide bindings to JS typed array Uint16Array.")),(0,l.kt)("h2",{id:"t"},"t"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type elt = int\ntype typed_array<'a> = Js_typed_array2.Uint16Array.typed_array<'a>\ntype t = typed_array<elt>\n")),(0,l.kt)("h2",{id:"unsafe_get"},"unsafe_get"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_get: (t, int) => elt\n")),(0,l.kt)("h2",{id:"unsafe_set"},"unsafe_set"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_set: (t, int, elt) => unit\n")),(0,l.kt)("h2",{id:"buffer"},"buffer"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let buffer: t => Js_typed_array.array_buffer\n")),(0,l.kt)("h2",{id:"bytelength"},"byteLength"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteLength: t => int\n")),(0,l.kt)("h2",{id:"byteoffset"},"byteOffset"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteOffset: t => int\n")),(0,l.kt)("h2",{id:"setarray"},"setArray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArray: (array<elt>, t) => unit\n")),(0,l.kt)("h2",{id:"setarrayoffset"},"setArrayOffset"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArrayOffset: (array<elt>, int, t) => unit\n")),(0,l.kt)("h2",{id:"length"},"length"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let length: t => int\n")),(0,l.kt)("h2",{id:"copywithin"},"copyWithin"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithin: (~to_: int, t) => t\n")),(0,l.kt)("h2",{id:"copywithinfrom"},"copyWithinFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFrom: (~to_: int, ~from: int, t) => t\n")),(0,l.kt)("h2",{id:"copywithinfromrange"},"copyWithinFromRange"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFromRange: (~to_: int, ~start: int, ~end_: int, t) => t\n")),(0,l.kt)("h2",{id:"fillinplace"},"fillInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillInPlace: (elt, t) => t\n")),(0,l.kt)("h2",{id:"fillfrominplace"},"fillFromInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillFromInPlace: (elt, ~from: int, t) => t\n")),(0,l.kt)("h2",{id:"fillrangeinplace"},"fillRangeInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillRangeInPlace: (elt, ~start: int, ~end_: int, t) => t\n")),(0,l.kt)("h2",{id:"reverseinplace"},"reverseInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reverseInPlace: t => t\n")),(0,l.kt)("h2",{id:"sortinplace"},"sortInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlace: t => t\n")),(0,l.kt)("h2",{id:"sortinplacewith"},"sortInPlaceWith"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlaceWith: ((. elt, elt) => int, t) => t\n")),(0,l.kt)("h2",{id:"includes"},"includes"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let includes: (elt, t) => bool\n")),(0,l.kt)("p",null,"ES2016"),(0,l.kt)("h2",{id:"indexof"},"indexOf"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOf: (elt, t) => int\n")),(0,l.kt)("h2",{id:"indexoffrom"},"indexOfFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOfFrom: (elt, ~from: int, t) => int\n")),(0,l.kt)("h2",{id:"join"},"join"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let join: t => string\n")),(0,l.kt)("h2",{id:"joinwith"},"joinWith"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let joinWith: (string, t) => string\n")),(0,l.kt)("h2",{id:"lastindexof"},"lastIndexOf"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOf: (elt, t) => int\n")),(0,l.kt)("h2",{id:"lastindexoffrom"},"lastIndexOfFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOfFrom: (elt, ~from: int, t) => int\n")),(0,l.kt)("h2",{id:"slice"},"slice"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let slice: (~start: int, ~end_: int, t) => t\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"start")," is inclusive, ",(0,l.kt)("inlineCode",{parentName:"p"},"end_")," exclusive."),(0,l.kt)("h2",{id:"copy"},"copy"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t => t\n")),(0,l.kt)("h2",{id:"slicefrom"},"sliceFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sliceFrom: (int, t) => t\n")),(0,l.kt)("h2",{id:"subarray"},"subarray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarray: (~start: int, ~end_: int, t) => t\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"start")," is inclusive, ",(0,l.kt)("inlineCode",{parentName:"p"},"end_")," exclusive."),(0,l.kt)("h2",{id:"subarrayfrom"},"subarrayFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarrayFrom: (int, t) => t\n")),(0,l.kt)("h2",{id:"tostring"},"toString"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toString: t => string\n")),(0,l.kt)("h2",{id:"tolocalestring"},"toLocaleString"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toLocaleString: t => string\n")),(0,l.kt)("h2",{id:"every"},"every"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: ((. elt) => bool, t) => bool\n")),(0,l.kt)("h2",{id:"everyi"},"everyi"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyi: ((. elt, int) => bool, t) => bool\n")),(0,l.kt)("h2",{id:"filter"},"filter"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filter: ((. elt) => bool, t) => t\n")),(0,l.kt)("h2",{id:"filteri"},"filteri"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filteri: ((. elt, int) => bool, t) => t\n")),(0,l.kt)("h2",{id:"find"},"find"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let find: ((. elt) => bool, t) => Js.undefined<elt>\n")),(0,l.kt)("h2",{id:"findi"},"findi"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findi: ((. elt, int) => bool, t) => Js.undefined<elt>\n")),(0,l.kt)("h2",{id:"findindex"},"findIndex"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndex: ((. elt) => bool, t) => int\n")),(0,l.kt)("h2",{id:"findindexi"},"findIndexi"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndexi: ((. elt, int) => bool, t) => int\n")),(0,l.kt)("h2",{id:"foreach"},"forEach"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: ((. elt) => unit, t) => unit\n")),(0,l.kt)("h2",{id:"foreachi"},"forEachi"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachi: ((. elt, int) => unit, t) => unit\n")),(0,l.kt)("h2",{id:"map"},"map"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: ((. elt) => 'b, t) => typed_array<'b>\n")),(0,l.kt)("h2",{id:"mapi"},"mapi"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapi: ((. elt, int) => 'b, t) => typed_array<'b>\n")),(0,l.kt)("h2",{id:"reduce"},"reduce"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,l.kt)("h2",{id:"reducei"},"reducei"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reducei: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,l.kt)("h2",{id:"reduceright"},"reduceRight"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRight: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,l.kt)("h2",{id:"reducerighti"},"reduceRighti"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRighti: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,l.kt)("h2",{id:"some"},"some"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: ((. elt) => bool, t) => bool\n")),(0,l.kt)("h2",{id:"somei"},"somei"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let somei: ((. elt, int) => bool, t) => bool\n")),(0,l.kt)("h2",{id:"_bytes_per_element"},"_BYTES_PER_ELEMENT"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let _BYTES_PER_ELEMENT: int\n")),(0,l.kt)("h2",{id:"make"},"make"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: array<elt> => t\n")),(0,l.kt)("h2",{id:"frombuffer"},"fromBuffer"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBuffer: Js_typed_array.array_buffer => t\n")),(0,l.kt)("h2",{id:"frombufferoffset"},"fromBufferOffset"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBufferOffset: (Js_typed_array.array_buffer, int) => t\n")),(0,l.kt)("p",null,"Can throw an exception."),(0,l.kt)("h2",{id:"frombufferrange"},"fromBufferRange"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBufferRange: (Js_typed_array.array_buffer, ~offset: int, ~length: int) => t\n")),(0,l.kt)("p",null,"Raises ",(0,l.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error")," raise Js exception."),(0,l.kt)("h2",{id:"fromlength"},"fromLength"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromLength: int => t\n")),(0,l.kt)("p",null,"Raises ",(0,l.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error")," raise Js exception."),(0,l.kt)("h2",{id:"from"},"from"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let from: Js_typed_array.array_like<elt> => t\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/js/typed-array_uint-16-array.mdx"}},97304:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/js/typed-array_uint-16-array",function(){return r(50667)}])}},function(e){e.O(0,[49774],(function(){return t=97304,e(e.s=t);var t}));var t=e.O();_N_E=t}]);