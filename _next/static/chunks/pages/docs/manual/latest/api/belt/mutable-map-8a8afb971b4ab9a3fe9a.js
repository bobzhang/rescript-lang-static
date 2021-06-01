(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5065],{22122:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=o(a),g=r,u=k["".concat(p,".").concat(g)]||k[g]||d[g]||i;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=a.length,s=new Array(i);s[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},90913:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n,r=a(22122),i=a(17375),s=a(67294),l=a(3905),p=(s.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),o={};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mutablemap"},"MutableMap"),(0,l.kt)(p,{mdxType:"Intro"},(0,l.kt)("p",null,"A mutable sorted map module which allows customize compare behavior.")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Map"),", but mutable."),(0,l.kt)("h2",{id:"t"},"t"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'k, 'v, 'id>\n")),(0,l.kt)("h2",{id:"id"},"id"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type id<'key, 'id> = Belt_Id.comparable<'key, 'id>\n")),(0,l.kt)("h2",{id:"make"},"make"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~id: id<'k, 'id>) => t<'k, 'a, 'id>\n")),(0,l.kt)("h2",{id:"clear"},"clear"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'a, 'b, 'c> => unit\n")),(0,l.kt)("h2",{id:"isempty"},"isEmpty"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a, 'b, 'c> => bool\n")),(0,l.kt)("h2",{id:"has"},"has"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'k, 'a, 'b>, 'k) => bool\n")),(0,l.kt)("h2",{id:"cmpu"},"cmpU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, (. 'a, 'a) => int) => int\n")),(0,l.kt)("h2",{id:"cmp"},"cmp"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ('a, 'a) => int) => int\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cmp(m1, m2, cmp)")," First compare by size, if size is the same, compare by key, value pair."),(0,l.kt)("h2",{id:"equ"},"eqU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, (. 'a, 'a) => bool) => bool\n")),(0,l.kt)("h2",{id:"eq"},"eq"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ('a, 'a) => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, eqf)")," tests whether the maps ",(0,l.kt)("inlineCode",{parentName:"p"},"m1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"m2")," are equal, that is, contain equal keys and associate them with equal data. ",(0,l.kt)("inlineCode",{parentName:"p"},"eqf")," is the equality predicate used to compare the data associated with the keys."),(0,l.kt)("h2",{id:"foreachu"},"forEachU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'k, 'a, 'id>, (. 'k, 'a) => unit) => unit\n")),(0,l.kt)("h2",{id:"foreach"},"forEach"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'k, 'a, 'id>, ('k, 'a) => unit) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies f to all bindings in map ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," receives the ",(0,l.kt)("inlineCode",{parentName:"p"},"'k")," as first argument, and the associated value as second argument. The bindings are passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,l.kt)("h2",{id:"reduceu"},"reduceU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'k, 'a, 'id>, 'b, (. 'b, 'k, 'a) => 'b) => 'b\n")),(0,l.kt)("h2",{id:"reduce"},"reduce"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'k, 'a, 'id>, 'b, ('b, 'k, 'a) => 'b) => 'b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f), computes"),"(f(kN, dN) ... (f(k1, d1, a))...)",(0,l.kt)("inlineCode",{parentName:"p"},", where"),"k1 ... kN",(0,l.kt)("inlineCode",{parentName:"p"},"are the keys of all bindings in"),"m",(0,l.kt)("inlineCode",{parentName:"p"},"(in increasing order), and"),"d1 ... dN` are the associated data."),(0,l.kt)("h2",{id:"everyu"},"everyU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,l.kt)("h2",{id:"every"},"every"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,l.kt)("h2",{id:"someu"},"someU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,l.kt)("h2",{id:"some"},"some"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,l.kt)("h2",{id:"size"},"size"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'k, 'a, 'id> => int\n")),(0,l.kt)("h2",{id:"tolist"},"toList"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'k, 'a, 'id> => list<('k, 'a)>\n")),(0,l.kt)("p",null,"In increasing order."),(0,l.kt)("h2",{id:"toarray"},"toArray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'k, 'a, 'id> => array<('k, 'a)>\n")),(0,l.kt)("h2",{id:"fromarray"},"fromArray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: (array<('k, 'a)>, ~id: id<'k, 'id>) => t<'k, 'a, 'id>\n")),(0,l.kt)("h2",{id:"keystoarray"},"keysToArray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'k, 'a, 'b> => array<'k>\n")),(0,l.kt)("h2",{id:"valuestoarray"},"valuesToArray"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'b, 'a, 'c> => array<'a>\n")),(0,l.kt)("h2",{id:"minkey"},"minKey"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'k, 'a, 'b> => option<'k>\n")),(0,l.kt)("h2",{id:"minkeyundefined"},"minKeyUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,l.kt)("h2",{id:"maxkey"},"maxKey"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'k, 'a, 'b> => option<'k>\n")),(0,l.kt)("h2",{id:"maxkeyundefined"},"maxKeyUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,l.kt)("h2",{id:"minimum"},"minimum"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,l.kt)("h2",{id:"minundefined"},"minUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,l.kt)("h2",{id:"maximum"},"maximum"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,l.kt)("h2",{id:"maxundefined"},"maxUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,l.kt)("h2",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'k, 'a, 'id>, 'k) => option<'a>\n")),(0,l.kt)("h2",{id:"getundefined"},"getUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'k, 'a, 'id>, 'k) => Js.undefined<'a>\n")),(0,l.kt)("h2",{id:"getwithdefault"},"getWithDefault"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'k, 'a, 'id>, 'k, 'a) => 'a\n")),(0,l.kt)("h2",{id:"getexn"},"getExn"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'k, 'a, 'id>, 'k) => 'a\n")),(0,l.kt)("h2",{id:"checkinvariantinternal"},"checkInvariantInternal"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a, 'b, 'c> => unit\n")),(0,l.kt)("p",null,"Raise when invariant is not held."),(0,l.kt)("h2",{id:"remove"},"remove"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'k, 'a, 'id>, 'k) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," do the in-place modification."),(0,l.kt)("h2",{id:"removemany"},"removeMany"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'k, 'a, 'id>, array<'k>) => unit\n")),(0,l.kt)("h2",{id:"set"},"set"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'k, 'a, 'id>, 'k, 'a) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," do the in-place modification"),(0,l.kt)("h2",{id:"updateu"},"updateU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'k, 'a, 'id>, 'k, (. option<'a>) => option<'a>) => unit\n")),(0,l.kt)("h2",{id:"update"},"update"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'k, 'a, 'id>, 'k, option<'a> => option<'a>) => unit\n")),(0,l.kt)("h2",{id:"mergemany"},"mergeMany"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'k, 'a, 'id>, array<('k, 'a)>) => unit\n")),(0,l.kt)("h2",{id:"mapu"},"mapU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'k, 'a, 'id>, (. 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,l.kt)("h2",{id:"map"},"map"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'k, 'a, 'id>, 'a => 'b) => t<'k, 'b, 'id>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value a of all bindings of ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,l.kt)("h2",{id:"mapwithkeyu"},"mapWithKeyU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'k, 'a, 'id>, (. 'k, 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,l.kt)("h2",{id:"mapwithkey"},"mapWithKey"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'k, 'a, 'id>, ('k, 'a) => 'b) => t<'k, 'b, 'id>\n")))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/belt/mutable-map.mdx"}},94847:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/belt/mutable-map",function(){return a(90913)}])}},function(e){e.O(0,[49774],(function(){return t=94847,e(e.s=t);var t}));var t=e.O();_N_E=t}]);