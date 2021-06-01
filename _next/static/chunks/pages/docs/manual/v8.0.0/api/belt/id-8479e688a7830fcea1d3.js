(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64410],{22122:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"===typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"===typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},45849:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n,r=a(22122),i=a(17375),l=a(67294),o=a(3905),s=(l.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),p={};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"id"},"Id"),(0,o.kt)(s,{mdxType:"Intro"},(0,o.kt)("p",null,"Provide utilities to create identified comparators or hashes for data\nstructures used below."),(0,o.kt)("p",null,"It creates a unique identifier per module of functions so that different data\nstructures with slightly different comparison functions won't mix.")),(0,o.kt)("h2",{id:"hash"},"hash"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type hash('a, 'id);\n")),(0,o.kt)("p",null,"Its runtime represenation is a hash function, but signed with a type parameter, so that different hash functions type mismatch."),(0,o.kt)("h2",{id:"eq"},"eq"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type eq('a, 'id);\n")),(0,o.kt)("p",null,"Its runtime represenation is an eq function, but signed with a type parameter, so that different hash functions type mismatch."),(0,o.kt)("h2",{id:"cmp"},"cmp"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type cmp('a, 'id);\n")),(0,o.kt)("p",null,"Its runtime representation is a cmp function, but signed with a type parameter, so that different hash functions type mismatch."),(0,o.kt)("h2",{id:"comparable"},"Comparable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module type Comparable {\n  type identity;\n\n  type t;\n\n  let cmp: BeltId.cmp(t, identity);\n}\n")),(0,o.kt)("h2",{id:"comparable-1"},"comparable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type ('key,'id) comparable = (module BeltId.Comparable with type identity = 'id and type t = 'key)\n")),(0,o.kt)("p",null,"is a module of functions, here it only includes cmp."),(0,o.kt)("p",null,"Unlike normal functions, when created, it comes with a unique identity (guaranteed by the type system)."),(0,o.kt)("p",null,"It can be created using function ",(0,o.kt)("inlineCode",{parentName:"p"},"Belt_Id.comparableU")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Belt_Id.comparable"),"."),(0,o.kt)("p",null,"The idea of a unique identity when created is that it makes sure two sets would type mismatch if they use different comparison function"),(0,o.kt)("h2",{id:"makecomparableu"},"MakeComparableU"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module MakeComparableU: (M: {type t; let cmp: [@bs] ((t, t) => int);}) => Comparable with type t = M.t;\n")),(0,o.kt)("h2",{id:"makecomparable"},"MakeComparable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module MakeComparable: (M: {type t; let cmp: (t, t) => int;}) => Comparable with type t = M.t;\n")),(0,o.kt)("h2",{id:"comparableu"},"comparableU"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let comparableU: (~cmp: [@bs] (('a, 'a) => int)) => (module BeltId.Comparable with type t = 'a);\n")),(0,o.kt)("h2",{id:"comparable-2"},"comparable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type ('key, 'id) comparable = (module BeltId.Comparable with type identity = 'id and type t = 'key)\n")),(0,o.kt)("h2",{id:"hashable"},"Hashable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module type Hashable = {\n  type identity;\n\n  type t;\n\n  let hash: BeltId.hash(t, identity);\n\n  let eq: BeltId.eq(t, identity);\n}\n")),(0,o.kt)("h2",{id:"hashable-1"},"hashable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type hashable('key, 'id) = (module BeltId.Hashable with type identity = 'id and type t = 'key);\n")),(0,o.kt)("p",null,"is a module of functions, here it only includes hash, eq."),(0,o.kt)("p",null,"Unlike normal functions, when created, it comes with a unique identity (guaranteed by the type system)."),(0,o.kt)("p",null,"It can be created using function ",(0,o.kt)("inlineCode",{parentName:"p"},"Belt_Id.hashableU")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Belt_Id.hashable"),"."),(0,o.kt)("p",null,"The idea of a unique identity when created is that it makes sure two hash sets would type mismatch if they use different comparison function."),(0,o.kt)("h2",{id:"makehashableu"},"MakeHashableU"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module MakeHashableU: (M: {type t; let hash: [@bs] (t => int); let eq: [@bs] ((t, t) => bool);}) => Hashable with type t = M.t;\n")),(0,o.kt)("h2",{id:"makehashable"},"MakeHashable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"module MakeHashable: (M: {type t; let hash: t => int; let eq: (t, t) => bool;}) => Hashable with type t = M.t;\n")),(0,o.kt)("h2",{id:"hashableu"},"hashableU"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let hashableU: (~hash: [@bs] ('a => int), ~eq: [@bs] (('a, 'a) => bool)) => (module BeltId.Hashable with type t = 'a);\n")),(0,o.kt)("h2",{id:"hashable-2"},"hashable"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let hashable: (~hash: 'a => int, ~eq: ('a, 'a) => bool) => (module BeltId.Hashable with type t = 'a);\n")))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/belt/id.mdx"}},26556:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/belt/id",function(){return a(45849)}])}},function(e){e.O(0,[49774],(function(){return t=26556,e(e.s=t);var t}));var t=e.O();_N_E=t}]);