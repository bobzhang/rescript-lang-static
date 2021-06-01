(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69459],{22122:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,{Z:function(){return n}})},17375:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,{Z:function(){return n}})},3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return o},kt:function(){return d}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"===typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=u(t),d=l,k=h["".concat(i,".").concat(d)]||h[d]||m[d]||r;return t?n.createElement(k,s(s({ref:a},o),{},{components:t})):n.createElement(k,s({ref:a},o))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"===typeof e||l){var r=t.length,s=new Array(r);s[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"===typeof e?e:l,s[1]=p;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96086:function(e){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},44812:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return o}});var n,l=t(22122),r=t(17375),s=t(67294),p=t(3905),i=(s.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),u={};function o(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"hashmap"},"HashMap"),(0,p.kt)(i,{mdxType:"Intro"},(0,p.kt)("p",null,"The top level provides generic mutable hash map operations.")),(0,p.kt)("h2",{id:"t"},"t"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type t('key, 'value, 'id);\n")),(0,p.kt)("p",null,"The type of hash tables from type ",(0,p.kt)("inlineCode",{parentName:"p"},"'key")," to type ",(0,p.kt)("inlineCode",{parentName:"p"},"'value"),"."),(0,p.kt)("h2",{id:"id"},"id"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type id('a, 'id) = BeltId.hashable('a, 'id);\n")),(0,p.kt)("p",null,"The identity needed for making an empty hash map."),(0,p.kt)("h2",{id:"make"},"make"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let make: (~hintSize: int, ~id: id('key, 'id)) => t('key, 'value, 'id);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"make(~hintSize=10, ~id)")," creates a new map by taking in the comparator and ",(0,p.kt)("inlineCode",{parentName:"p"},"hintSize"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n\nlet hMap = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\n\nBelt.HashMap.set(hMap, 0, "a");\n')),(0,p.kt)("h2",{id:"clear"},"clear"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let clear: t('key, 'value, 'id) => unit;\n")),(0,p.kt)("p",null,"Clears a hash table."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet hMap = Belt.HashMap.fromArray([|(1, "1")|], ~id=(module IntHash))  \nBelt.HashMap.clear(hMap)\nBelt.HashMap.isEmpty(hMap) == true;\n')),(0,p.kt)("h2",{id:"isempty"},"isEmpty"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let isEmpty: t('a, 'b, 'c) => bool;\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"isEmpty(m)")," checks whether a hash map is empty."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nBelt.HashMap.isEmpty(Belt.HashMap.fromArray([|(1, "1")|], ~id=(module IntHash))) == false;\n')),(0,p.kt)("h2",{id:"set"},"set"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let set: (t('key, 'value, 'id), 'key, 'value) => unit;\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"set(hMap, k, v)")," if ",(0,p.kt)("inlineCode",{parentName:"p"},"k")," does not exist, add the binding ",(0,p.kt)("inlineCode",{parentName:"p"},"k,v"),", otherwise, update the old value with the new ",(0,p.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.fromArray([|(2, "2"), (1, "1"), (3, "3")|], ~id=(module IntHash));\n\nBelt.HashMap.set(s0, 2, "3");\n\nBelt.HashMap.valuesToArray(s0) == [|"1", "3", "3"|];\n')),(0,p.kt)("h2",{id:"copy"},"copy"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let copy: t('key, 'value, 'id) => t('key, 'value, 'id);\n")),(0,p.kt)("p",null,"Creates copy of a hash map."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.fromArray([|(2, "2"), (1, "1"), (3, "3")|], ~id=(module IntHash));\nlet s1 = Belt.HashMap.copy(s0)\n\nBelt.HashMap.set(s0, 2, "3");\n\nBelt.HashMap.get(s0, 2) != Belt.HashMap.get(s1, 2)\n')),(0,p.kt)("h2",{id:"get"},"get"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let get: (t('key, 'value, 'id), 'key) => option('value);\n")),(0,p.kt)("p",null,"Returns value bound under specific key. If values not exist returns ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\n\nBelt.HashMap.get(s0, 1) == Some("value1");\nBelt.HashMap.get(s0, 2) == None;\n')),(0,p.kt)("h2",{id:"has"},"has"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let has: (t('key, 'value, 'id), 'key) => bool;\n")),(0,p.kt)("p",null,"Checks if ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," is bound in ",(0,p.kt)("inlineCode",{parentName:"p"},"tbl"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\n\nBelt.HashMap.has(s0, 1) == true;\nBelt.HashMap.has(s0, 2) == false;\n')),(0,p.kt)("h2",{id:"remove"},"remove"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let remove: (t('key, 'value, 'id), 'key) => unit;\n")),(0,p.kt)("p",null,"If bound exists, removes it from the hash map."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.remove(s0, 1);\nBelt.HashMap.has(s0, 1) == false;\n')),(0,p.kt)("h2",{id:"foreachu"},"forEachU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let forEachU: (t('key, 'value, 'id), [@bs] (('key, 'value) => unit)) => unit;\n")),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",(0,l.Z)({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,p.kt)("h2",{id:"foreach"},"forEach"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let forEach: (t('key, 'value, 'id), ('key, 'value) => unit) => unit;\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"forEach(tbl, f)")," applies ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in table ",(0,p.kt)("inlineCode",{parentName:"p"},"tbl"),". ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. Each binding is presented exactly once to ",(0,p.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.forEach(s0, (key, value) => Js.log2(key, value));\n// prints (1, "value1")\n')),(0,p.kt)("h2",{id:"reduceu"},"reduceU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reduceU: (t('key, 'value, 'id), 'c, [@bs] (('c, 'key, 'value) => 'c)) => 'c;\n")),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",(0,l.Z)({parentName:"p"},{href:"##reduce"}),"reduce")," but takes uncurried functon."),(0,p.kt)("h2",{id:"reduce"},"reduce"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let reduce: (t('key, 'value, 'id), 'c, ('c, 'key, 'value) => 'c) => 'c;\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"reduce(tbl, init, f)")," computes ",(0,p.kt)("inlineCode",{parentName:"p"},"(f(kN, dN) ... (f(k1, d1, init))...)"),", where ",(0,p.kt)("inlineCode",{parentName:"p"},"k1 ... kN")," are the keys of all bindings in ",(0,p.kt)("inlineCode",{parentName:"p"},"tbl"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated values. Each binding is presented exactly once to ",(0,p.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,p.kt)("p",null,"The order in which the bindings are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," is unspecified. However, if the table contains several bindings for the same key, they are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," in reverse order of introduction, that is, the most recent binding is passed first."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.reduce(s0, "", (acc, key, value) => {\n  acc ++ ", " ++ value\n}) == "value1, value2";\n')),(0,p.kt)("h2",{id:"keepmapinplaceu"},"keepMapInPlaceU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let keepMapInPlaceU: (t('key, 'value, 'id), [@bs] (('key, 'value) => option('value))) => unit;\n")),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",(0,l.Z)({parentName:"p"},{href:"##keepMapInPlace"}),"keepMapInPlace")," but takes uncurried functon."),(0,p.kt)("h2",{id:"keepmapinplace"},"keepMapInPlace"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let keepMapInPlace: (t('key, 'value, 'id), ('key, 'value) => option('value)) => unit;\n")),(0,p.kt)("p",null,"Filters out values for which function ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," returned ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.keepMapInPlace(s0, (key, value) => {\n  key == 1 ? None : Some(value)\n});\n')),(0,p.kt)("h2",{id:"size"},"size"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let size: t('a, 'b, 'c) => int;\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"size(tbl)")," returns the number of bindings in ",(0,p.kt)("inlineCode",{parentName:"p"},"tbl"),". It takes constant time."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.size(s0) == 2;\n')),(0,p.kt)("h2",{id:"toarray"},"toArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let toArray: t('key, 'value, 'id) => array(('key, 'value));\n")),(0,p.kt)("p",null,"Returns array of key value pairs."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.toArray(s0) == [|(1, "value1"), (2, "value2")|];\n')),(0,p.kt)("h2",{id:"keystoarray"},"keysToArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let keysToArray: t('key, 'a, 'b) => array('key);\n")),(0,p.kt)("p",null,"Returns array of keys."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.keysToArray(s0) == [|1, 2|];\n')),(0,p.kt)("h2",{id:"valuestoarray"},"valuesToArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let valuesToArray: t('a, 'value, 'b) => array('value);\n")),(0,p.kt)("p",null,"Returns array of values."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(s0, 1, "value1");\nBelt.HashMap.set(s0, 2, "value2");\n\nBelt.HashMap.valuesToArray(s0) == [|"value1", "value2"|];\n')),(0,p.kt)("h2",{id:"fromarray"},"fromArray"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fromArray: (array(('key, 'value)), ~id: id('key, 'id)) => t('key, 'value, 'id);\n")),(0,p.kt)("p",null,"Creates new hash map from array of pairs."),(0,p.kt)("p",null,"Returns array of values."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet s0 = Belt.HashMap.fromArray([|(1, "value1"), (2, "value2")|], ~id=(module IntHash));\nBelt.HashMap.toArray(s0) == [|(1, "value1"), (2, "value2")|];\n')),(0,p.kt)("h2",{id:"mergemany"},"mergeMany"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let mergeMany: (t('key, 'value, 'id), array(('key, 'value))) => unit;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\n  \nlet hMap = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.mergeMany(hMap, [|(1, "1"), (2, "2")|])\n')),(0,p.kt)("h2",{id:"getbuckethistogram"},"getBucketHistogram"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getBucketHistogram: t('a, 'b, 'c) => array(int);\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\nlet hMap = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(hMap, 1, "1");\n\nBelt.HashMap.getBucketHistogram(hMap);\n')),(0,p.kt)("h2",{id:"logstats"},"logStats"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let logStats: t('a, 'b, 'c) => unit;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'module IntHash =\n  Belt.Id.MakeHashable({\n    type t = int;\n    let hash = a => a;\n    let eq = (a, b) => a == b;\n  });\nlet hMap = Belt.HashMap.make(~hintSize=10, ~id=(module IntHash));\nBelt.HashMap.set(hMap, 1, "1");\n\nBelt.HashMap.logStats(hMap);\n')))}o.isMDXComponent=!0,o.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/belt/hash-map.mdx"}},56208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/belt/hash-map",function(){return t(44812)}])}},function(e){e.O(0,[49774],(function(){return a=56208,e(e.s=a);var a}));var a=e.O();_N_E=a}]);