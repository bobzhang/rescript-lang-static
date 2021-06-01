(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97044],{22122:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,{Z:function(){return n}})},17375:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,{Z:function(){return n}})},3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return u},kt:function(){return c}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"===typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(t),c=r,h=g["".concat(i,".").concat(c)]||g[c]||m[c]||l;return t?n.createElement(h,p(p({ref:a},u),{},{components:t})):n.createElement(h,p({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"===typeof e||r){var l=t.length,p=new Array(l);p[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"===typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96086:function(e){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},21516:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var n,r=t(22122),l=t(17375),p=t(67294),s=t(3905),i=(p.createElement,n="Intro",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),o={};function u(e){var a=e.components,t=(0,l.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hashmapstring"},"HashMapString"),(0,s.kt)(i,{mdxType:"Intro"},(0,s.kt)("p",null,"Specalized when key type is ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", more efficient than the generic type")),(0,s.kt)("h2",{id:"key"},"key"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = string\n")),(0,s.kt)("p",null,"Type of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Belt.HashMap.String")," key."),(0,s.kt)("h2",{id:"t"},"t"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'b>\n")),(0,s.kt)("p",null,"Type of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Belt.HashMap.String"),"."),(0,s.kt)("h2",{id:"make"},"make"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~hintSize: int) => t<'b>\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"make(~hintSize=10)")," creates a new hash map by taking the ",(0,s.kt)("inlineCode",{parentName:"p"},"hintSize"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\n\nBelt.HashMap.String.set(hMap, "key1", "a")\n')),(0,s.kt)("h2",{id:"clear"},"clear"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'b> => unit\n")),(0,s.kt)("p",null,"Clears a hash table."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "1")])\nBelt.HashMap.String.clear(hMap)\nBelt.HashMap.String.isEmpty(hMap) == true\n')),(0,s.kt)("h2",{id:"isempty"},"isEmpty"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a> => bool\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"isEmpty(m)")," checks whether a hash map is empty."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "1")])\nBelt.HashMap.String.isEmpty(hMap) == false\n')),(0,s.kt)("h2",{id:"set"},"set"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a>, key, 'a) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"set(tbl, k, v)")," if ",(0,s.kt)("inlineCode",{parentName:"p"},"k")," does not exist, add the binding ",(0,s.kt)("inlineCode",{parentName:"p"},"k,v"),", otherwise, update the old value with the new ",(0,s.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("2", "2")])\n\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.valuesToArray(hMap) == ["1", "2"]\n')),(0,s.kt)("h2",{id:"copy"},"copy"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t<'a> => t<'a>\n")),(0,s.kt)("p",null,"Creates copy of a hash map."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap1 = Belt.HashMap.String.fromArray([("1", "1"), ("2", "2")])\nlet hMap2 = Belt.HashMap.String.copy(hMap1)\n\nBelt.HashMap.String.set(hMap2, "2", "3")\n\nBelt.HashMap.String.get(hMap1, "2") != Belt.HashMap.String.get(hMap2, "2")\n')),(0,s.kt)("h2",{id:"get"},"get"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'a>, key) => option<'a>\n")),(0,s.kt)("p",null,"Returns value bound under specific key. If values not exist returns ",(0,s.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\n\nBelt.HashMap.String.get(hMap, "1") == Some("value1")\nBelt.HashMap.String.get(hMap, "2") == None\n')),(0,s.kt)("h2",{id:"has"},"has"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'b>, key) => bool\n")),(0,s.kt)("p",null,"Checks if ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is bound in ",(0,s.kt)("inlineCode",{parentName:"p"},"tbl"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\n\nBelt.HashMap.String.has(hMap, "1") == true\nBelt.HashMap.String.has(hMap, "2") == false\n')),(0,s.kt)("h2",{id:"remove"},"remove"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'a>, key) => unit\n")),(0,s.kt)("p",null,"If bound exists, removes it from the hash map."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.remove(hMap, "1")\nBelt.HashMap.String.has(hMap, "1") == false\n')),(0,s.kt)("h2",{id:"foreachu"},"forEachU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'b>, (. key, 'b) => unit) => unit\n")),(0,s.kt)("p",null,"Same as ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,s.kt)("h2",{id:"foreach"},"forEach"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'b>, (key, 'b) => unit) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"forEach(tbl, f)")," applies ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in table ",(0,s.kt)("inlineCode",{parentName:"p"},"tbl"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. Each binding is presented exactly once to ",(0,s.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.forEach(hMap, (key, value) => Js.log2(key, value))\n// prints ("1", "value1")\n')),(0,s.kt)("h2",{id:"reduceu"},"reduceU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'b>, 'c, (. 'c, key, 'b) => 'c) => 'c\n")),(0,s.kt)("p",null,"Same as ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"##reduce"}),"reduce")," but takes uncurried functon."),(0,s.kt)("h2",{id:"reduce"},"reduce"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'b>, 'c, ('c, key, 'b) => 'c) => 'c\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"reduce(tbl, init, f)")," computes ",(0,s.kt)("inlineCode",{parentName:"p"},"(f(kN, dN) ... (f(k1, d1, init))...)"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"k1 ... kN")," are the keys of all bindings in ",(0,s.kt)("inlineCode",{parentName:"p"},"tbl"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated values. Each binding is presented exactly once to ",(0,s.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,s.kt)("p",null,"The order in which the bindings are passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," is unspecified. However, if the table contains several bindings for the same key, they are passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," in reverse order of introduction, that is, the most recent binding is passed first."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.reduce(hMap, "", (acc, key, value) =>\n  acc ++ (", " ++ value)\n) == "value1, value2"\n')),(0,s.kt)("h2",{id:"keepmapinplaceu"},"keepMapInPlaceU"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepMapInPlaceU: (t<'a>, (. key, 'a) => option<'a>) => unit\n")),(0,s.kt)("p",null,"Same as ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"##keepMapInPlace"}),"keepMapInPlace")," but takes uncurried functon."),(0,s.kt)("h2",{id:"keepmapinplace"},"keepMapInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepMapInPlace: (t<'a>, (key, 'a) => option<'a>) => unit\n")),(0,s.kt)("p",null,"Filters out values for which function ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," returned ",(0,s.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.keepMapInPlace(hMap, (key, value) => key == "1" ? None : Some(value))\n')),(0,s.kt)("h2",{id:"size"},"size"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'a> => int\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"size(tbl)")," returns the number of bindings in ",(0,s.kt)("inlineCode",{parentName:"p"},"tbl"),". It takes constant time."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.size(hMap) == 2\n')),(0,s.kt)("h2",{id:"toarray"},"toArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'a> => array<(key, 'a)>\n")),(0,s.kt)("p",null,"Returns array of key value pairs."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.toArray(hMap) == [("1", "value1"), ("2", "value2")]\n')),(0,s.kt)("h2",{id:"keystoarray"},"keysToArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'a> => array<key>\n")),(0,s.kt)("p",null,"Returns array of keys."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.keysToArray(hMap) == ["1", "2"]\n')),(0,s.kt)("h2",{id:"valuestoarray"},"valuesToArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'a> => array<'a>\n")),(0,s.kt)("p",null,"Returns array of values."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.valuesToArray(hMap) == ["value1", "value2"]\n')),(0,s.kt)("h2",{id:"fromarray"},"fromArray"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'a)> => t<'a>\n")),(0,s.kt)("p",null,"Creates new hash map from array of pairs."),(0,s.kt)("p",null,"Returns array of values."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "value1"), ("2", "value2")])\nBelt.HashMap.String.toArray(hMap) == [("1", "value1"), ("2", "value2")]\n')),(0,s.kt)("h2",{id:"mergemany"},"mergeMany"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'a>, array<(key, 'a)>) => unit\n")),(0,s.kt)("p",null,"Merges many key value pairs into hash map."),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.mergeMany(hMap, [("1", "value1"), ("2", "value2")])\n')),(0,s.kt)("h2",{id:"getbuckethistogram"},"getBucketHistogram"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getBucketHistogram: t<'a> => array<int>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.getBucketHistogram(hMap)\n')),(0,s.kt)("h2",{id:"logstats"},"logStats"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let logStats: t<'a> => unit\n")),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.logStats(hMap)\n')))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/belt/hash-map-string.mdx"}},65981:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/belt/hash-map-string",function(){return t(21516)}])}},function(e){e.O(0,[49774],(function(){return a=65981,e(e.s=a);var a}));var a=e.O();_N_E=a}]);