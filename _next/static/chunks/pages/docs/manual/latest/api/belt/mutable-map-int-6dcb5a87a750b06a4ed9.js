(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25476],{22122:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,d=u["".concat(p,".").concat(c)]||u[c]||g[c]||i;return a?n.createElement(d,s(s({ref:t},m),{},{components:a})):n.createElement(d,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},50425:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(22122),r=a(17375),i=a(67294),s=a(3905),l=(i.createElement,{});function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mutablemapint"},"MutableMapInt"),(0,s.kt)("h2",{id:"key"},"key"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = int\n")),(0,s.kt)("h2",{id:"t"},"t"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'a>\n")),(0,s.kt)("h2",{id:"make"},"make"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: unit => t<'a>\n")),(0,s.kt)("h2",{id:"clear"},"clear"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'a> => unit\n")),(0,s.kt)("h2",{id:"isempty"},"isEmpty"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a> => bool\n")),(0,s.kt)("h2",{id:"has"},"has"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'a>, key) => bool\n")),(0,s.kt)("h2",{id:"cmpu"},"cmpU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'a>, t<'a>, (. 'a, 'a) => int) => int\n")),(0,s.kt)("h2",{id:"cmp"},"cmp"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'a>, t<'a>, ('a, 'a) => int) => int\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cmp(m1, m2, cmp)")," First compare by size, if size is the same, compare by key, value pair."),(0,s.kt)("h2",{id:"equ"},"eqU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'a>, t<'a>, (. 'a, 'a) => bool) => bool\n")),(0,s.kt)("h2",{id:"eq"},"eq"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'a>, t<'a>, ('a, 'a) => bool) => bool\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, cmp)")),(0,s.kt)("h2",{id:"foreachu"},"forEachU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'a>, (. key, 'a) => unit) => unit\n")),(0,s.kt)("h2",{id:"foreach"},"forEach"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'a>, (key, 'a) => unit) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in map ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. The application order of ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," is in increasing order."),(0,s.kt)("h2",{id:"reduceu"},"reduceU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'a>, 'b, (. 'b, key, 'a) => 'b) => 'b\n")),(0,s.kt)("h2",{id:"reduce"},"reduce"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'a>, 'b, ('b, key, 'a) => 'b) => 'b\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f), computes"),"(f(kN, dN) ... (f(k1, d1, a))...)",(0,s.kt)("inlineCode",{parentName:"p"},", where"),"k1 ... kN",(0,s.kt)("inlineCode",{parentName:"p"},"are the keys of all bindings in"),"m",(0,s.kt)("inlineCode",{parentName:"p"},"(in increasing order), and"),"d1 ... dN` are the associated data."),(0,s.kt)("h2",{id:"everyu"},"everyU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'a>, (. key, 'a) => bool) => bool\n")),(0,s.kt)("h2",{id:"every"},"every"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'a>, (key, 'a) => bool) => bool\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,s.kt)("inlineCode",{parentName:"p"},"p"),". The application order of ",(0,s.kt)("inlineCode",{parentName:"p"},"p")," is unspecified."),(0,s.kt)("h2",{id:"someu"},"someU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'a>, (. key, 'a) => bool) => bool\n")),(0,s.kt)("h2",{id:"some"},"some"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'a>, (key, 'a) => bool) => bool\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,s.kt)("inlineCode",{parentName:"p"},"p"),". The application order of ",(0,s.kt)("inlineCode",{parentName:"p"},"p")," is unspecified."),(0,s.kt)("h2",{id:"size"},"size"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'a> => int\n")),(0,s.kt)("h2",{id:"tolist"},"toList"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'a> => list<(key, 'a)>\n")),(0,s.kt)("p",null,"In increasing order"),(0,s.kt)("h2",{id:"toarray"},"toArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'a> => array<(key, 'a)>\n")),(0,s.kt)("h2",{id:"fromarray"},"fromArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'a)> => t<'a>\n")),(0,s.kt)("h2",{id:"keystoarray"},"keysToArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'a> => array<key>\n")),(0,s.kt)("h2",{id:"valuestoarray"},"valuesToArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'a> => array<'a>\n")),(0,s.kt)("h2",{id:"minkey"},"minKey"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'a> => option<key>\n")),(0,s.kt)("h2",{id:"minkeyundefined"},"minKeyUndefined"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,s.kt)("h2",{id:"maxkey"},"maxKey"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'a> => option<key>\n")),(0,s.kt)("h2",{id:"maxkeyundefined"},"maxKeyUndefined"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,s.kt)("h2",{id:"minimum"},"minimum"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'a> => option<(key, 'a)>\n")),(0,s.kt)("h2",{id:"minundefined"},"minUndefined"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'a> => Js.undefined<(key, 'a)>\n")),(0,s.kt)("h2",{id:"maximum"},"maximum"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'a> => option<(key, 'a)>\n")),(0,s.kt)("h2",{id:"maxundefined"},"maxUndefined"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'a> => Js.undefined<(key, 'a)>\n")),(0,s.kt)("h2",{id:"get"},"get"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'a>, key) => option<'a>\n")),(0,s.kt)("h2",{id:"getundefined"},"getUndefined"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'a>, key) => Js.undefined<'a>\n")),(0,s.kt)("h2",{id:"getwithdefault"},"getWithDefault"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'a>, key, 'a) => 'a\n")),(0,s.kt)("h2",{id:"getexn"},"getExn"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'a>, key) => 'a\n")),(0,s.kt)("h2",{id:"checkinvariantinternal"},"checkInvariantInternal"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a> => unit\n")),(0,s.kt)("p",null,"Raise when invariant is not held."),(0,s.kt)("h2",{id:"remove"},"remove"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'a>, key) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," do the in-place modification."),(0,s.kt)("h2",{id:"removemany"},"removeMany"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'a>, array<key>) => unit\n")),(0,s.kt)("h2",{id:"set"},"set"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a>, key, 'a) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," do the in-place modification, return ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," for chaining. If ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," was already bound in ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),", its previous binding disappears."),(0,s.kt)("h2",{id:"updateu"},"updateU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'a>, key, (. option<'a>) => option<'a>) => unit\n")),(0,s.kt)("h2",{id:"update"},"update"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'a>, key, option<'a> => option<'a>) => unit\n")),(0,s.kt)("h2",{id:"mapu"},"mapU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'a>, (. 'a) => 'b) => t<'b>\n")),(0,s.kt)("h2",{id:"map"},"map"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'a>, 'a => 'b) => t<'b>\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value a of all bindings of ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,s.kt)("h2",{id:"mapwithkeyu"},"mapWithKeyU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'a>, (. key, 'a) => 'b) => t<'b>\n")),(0,s.kt)("h2",{id:"mapwithkey"},"mapWithKey"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'a>, (key, 'a) => 'b) => t<'b>\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/belt/mutable-map-int.mdx"}},1803:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/belt/mutable-map-int",function(){return a(50425)}])}},function(e){e.O(0,[49774],(function(){return t=1803,e(e.s=t);var t}));var t=e.O();_N_E=t}]);