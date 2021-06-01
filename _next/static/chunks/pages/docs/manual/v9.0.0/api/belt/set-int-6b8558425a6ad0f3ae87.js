(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64324],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(n),g=r,d=c["".concat(m,".").concat(g)]||c[g]||u[g]||l;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"===typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},13609:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a,r=n(22122),l=n(17375),s=n(67294),i=n(3905),m=(s.createElement,a="Intro",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),o={};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setint"},"SetInt"),(0,i.kt)(m,{mdxType:"Intro"},(0,i.kt)("p",null,"Specalized when value type is ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", more efficient than the generic type, its compare behavior is fixed using the built-in comparison.")),(0,i.kt)("h2",{id:"value"},"value"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type value = int\n")),(0,i.kt)("p",null,"The type of the set elements."),(0,i.kt)("h2",{id:"t"},"t"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t\n")),(0,i.kt)("p",null,"Type of the sets."),(0,i.kt)("h2",{id:"empty"},"empty"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: t\n")),(0,i.kt)("p",null,"Empty set"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\n")),(0,i.kt)("h2",{id:"fromarray"},"fromArray"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<value> => t\n")),(0,i.kt)("p",null,"Creates new set from array of elements."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([1, 3, 2, 4])\n\ns0->Belt.Set.Int.toArray /* [1, 2, 3, 4] */\n")),(0,i.kt)("h2",{id:"fromsortedarrayunsafe"},"fromSortedArrayUnsafe"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromSortedArrayUnsafe: array<value> => t\n")),(0,i.kt)("p",null,"The same as ","[fromArray][#fromarray]"," except it is after assuming the input array is already sorted."),(0,i.kt)("h2",{id:"isempty"},"isEmpty"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t => bool\n")),(0,i.kt)("p",null,"Checks if set is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let empty = Belt.Set.Int.fromArray([])\nlet notEmpty = Belt.Set.Int.fromArray([1])\n\nBelt.Set.Int.isEmpty(empty) /* true */\nBelt.Set.Int.isEmpty(notEmpty) /* false */\n")),(0,i.kt)("h2",{id:"has"},"has"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t, value) => bool\n")),(0,i.kt)("p",null,"Checks if element exists in set."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let set = Belt.Set.Int.fromArray([1, 4, 2, 5])\n\nset->Belt.Set.Int.has(3) /* false */\nset->Belt.Set.Int.has(1) /* true */\n")),(0,i.kt)("h2",{id:"add"},"add"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let add: (t, value) => t\n")),(0,i.kt)("p",null,"Adds element to set. If element existed in set, value is unchanged."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\nlet s1 = s0->Belt.Set.Int.add(1)\nlet s2 = s1->Belt.Set.Int.add(2)\nlet s3 = s2->Belt.Set.Int.add(2)\ns0->Belt.Set.Int.toArray /* [] */\ns1->Belt.Set.Int.toArray /* [1] */\ns2->Belt.Set.Int.toArray /* [1, 2] */\ns3->Belt.Set.Int.toArray /* [1,2 ] */\ns2 == s3 /* true */\n")),(0,i.kt)("h2",{id:"mergemany"},"mergeMany"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t, array<value>) => t\n")),(0,i.kt)("p",null,"Adds each element of array to set. Unlike ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"#add"}),"add"),", the reference of return value might be changed even if all values in array already exist in set"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let set = Belt.Set.Int.empty\n\nlet newSet = set->Belt.Set.Int.mergeMany([5, 4, 3, 2, 1])\nnewSet->Belt.Set.Int.toArray /* [1, 2, 3, 4, 5] */\n")),(0,i.kt)("h2",{id:"remove"},"remove"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t, value) => t\n")),(0,i.kt)("p",null,"Removes element from set. If element wasn't existed in set, value is unchanged."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([2, 3, 1, 4, 5])\nlet s1 = s0->Belt.Set.Int.remove(1)\nlet s2 = s1->Belt.Set.Int.remove(3)\nlet s3 = s2->Belt.Set.Int.remove(3)\n\ns1->Belt.Set.Int.toArray /* [2,3,4,5] */\ns2->Belt.Set.Int.toArray /* [2,4,5] */\ns2 == s3 /* true */\n")),(0,i.kt)("h2",{id:"removemany"},"removeMany"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t, array<value>) => t\n")),(0,i.kt)("p",null,"Removes each element of array from set. Unlike ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"#remove"}),"remove"),", the reference of return value might be changed even if any values in array not existed in set."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let set = Belt.Set.Int.fromArray([1, 2, 3, 4])\n\nlet newSet = set->Belt.Set.Int.removeMany([5, 4, 3, 2, 1])\nnewSet->Belt.Set.Int.toArray /* [] */\n")),(0,i.kt)("h2",{id:"union"},"union"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let union: (t, t) => t\n")),(0,i.kt)("p",null,"Returns union of two sets."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\nlet s1 = Belt.Set.Int.fromArray([5, 2, 3, 1, 5, 4])\nlet union = Belt.Set.Int.union(s0, s1)\nunion->Belt.Set.Int.toArray /* [1,2,3,4,5,6] */\n")),(0,i.kt)("h2",{id:"intersect"},"intersect"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let intersect: (t, t) => t\n")),(0,i.kt)("p",null,"Returns intersection of two sets."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\nlet s1 = Belt.Set.Int.fromArray([5, 2, 3, 1, 5, 4])\nlet intersect = Belt.Set.Int.intersect(s0, s1)\nintersect->Belt.Set.Int.toArray /* [2,3,5] */\n")),(0,i.kt)("h2",{id:"diff"},"diff"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let diff: (t, t) => t\n")),(0,i.kt)("p",null,"Returns elements from first set, not existing in second set."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\nlet s1 = Belt.Set.Int.fromArray([5, 2, 3, 1, 5, 4])\nBelt.Set.Int.toArray(Belt.Set.Int.diff(s0, s1)) /* [6] */\nBelt.Set.Int.toArray(Belt.Set.Int.diff(s1, s0)) /* [1,4] */\n")),(0,i.kt)("h2",{id:"subset"},"subset"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subset: (t, t) => bool\n")),(0,i.kt)("p",null,"Checks if second set is subset of first set."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\nlet s1 = Belt.Set.Int.fromArray([5, 2, 3, 1, 5, 4])\nlet s2 = Belt.Set.Int.intersect(s0, s1)\nBelt.Set.Int.subset(s2, s0) /* true */\nBelt.Set.Int.subset(s2, s1) /* true */\nBelt.Set.Int.subset(s1, s0) /* false */\n")),(0,i.kt)("h2",{id:"cmp"},"cmp"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t, t) => int\n")),(0,i.kt)("p",null,"Total ordering between sets. Can be used as the ordering function for doing sets of sets. It compares size first and then iterates over each element following the order of elements."),(0,i.kt)("h2",{id:"eq"},"eq"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t, t) => bool\n")),(0,i.kt)("p",null,"Checks if two sets are equal."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3])\nlet s1 = Belt.Set.Int.fromArray([3, 2, 5])\n\nBelt.Set.Int.eq(s0, s1) /* true */\n")),(0,i.kt)("h2",{id:"foreachu"},"forEachU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t, (. value) => unit) => unit\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,i.kt)("h2",{id:"foreach"},"forEach"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t, value => unit) => unit\n")),(0,i.kt)("p",null,"Applies function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," in turn to all elements of set in increasing order."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\nlet acc = ref(list{})\ns0->Belt.Set.Int.forEach(x => acc := Belt.List.add(acc.contents, x))\nacc /* [6,5,3,2] */\n")),(0,i.kt)("h2",{id:"reduceu"},"reduceU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t, 'a, (. 'a, value) => 'a) => 'a\n")),(0,i.kt)("h2",{id:"reduce"},"reduce"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t, 'a, ('a, value) => 'a) => 'a\n")),(0,i.kt)("p",null,"Applies function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," to each element of set in increasing order. Function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," has two parameters: the item from the set and an \u201caccumulator\u201d, which starts with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"initialValue"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce")," returns the final value of the accumulator."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([5, 2, 3, 5, 6])\ns0->Belt.Set.Int.reduce(list{}, (acc, element) => acc->Belt.List.add(element)) /* [6,5,3,2] */\n")),(0,i.kt)("h2",{id:"everyu"},"everyU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t, (. value) => bool) => bool\n")),(0,i.kt)("h2",{id:"every"},"every"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t, value => bool) => bool\n")),(0,i.kt)("p",null,"Checks if all elements of the set satisfy the predicate. Order unspecified."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let isEven = x => mod(x, 2) == 0\n\nlet s0 = Belt.Set.Int.fromArray([2, 4, 6, 8])\ns0->Belt.Set.Int.every(isEven) /* true */\n")),(0,i.kt)("h2",{id:"someu"},"someU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t, (. value) => bool) => bool\n")),(0,i.kt)("h2",{id:"some"},"some"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t, value => bool) => bool\n")),(0,i.kt)("p",null,"Checks if at least one element of the set satisfies the predicate."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let isOdd = x => mod(x, 2) != 0\n\nlet s0 = Belt.Set.Int.fromArray([1, 2, 4, 6, 8])\ns0->Belt.Set.Int.some(isOdd) /* true */\n")),(0,i.kt)("h2",{id:"keepu"},"keepU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t, (. value) => bool) => t\n")),(0,i.kt)("h2",{id:"keep"},"keep"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t, value => bool) => t\n")),(0,i.kt)("p",null,"Returns the set of all elements that satisfy the predicate."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let isEven = x => mod(x, 2) == 0\n\nlet s0 = Belt.Set.Int.fromArray([1, 2, 3, 4, 5])\nlet s1 = s0->Belt.Set.Int.keep(isEven)\n\ns1->Belt.Set.Int.toArray /* [2,4] */\n")),(0,i.kt)("h2",{id:"partitionu"},"partitionU"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t, (. value) => bool) => (t, t)\n")),(0,i.kt)("h2",{id:"partition"},"partition"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t, value => bool) => (t, t)\n")),(0,i.kt)("p",null,"Returns a pair of sets, where first is the set of all the elements of set that satisfy the predicate, and second is the set of all the elements of set that do not satisfy the predicate."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let isOdd = x => mod(x, 2) != 0\n\nlet s0 = Belt.Set.Int.fromArray([1, 2, 3, 4, 5])\nlet (s1, s2) = s0->Belt.Set.Int.partition(isOdd)\n\ns1->Belt.Set.Int.toArray /* [1,3,5] */\ns2->Belt.Set.Int.toArray /* [2,4] */\n")),(0,i.kt)("h2",{id:"size"},"size"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t => int\n")),(0,i.kt)("p",null,"Returns size of the set."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([1, 2, 3, 4])\n\ns0->Belt.Set.Int.size /* 4 */\n")),(0,i.kt)("h2",{id:"tolist"},"toList"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t => list<value>\n")),(0,i.kt)("p",null,"Returns list of ordered set elements."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.toList /* [1,2,3,5] */\n")),(0,i.kt)("h2",{id:"toarray"},"toArray"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t => array<value>\n")),(0,i.kt)("p",null,"Returns array of ordered set elements."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.toArray /* [1,2,3,5] */\n")),(0,i.kt)("h2",{id:"minimum"},"minimum"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t => option<value>\n")),(0,i.kt)("p",null,"Returns minimum value of the collection. ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\nlet s1 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.minimum /* None */\ns1->Belt.Set.Int.minimum /* Some(1) */\n")),(0,i.kt)("h2",{id:"minundefined"},"minUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t => Js.undefined<value>\n")),(0,i.kt)("p",null,"Returns minimum value of the collection. ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\nlet s1 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.minUndefined /* undefined */\ns1->Belt.Set.Int.minUndefined /* 1 */\n")),(0,i.kt)("h2",{id:"maximum"},"maximum"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t => option<value>\n")),(0,i.kt)("p",null,"Returns maximum value of the collection. ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\nlet s1 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.maximum /* None */\ns1->Belt.Set.Int.maximum /* Some(5) */\n")),(0,i.kt)("h2",{id:"maxundefined"},"maxUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t => Js.undefined<value>\n")),(0,i.kt)("p",null,"Returns maximum value of the collection. ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.empty\nlet s1 = Belt.Set.Int.fromArray([3, 2, 1, 5])\n\ns0->Belt.Set.Int.maxUndefined /* undefined */\ns1->Belt.Set.Int.maxUndefined /* 5 */\n")),(0,i.kt)("h2",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t, value) => option<value>\n")),(0,i.kt)("p",null,"Returns the reference of the value which is equivalent to value using the comparator specifiecd by this collection. Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," if element does not exist."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([1, 2, 3, 4, 5])\n\ns0->Belt.Set.Int.get(3) /* Some(3) */\ns0->Belt.Set.Int.get(20) /* None */\n")),(0,i.kt)("h2",{id:"getundefined"},"getUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t, value) => Js.undefined<value>\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"#get"}),"get")," but returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when element does not exist."),(0,i.kt)("h2",{id:"getexn"},"getExn"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t, value) => value\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"#get"}),"get")," but raise when element does not exist."),(0,i.kt)("h2",{id:"split"},"split"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (t, value) => ((t, t), bool)\n")),(0,i.kt)("p",null,"Returns a tuple ",(0,i.kt)("inlineCode",{parentName:"p"},"((l, r), present)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," is the set of elements of set that are strictly less than value, ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," is the set of elements of set that are strictly greater than value, ",(0,i.kt)("inlineCode",{parentName:"p"},"present")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if set contains no element equal to value, or ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if set contains an element equal to value."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let s0 = Belt.Set.Int.fromArray([1, 2, 3, 4, 5])\n\nlet ((smaller, larger), present) = s0->Belt.Set.Int.split(3)\n\npresent /* true */\nsmaller->Belt.Set.Int.toArray /* [1,2] */\nlarger->Belt.Set.Int.toArray /* [4,5] */\n")),(0,i.kt)("h2",{id:"checkinvariantinternal"},"checkInvariantInternal"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t => unit\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"raise")," when invariant is not held"))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/set-int.mdx"}},78225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/set-int",function(){return n(13609)}])}},function(e){e.O(0,[49774],(function(){return t=78225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);