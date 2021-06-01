(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23042],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(n),k=r,u=d["".concat(l,".").concat(k)]||d[k]||g[k]||i;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"===typeof e?e:r,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},33801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a,r=n(22122),i=n(17375),s=n(67294),p=n(3905),l=(s.createElement,a="Intro",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),o={};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"mapstring"},"MapString"),(0,p.kt)(l,{mdxType:"Intro"},(0,p.kt)("p",null,"Specalized when key type is ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", more efficient than the generic type, its compare behavior is fixed using the built-in comparison")),(0,p.kt)("h2",{id:"key"},"key"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = string\n")),(0,p.kt)("h2",{id:"t"},"t"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'value>\n")),(0,p.kt)("p",null,"The type of maps from type ",(0,p.kt)("inlineCode",{parentName:"p"},"key")," to type ",(0,p.kt)("inlineCode",{parentName:"p"},"'value"),"."),(0,p.kt)("h2",{id:"empty"},"empty"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: t<'v>\n")),(0,p.kt)("h2",{id:"isempty"},"isEmpty"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'v> => bool\n")),(0,p.kt)("h2",{id:"has"},"has"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'v>, key) => bool\n")),(0,p.kt)("h2",{id:"cmpu"},"cmpU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'v>, t<'v>, (. 'v, 'v) => int) => int\n")),(0,p.kt)("h2",{id:"cmp"},"cmp"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'v>, t<'v>, ('v, 'v) => int) => int\n")),(0,p.kt)("h2",{id:"equ"},"eqU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'v>, t<'v>, (. 'v, 'v) => bool) => bool\n")),(0,p.kt)("h2",{id:"eq"},"eq"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'v>, t<'v>, ('v, 'v) => bool) => bool\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"eq(m1, m2)")," tests whether the maps ",(0,p.kt)("inlineCode",{parentName:"p"},"m1")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"m2")," are equal, that is, contain equal keys and associate them with equal data."),(0,p.kt)("h2",{id:"findfirstbyu"},"findFirstByU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstByU: (t<'v>, (. key, 'v) => bool) => option<(key, 'v)>\n")),(0,p.kt)("h2",{id:"findfirstby"},"findFirstBy"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstBy: (t<'v>, (key, 'v) => bool) => option<(key, 'v)>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"findFirstBy(m, p)")," uses function ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," to find the first key value pair to match predicate ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.Map.String.fromArray([("4", 4), ("1", 1), ("2", 2), ("3", 3)])\n\nBelt.Map.String.findFirstBy(s0, (k, _) => k == "4") == Some(("4", 4))\n')),(0,p.kt)("h2",{id:"foreachu"},"forEachU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'v>, (. key, 'v) => unit) => unit\n")),(0,p.kt)("h2",{id:"foreach"},"forEach"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'v>, (key, 'v) => unit) => unit\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in map ",(0,p.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. The bindings are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,p.kt)("h2",{id:"reduceu"},"reduceU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'v>, 'v2, (. 'v2, key, 'v) => 'v2) => 'v2\n")),(0,p.kt)("h2",{id:"reduce"},"reduce"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'v>, 'v2, ('v2, key, 'v) => 'v2) => 'v2\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f)")," computes ",(0,p.kt)("inlineCode",{parentName:"p"},"f(kN, dN ... f(k1, d1, a)...), where k1 ... kN)")," are the keys of all bindings in ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," (in increasing order), and ",(0,p.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated data."),(0,p.kt)("h2",{id:"everyu"},"everyU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'v>, (. key, 'v) => bool) => bool\n")),(0,p.kt)("h2",{id:"every"},"every"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'v>, (key, 'v) => bool) => bool\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,p.kt)("h2",{id:"someu"},"someU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'v>, (. key, 'v) => bool) => bool\n")),(0,p.kt)("h2",{id:"some"},"some"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'v>, (key, 'v) => bool) => bool\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,p.kt)("h2",{id:"size"},"size"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'v> => int\n")),(0,p.kt)("h2",{id:"tolist"},"toList"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'v> => list<(key, 'v)>\n")),(0,p.kt)("p",null,"In increasing order."),(0,p.kt)("h2",{id:"toarray"},"toArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'v> => array<(key, 'v)>\n")),(0,p.kt)("h2",{id:"fromarray"},"fromArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'v)> => t<'v>\n")),(0,p.kt)("h2",{id:"keystoarray"},"keysToArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'v> => array<key>\n")),(0,p.kt)("h2",{id:"valuestoarray"},"valuesToArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'v> => array<'v>\n")),(0,p.kt)("h2",{id:"minkey"},"minKey"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'a> => option<key>\n")),(0,p.kt)("h2",{id:"minkeyundefined"},"minKeyUndefined"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,p.kt)("h2",{id:"maxkey"},"maxKey"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'a> => option<key>\n")),(0,p.kt)("h2",{id:"maxkeyundefined"},"maxKeyUndefined"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,p.kt)("h2",{id:"minimum"},"minimum"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'v> => option<(key, 'v)>\n")),(0,p.kt)("h2",{id:"minundefined"},"minUndefined"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'v> => Js.undefined<(key, 'v)>\n")),(0,p.kt)("h2",{id:"maximum"},"maximum"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'v> => option<(key, 'v)>\n")),(0,p.kt)("h2",{id:"maxundefined"},"maxUndefined"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'v> => Js.undefined<(key, 'v)>\n")),(0,p.kt)("h2",{id:"get"},"get"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'v>, key) => option<'v>\n")),(0,p.kt)("h2",{id:"getundefined"},"getUndefined"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'v>, key) => Js.undefined<'v>\n")),(0,p.kt)("h2",{id:"getwithdefault"},"getWithDefault"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'v>, key, 'v) => 'v\n")),(0,p.kt)("h2",{id:"getexn"},"getExn"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'v>, key) => 'v\n")),(0,p.kt)("h2",{id:"checkinvariantinternal"},"checkInvariantInternal"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a> => unit\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"raise")," when invariant is not held"),(0,p.kt)("h2",{id:"remove"},"remove"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'v>, key) => t<'v>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," returns a map containing the same bindings as ",(0,p.kt)("inlineCode",{parentName:"p"},"m"),", except for ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," which is unbound in the returned map."),(0,p.kt)("h2",{id:"removemany"},"removeMany"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'v>, array<key>) => t<'v>\n")),(0,p.kt)("h2",{id:"set"},"set"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'v>, key, 'v) => t<'v>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," returns a map containing the same bindings as ",(0,p.kt)("inlineCode",{parentName:"p"},"m"),", plus a binding of ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"y"),". If ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," was already bound in ",(0,p.kt)("inlineCode",{parentName:"p"},"m"),", its previous binding disappears."),(0,p.kt)("h2",{id:"updateu"},"updateU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'v>, key, (. option<'v>) => option<'v>) => t<'v>\n")),(0,p.kt)("h2",{id:"update"},"update"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'v>, key, option<'v> => option<'v>) => t<'v>\n")),(0,p.kt)("h2",{id:"mergeu"},"mergeU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeU: (t<'v>, t<'v2>, (. key, option<'v>, option<'v2>) => option<'c>) => t<'c>\n")),(0,p.kt)("h2",{id:"merge"},"merge"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let merge: (t<'v>, t<'v2>, (key, option<'v>, option<'v2>) => option<'c>) => t<'c>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"merge(m1, m2, f)")," computes a map whose keys is a subset of keys of ",(0,p.kt)("inlineCode",{parentName:"p"},"m1")," and of ",(0,p.kt)("inlineCode",{parentName:"p"},"m2"),". The presence of each such binding, and the corresponding value, is determined with the function ",(0,p.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,p.kt)("h2",{id:"mergemany"},"mergeMany"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'v>, array<(key, 'v)>) => t<'v>\n")),(0,p.kt)("h2",{id:"keepu"},"keepU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t<'v>, (. key, 'v) => bool) => t<'v>\n")),(0,p.kt)("h2",{id:"keep"},"keep"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t<'v>, (key, 'v) => bool) => t<'v>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"keep(m, p)")," returns the map with all the bindings in ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," that satisfy predicate ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,p.kt)("h2",{id:"partitionu"},"partitionU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t<'v>, (. key, 'v) => bool) => (t<'v>, t<'v>)\n")),(0,p.kt)("h2",{id:"partition"},"partition"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t<'v>, (key, 'v) => bool) => (t<'v>, t<'v>)\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"partition(m, p)")," returns a pair of maps ",(0,p.kt)("inlineCode",{parentName:"p"},"(m1, m2)"),", where ",(0,p.kt)("inlineCode",{parentName:"p"},"m1")," contains all the bindings of ",(0,p.kt)("inlineCode",{parentName:"p"},"s")," that satisfy the predicate ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"m2")," is the map with all the bindings of s that do not satisfy ",(0,p.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,p.kt)("h2",{id:"split"},"split"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (key, t<'v>) => (t<'v>, option<'v>, t<'v>)\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"split(x, m)")," returns a triple ",(0,p.kt)("inlineCode",{parentName:"p"},"(l, data, r)"),", where ",(0,p.kt)("inlineCode",{parentName:"p"},"l")," is the map with all the bindings of ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," whose key is strictly less than ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,p.kt)("inlineCode",{parentName:"p"},"r")," is the map with all the bindings of m whose key is strictly greater than ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,p.kt)("inlineCode",{parentName:"p"},"data")," is ",(0,p.kt)("inlineCode",{parentName:"p"},"None")," if ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," contains no binding for ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),", or ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(v)")," if ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," binds ",(0,p.kt)("inlineCode",{parentName:"p"},"v")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,p.kt)("h2",{id:"mapu"},"mapU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'v>, (. 'v) => 'v2) => t<'v2>\n")),(0,p.kt)("h2",{id:"map"},"map"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'v>, 'v => 'v2) => t<'v2>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,p.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value ",(0,p.kt)("inlineCode",{parentName:"p"},"a")," of all bindings of ",(0,p.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,p.kt)("h2",{id:"mapwithkeyu"},"mapWithKeyU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'v>, (. key, 'v) => 'v2) => t<'v2>\n")),(0,p.kt)("h2",{id:"mapwithkey"},"mapWithKey"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'v>, (key, 'v) => 'v2) => t<'v2>\n")))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/map-string.mdx"}},99103:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/map-string",function(){return n(33801)}])}},function(e){e.O(0,[49774],(function(){return t=99103,e(e.s=t);var t}));var t=e.O();_N_E=t}]);