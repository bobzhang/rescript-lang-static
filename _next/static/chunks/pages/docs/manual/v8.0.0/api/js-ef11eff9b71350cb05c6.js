(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53167],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"===typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},40599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(22122),r=n(17375),l=n(67294),o=n(3905),p=(l.createElement,{});function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js"},"Js"),(0,o.kt)("p",null,"The Js module mostly contains ReScript bindings to ",(0,o.kt)("em",{parentName:"p"},"standard JavaScript APIs"),"\nlike ",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log"}),"console.log"),",\nor the JavaScript\n",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"}),"String"),",\n",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"}),"Date"),", and\n",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promise"),"\nclasses."),(0,o.kt)("p",null,"It is meant as a zero-abstraction interop layer and directly exposes JavaScript functions as they are. If you can find your API in this module, prefer this over an equivalent Belt helper. For example, prefer ",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"js/array-2"}),"Js.Array2")," over ",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"belt/array"}),"Belt.Array")),(0,o.kt)("h2",{id:"argument-order"},"Argument Order"),(0,o.kt)("p",null,"For historical reasons, some APIs in the Js namespace (e.g. ",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"./js/string"}),"Js.String"),") are\nusing the data-last argument order whereas others (e.g. ",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"./js/date"}),"Js.Date"),") are using data-first."),(0,o.kt)("p",null,"For more information about these argument orders and the trade-offs between them, see\n",(0,o.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://www.javierchavarri.com/data-first-and-data-last-a-comparison/"}),"this blog post"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Eventually, all modules in the Js namespace are going to be migrated to data-first though.")),(0,o.kt)("p",null,"In the meantime, there are several options for dealing with the data-last APIs:"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re",metastring:"example",example:!0}),'/* Js.String (data-last API used with pipe last operator) */\nJs.log("2019-11-10" |> Js.String.split("-"));\nJs.log("ReScript" |> Js.String.startsWith("Re"));\n\n/* Js.String (data-last API used with pipe first operator) */\nJs.log("2019-11-10"->Js.String.split("-", _));\nJs.log("ReScript"->Js.String.startsWith("Re", _));\n\n/* Js.String (data-last API used without any piping) */\nJs.log(Js.String.split("-", "2019-11-10"));\nJs.log(Js.String.startsWith("Re", "ReScript"));\n')),(0,o.kt)("h2",{id:"jsxxx2-modules"},"Js.Xxx2 Modules"),(0,o.kt)("p",null,"Prefer ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Array2")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Array"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.String2")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.String"),", etc. The latters are old modules."),(0,o.kt)("h2",{id:"object"},"Object"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type t(+'a);\n")),(0,o.kt)("p",null,"Js object type."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),'let x: {\n  .\n  "x": int,\n  "y": int,\n} = [%obj {x: 1, y: 2}];\n')),(0,o.kt)("h2",{id:"nullable-and-undefined"},"Nullable and Undefined"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type null(+'a);\n")),(0,o.kt)("p",null,"nullable, value of this type can be either null or 'a this type is the same as type t in Js.Null"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type undefined(+'a);\n")),(0,o.kt)("p",null,"value of this type can be either undefined or 'a this type is the same as type t in Js.Undefined"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type nullable(+'a);\n")),(0,o.kt)("p",null,"value of this type can be undefined, null or 'a this type is the same as type t n Js.Null_undefined"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type null_undefined('a) = Js.nullable('a);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let toOption: Js.nullable('a) => option('a);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let undefinedToOption: Js.undefined('a) => option('a);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let nullToOption: Js.null('a) => option('a);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let test: Js.nullable('a) => bool;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let isNullable: Js.nullable('a) => bool;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let testAny: 'a => bool;\n")),(0,o.kt)("p",null,"The same as ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.test")," except that it is more permissive on the types of input."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"type promise(+'a, +'e);\n")),(0,o.kt)("p",null,"Deprecated. please use ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Promise"),".\nThe promise type, defined here for interoperation across packages."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let null: Js.null('a);\n")),(0,o.kt)("p",null,"The same as empty in ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Null"),". Will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let undefined: Js.undefined('a);\n")),(0,o.kt)("p",null,"The same as empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Undefined"),". Will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("h2",{id:"typeof"},"TypeOf"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let typeof: 'a => string;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"typeof x")," will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof x")," in JS. Please consider functions in ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Types")," for a type safe way of reflection."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let log: 'a => unit;\nlet log2: ('a, 'b) => unit;\nlet log3: ('a, 'b, 'c) => unit;\nlet log4: ('a, 'b, 'c, 'd) => unit;\n")),(0,o.kt)("p",null,"A convenience function to log everything."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let logMany: array('a) => unit;\n")),(0,o.kt)("p",null,"A convenience function to log more than 4 arguments"),(0,o.kt)("h2",{id:"comparison"},"Comparison"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let eqNull: ('a, null('a)) => bool;\nlet eqUndefined: ('a, undefined('a)) => bool;\nlet eqNullable: ('a, nullable('a)) => bool;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let unsafe_lt: ('a, 'a) => bool;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unsafe_lt a b")," will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"a < b"),". It is marked as unsafe, since it is impossible to give a proper semantics for comparision which applies to any type."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let unsafe_le: ('a, 'a) => bool;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unsafe_le a b")," will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"a <= b"),". See also ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.unsafe_lt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let unsafe_gt: ('a, 'a) => bool;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unsafe_gt a b")," will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"a > b"),". See also ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.unsafe_lt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-re"}),"let unsafe_ge: ('a, 'a) => bool;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unsafe_ge a b")," will be compiled as ",(0,o.kt)("inlineCode",{parentName:"p"},"a >= b"),". See also ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.unsafe_lt"),"."))}s.isMDXComponent=!0,s.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/js.mdx"}},17094:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/js",function(){return n(40599)}])}},function(e){e.O(0,[49774],(function(){return t=17094,e(e.s=t);var t}));var t=e.O();_N_E=t}]);