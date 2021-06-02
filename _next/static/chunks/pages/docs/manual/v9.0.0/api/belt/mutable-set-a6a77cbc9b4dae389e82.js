(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66444],{22122:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{Z:function(){return n}})},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=p(a),c=l,g=d["".concat(i,".").concat(c)]||d[c]||o[c]||r;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"===typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"===typeof e?e:l,s[1]=m;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},15487:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n,l=a(22122),r=a(17375),s=a(67294),m=a(3905),i=(s.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)}),p={};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,m.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"mutableset"},"MutableSet"),(0,m.kt)(i,{mdxType:"Intro"},(0,m.kt)("p",null,"A ",(0,m.kt)("strong",{parentName:"p"},"mutable")," sorted set module which allows customize compare behavior.\nThe implementation uses balanced binary trees, and therefore searching and insertion take time logarithmic in the size of the map."),(0,m.kt)("p",null,"It also has three specialized inner modules ",(0,m.kt)("a",(0,l.Z)({parentName:"p"},{href:"mutable-set-int"}),"Belt.MutableSet.Int")," and ",(0,m.kt)("a",(0,l.Z)({parentName:"p"},{href:"mutable-set-string"}),"Belt.MutableSet.String")," - This module separates data from function which is more verbose but slightly more efficient")),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module PairComparator = Belt.Id.MakeComparable({\n  type t = (int, int)\n  let cmp = ((a0, a1), (b0, b1)) =>\n    switch Pervasives.compare(a0, b0) {\n    | 0 => Pervasives.compare(a1, b1)\n    | c => c\n    }\n})\n\nlet mySet = Belt.MutableSet.make(~id=module(PairComparator))\nmySet->Belt.MutableSet.add((1, 2))\n")),(0,m.kt)("h2",{id:"t"},"t"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'value, 'id>\n")),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"'value")," is the element type"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"'id")," the identity of the collection"),(0,m.kt)("h2",{id:"id"},"id"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type id<'value, 'id> = Belt_Id.comparable<'value, 'id>\n")),(0,m.kt)("p",null,"The identity needed for making a set from scratch"),(0,m.kt)("h2",{id:"make"},"make"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~id: id<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Creates a new set by taking in the comparator"),(0,m.kt)("h2",{id:"fromarray"},"fromArray"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: (array<'value>, ~id: id<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Creates new set from array of elements."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([1, 3, 2, 4], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.toArray /* [1, 2, 3, 4] */\n")),(0,m.kt)("h2",{id:"fromsortedarrayunsafe"},"fromSortedArrayUnsafe"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromSortedArrayUnsafe: (array<'value>, ~id: id<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"The same as ","[fromArray][#fromarray]"," except it is after assuming the input array is already sorted."),(0,m.kt)("h2",{id:"copy"},"copy"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t<'value, 'id> => t<'value, 'id>\n")),(0,m.kt)("p",null,"Returns copy of a set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([1, 3, 2, 4], ~id=module(IntCmp))\n\nlet copied = s0->Belt.MutableSet.copy\ncopied->Belt.MutableSet.toArray /* [1, 2, 3, 4] */\n")),(0,m.kt)("h2",{id:"isempty"},"isEmpty"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a, 'b> => bool\n")),(0,m.kt)("p",null,"Checks if set is empty."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet empty = Belt.MutableSet.fromArray([], ~id=module(IntCmp))\nlet notEmpty = Belt.MutableSet.fromArray([1], ~id=module(IntCmp))\n\nBelt.MutableSet.isEmpty(empty) /* true */\nBelt.MutableSet.isEmpty(notEmpty) /* false */\n")),(0,m.kt)("h2",{id:"has"},"has"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'value, 'a>, 'value) => bool\n")),(0,m.kt)("p",null,"Checks if element exists in set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet set = Belt.MutableSet.fromArray([1, 4, 2, 5], ~id=module(IntCmp))\n\nset->Belt.MutableSet.has(3) /* false */\nset->Belt.MutableSet.has(1) /* true */\n")),(0,m.kt)("h2",{id:"add"},"add"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let add: (t<'value, 'id>, 'value) => unit\n")),(0,m.kt)("p",null,"Adds element to set. If element existed in set, value is unchanged."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.make(~id=module(IntCmp))\ns0->Belt.MutableSet.add(1)\ns0->Belt.MutableSet.add(2)\ns0->Belt.MutableSet.add(2)\n\ns0->Belt.MutableSet.toArray /* [1, 2] */\n")),(0,m.kt)("h2",{id:"addcheck"},"addCheck"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let addCheck: (t<'value, 'id>, 'value) => bool\n")),(0,m.kt)("h2",{id:"mergemany"},"mergeMany"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'value, 'id>, array<'value>) => unit\n")),(0,m.kt)("p",null,"Adds each element of array to set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet set = Belt.MutableSet.make(~id=module(IntCmp))\n\nset->Belt.MutableSet.mergeMany([5, 4, 3, 2, 1])\nset->Belt.MutableSet.toArray /* [1, 2, 3, 4, 5] */\n")),(0,m.kt)("h2",{id:"remove"},"remove"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'value, 'id>, 'value) => unit\n")),(0,m.kt)("p",null,"Removes element from set. If element wasn't existed in set, value is unchanged."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([2, 3, 1, 4, 5], ~id=module(IntCmp))\ns0->Belt.MutableSet.remove(1)\ns0->Belt.MutableSet.remove(3)\ns0->Belt.MutableSet.remove(3)\n\ns0->Belt.MutableSet.toArray /* [2,4,5] */\n")),(0,m.kt)("h2",{id:"removecheck"},"removeCheck"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeCheck: (t<'value, 'id>, 'value) => bool\n")),(0,m.kt)("h2",{id:"removemany"},"removeMany"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'value, 'id>, array<'value>) => unit\n")),(0,m.kt)("p",null,"Removes each element of array from set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet set = Belt.MutableSet.fromArray([1, 2, 3, 4], ~id=module(IntCmp))\n\nset->Belt.MutableSet.removeMany([5, 4, 3, 2, 1])\nset->Belt.MutableSet.toArray /* [] */\n")),(0,m.kt)("h2",{id:"union"},"union"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let union: (t<'value, 'id>, t<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Returns union of two sets."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([5, 2, 3, 1, 5, 4], ~id=module(IntCmp))\nlet union = Belt.MutableSet.union(s0, s1)\nunion->Belt.MutableSet.toArray /* [1,2,3,4,5,6] */\n")),(0,m.kt)("h2",{id:"intersect"},"intersect"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let intersect: (t<'value, 'id>, t<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Returns intersection of two sets."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([5, 2, 3, 1, 5, 4], ~id=module(IntCmp))\nlet intersect = Belt.MutableSet.intersect(s0, s1)\nintersect->Belt.MutableSet.toArray /* [2,3,5] */\n")),(0,m.kt)("h2",{id:"diff"},"diff"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let diff: (t<'value, 'id>, t<'value, 'id>) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Returns elements from first set, not existing in second set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([5, 2, 3, 1, 5, 4], ~id=module(IntCmp))\nBelt.MutableSet.toArray(Belt.MutableSet.diff(s0, s1)) /* [6] */\nBelt.MutableSet.toArray(Belt.MutableSet.diff(s1, s0)) /* [1,4] */\n")),(0,m.kt)("h2",{id:"subset"},"subset"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subset: (t<'value, 'id>, t<'value, 'id>) => bool\n")),(0,m.kt)("p",null,"Checks if second set is subset of first set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([5, 2, 3, 1, 5, 4], ~id=module(IntCmp))\nlet s2 = Belt.MutableSet.intersect(s0, s1)\nBelt.MutableSet.subset(s2, s0) /* true */\nBelt.MutableSet.subset(s2, s1) /* true */\nBelt.MutableSet.subset(s1, s0) /* false */\n")),(0,m.kt)("h2",{id:"cmp"},"cmp"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'value, 'id>, t<'value, 'id>) => int\n")),(0,m.kt)("p",null,"Total ordering between sets. Can be used as the ordering function for doing sets of sets. It compares size first and then iterates over each element following the order of elements."),(0,m.kt)("h2",{id:"eq"},"eq"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'value, 'id>, t<'value, 'id>) => bool\n")),(0,m.kt)("p",null,"Checks if two sets are equal."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3], ~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([3, 2, 5], ~id=module(IntCmp))\n\nBelt.MutableSet.eq(s0, s1) /* true */\n")),(0,m.kt)("h2",{id:"foreachu"},"forEachU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'value, 'id>, (. 'value) => unit) => unit\n")),(0,m.kt)("p",null,"Same as ",(0,m.kt)("a",(0,l.Z)({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,m.kt)("h2",{id:"foreach"},"forEach"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'value, 'id>, 'value => unit) => unit\n")),(0,m.kt)("p",null,"Applies function ",(0,m.kt)("inlineCode",{parentName:"p"},"f")," in turn to all elements of set in increasing order."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\nlet acc = ref(list{})\ns0->Belt.MutableSet.forEach(x => acc := Belt.List.add(acc.contents, x))\nacc /* [6,5,3,2] */\n")),(0,m.kt)("h2",{id:"reduceu"},"reduceU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'value, 'id>, 'a, (. 'a, 'value) => 'a) => 'a\n")),(0,m.kt)("h2",{id:"reduce"},"reduce"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'value, 'id>, 'a, ('a, 'value) => 'a) => 'a\n")),(0,m.kt)("p",null,"Applies function ",(0,m.kt)("inlineCode",{parentName:"p"},"f")," to each element of set in increasing order. Function ",(0,m.kt)("inlineCode",{parentName:"p"},"f")," has two parameters: the item from the set and an \u201caccumulator\u201d, which starts with a value of ",(0,m.kt)("inlineCode",{parentName:"p"},"initialValue"),". ",(0,m.kt)("inlineCode",{parentName:"p"},"reduce")," returns the final value of the accumulator."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([5, 2, 3, 5, 6], ~id=module(IntCmp))\ns0->Belt.MutableSet.reduce(list{}, (acc, element) => acc->Belt.List.add(element)) /* [6,5,3,2] */\n")),(0,m.kt)("h2",{id:"everyu"},"everyU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'value, 'id>, (. 'value) => bool) => bool\n")),(0,m.kt)("h2",{id:"every"},"every"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'value, 'id>, 'value => bool) => bool\n")),(0,m.kt)("p",null,"Checks if all elements of the set satisfy the predicate. Order unspecified."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet isEven = x => mod(x, 2) == 0\n\nlet s0 = Belt.MutableSet.fromArray([2, 4, 6, 8], ~id=module(IntCmp))\ns0->Belt.MutableSet.every(isEven) /* true */\n")),(0,m.kt)("h2",{id:"someu"},"someU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'value, 'id>, (. 'value) => bool) => bool\n")),(0,m.kt)("h2",{id:"some"},"some"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'value, 'id>, 'value => bool) => bool\n")),(0,m.kt)("p",null,"Checks if at least one element of the set satisfies the predicate."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet isOdd = x => mod(x, 2) != 0\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 4, 6, 8], ~id=module(IntCmp))\ns0->Belt.MutableSet.some(isOdd) /* true */\n")),(0,m.kt)("h2",{id:"keepu"},"keepU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t<'value, 'id>, (. 'value) => bool) => t<'value, 'id>\n")),(0,m.kt)("h2",{id:"keep"},"keep"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t<'value, 'id>, 'value => bool) => t<'value, 'id>\n")),(0,m.kt)("p",null,"Returns the set of all elements that satisfy the predicate."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet isEven = x => mod(x, 2) == 0\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 3, 4, 5], ~id=module(IntCmp))\nlet s1 = s0->Belt.MutableSet.keep(isEven)\n\ns1->Belt.MutableSet.toArray /* [2, 4] */\n")),(0,m.kt)("h2",{id:"partitionu"},"partitionU"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t<'value, 'id>, (. 'value) => bool) => (t<'value, 'id>, t<'value, 'id>)\n")),(0,m.kt)("h2",{id:"partition"},"partition"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t<'value, 'id>, 'value => bool) => (t<'value, 'id>, t<'value, 'id>)\n")),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet isOdd = x => mod(x, 2) != 0\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 3, 4, 5], ~id=module(IntCmp))\nlet (s1, s2) = s0->Belt.MutableSet.partition(isOdd)\n\ns1->Belt.MutableSet.toArray /* [1,3,5] */\ns2->Belt.MutableSet.toArray /* [2,4] */\n")),(0,m.kt)("h2",{id:"size"},"size"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'value, 'id> => int\n")),(0,m.kt)("p",null,"Returns size of the set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 3, 4], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.size /* 4 */\n")),(0,m.kt)("h2",{id:"tolist"},"toList"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'value, 'id> => list<'value>\n")),(0,m.kt)("p",null,"Returns list of ordered set elements."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.toList /* [1,2,3,5] */\n")),(0,m.kt)("h2",{id:"toarray"},"toArray"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'value, 'id> => array<'value>\n")),(0,m.kt)("p",null,"Returns array of ordered set elements."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.toArray /* [1,2,3,5] */\n")),(0,m.kt)("h2",{id:"minimum"},"minimum"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'value, 'id> => option<'value>\n")),(0,m.kt)("p",null,"Returns minimum value of the collection. ",(0,m.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.make(~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.minimum /* None */\ns1->Belt.MutableSet.minimum /* Some(1) */\n")),(0,m.kt)("h2",{id:"minundefined"},"minUndefined"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'value, 'id> => Js.undefined<'value>\n")),(0,m.kt)("p",null,"Returns minimum value of the collection. ",(0,m.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.make(~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.minUndefined /* undefined */\ns1->Belt.MutableSet.minUndefined /* 1 */\n")),(0,m.kt)("h2",{id:"maximum"},"maximum"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'value, 'id> => option<'value>\n")),(0,m.kt)("p",null,"Returns maximum value of the collection. ",(0,m.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.make(~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.maximum /* None */\ns1->Belt.MutableSet.maximum /* Some(5) */\n")),(0,m.kt)("h2",{id:"maxundefined"},"maxUndefined"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'value, 'id> => Js.undefined<'value>\n")),(0,m.kt)("p",null,"Returns maximum value of the collection. ",(0,m.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.make(~id=module(IntCmp))\nlet s1 = Belt.MutableSet.fromArray([3, 2, 1, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.maxUndefined /* undefined */\ns1->Belt.MutableSet.maxUndefined /* 5 */\n")),(0,m.kt)("h2",{id:"get"},"get"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'value, 'id>, 'value) => option<'value>\n")),(0,m.kt)("p",null,"Returns the reference of the value which is equivalent to value using the comparator specifiecd by this collection. Returns ",(0,m.kt)("inlineCode",{parentName:"p"},"None")," if element does not exist."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 3, 4, 5], ~id=module(IntCmp))\n\ns0->Belt.MutableSet.get(3) /* Some(3) */\ns0->Belt.MutableSet.get(20) /* None */\n")),(0,m.kt)("h2",{id:"getundefined"},"getUndefined"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'value, 'id>, 'value) => Js.undefined<'value>\n")),(0,m.kt)("p",null,"Same as ",(0,m.kt)("a",(0,l.Z)({parentName:"p"},{href:"#get"}),"get")," but returns ",(0,m.kt)("inlineCode",{parentName:"p"},"undefined")," when element does not exist."),(0,m.kt)("h2",{id:"getexn"},"getExn"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'value, 'id>, 'value) => 'value\n")),(0,m.kt)("p",null,"Same as ",(0,m.kt)("a",(0,l.Z)({parentName:"p"},{href:"#get"}),"get")," but raise when element does not exist."),(0,m.kt)("h2",{id:"split"},"split"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (t<'value, 'id>, 'value) => ((t<'value, 'id>, t<'value, 'id>), bool)\n")),(0,m.kt)("p",null,"Returns a tuple ",(0,m.kt)("inlineCode",{parentName:"p"},"((smaller, larger), present)"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"present")," is true when element exist in set."),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.MutableSet.fromArray([1, 2, 3, 4, 5], ~id=module(IntCmp))\n\nlet ((smaller, larger), present) = s0->Belt.MutableSet.split(3)\n\npresent /* true */\nsmaller->Belt.MutableSet.toArray /* [1,2] */\nlarger->Belt.MutableSet.toArray /* [4,5] */\n")),(0,m.kt)("h2",{id:"checkinvariantinternal"},"checkInvariantInternal"),(0,m.kt)("pre",null,(0,m.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a, 'b> => unit\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"raise")," when invariant is not held"))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/mutable-set.mdx"}},44813:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/mutable-set",function(){return a(15487)}])}},function(e){e.O(0,[49774],(function(){return t=44813,e(e.s=t);var t}));var t=e.O();_N_E=t}]);