(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67313],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},17375:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"===typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),N=m(n),u=l,g=N["".concat(p,".").concat(u)]||N[u]||k[u]||r;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"===typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"===typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},96086:function(t){"use strict";var e=Object.assign.bind(Object);t.exports=e,t.exports.default=t.exports},54266:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var a=n(22122),l=n(17375),r=n(67294),i=n(3905),d=(r.createElement,{});function p(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"comparison-to-js"},"Comparison to JS"),(0,i.kt)("h3",{id:"semicolon"},"Semicolon"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Rules enforced by linter/formatter"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"No semicolon needed!")))),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"/* Comment */")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"// Line comment")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")))),(0,i.kt)("h3",{id:"variable"},"Variable"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"const x = 5;")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let x = 5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"var x = y;")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"No equivalent (thankfully)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let x = 5; x = x + 1;")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let x = ref(5); x := x.contents + 1"))))),(0,i.kt)("h3",{id:"string--character"},"String & Character"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello world!"')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'Hello world!'")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Strings must use ",(0,i.kt)("inlineCode",{parentName:"td"},'"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"hello " + "world"')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"hello " ++ "world"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"`hello ${message}`")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")))),(0,i.kt)("h3",{id:"boolean"},"Boolean"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"!true")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("code",null,"|","|"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"&&"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"td"},">="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"a === b"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"a !== b")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"No deep equality (recursive compare)"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"a == b"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"a != b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"a == b")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"No equality with implicit casting (thankfully)")))),(0,i.kt)("h3",{id:"number"},"Number"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"3")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"3.1415")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"3 + 4")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"3.0 + 4.5")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"3.0 +. 4.5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"5 % 3")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"mod(5, 3)"))))),(0,i.kt)("p",null,"*"," JS has no distinction between integer and float."),(0,i.kt)("h3",{id:"objectrecord"},"Object/Record"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"no types"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"type point = {x: int, mutable y: int}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"{x: 30, y: 20}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"point.x")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"point.y = 30;")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"{...point, x: 30}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")))),(0,i.kt)("h3",{id:"array"},"Array"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"myArray[1] = 10")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'[1, "Bob", true]')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'(1, "Bob", true)')," ","*")))),(0,i.kt)("p",null,"*"," Heterogenous arrays in JS are disallowed for us. Use tuple instead."),(0,i.kt)("h3",{id:"null"},"Null"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"None")," ","*")))),(0,i.kt)("p",null,"*"," Again, only a spiritual equivalent; we don't have nulls, nor null bugs! But we do have an ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type for when you actually need nullability."),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"arg => retVal")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function named(arg) {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let named = (arg) => {...}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"const f = function(arg) {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let f = (arg) => {...}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"add(4, add(5, 6))")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")))),(0,i.kt)("h3",{id:"blocks"},"Blocks"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"JavaScript"),(0,i.kt)("th",null,"ReScript  "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",null,"const myFun = (x, y) => {\n  const doubleX = x + x;\n  const doubleY = y + y;\n  return doubleX + doubleY\n};"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",null,"let myFun = (x, y) => {\n  let doubleX = x + x\n  let doubleY = y + y\n  doubleX + doubleY\n}")))))),(0,i.kt)("h3",{id:"if-else"},"If-else"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"if (a) {b} else {c}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"if a {b} else {c}")," ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"a ? b : c")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"switch")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"switch")," but ",(0,i.kt)("a",(0,a.Z)({parentName:"td"},{href:"pattern-matching-destructuring.md"}),"super-powered pattern matching!"))))),(0,i.kt)("p",null,"*"," Our conditionals are always expressions! You can write ",(0,i.kt)("inlineCode",{parentName:"p"},'let result = if a {"hello"} else {"bye"}')),(0,i.kt)("h3",{id:"destructuring"},"Destructuring"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"const {a, b} = data")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let {a, b} = data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"const [a, b] = data")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("code",null,"let ","[a, b]"," = data")," ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"const {a: aa, b: bb} = data")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"let {a: aa, b: bb} = data"))))),(0,i.kt)("p",null,"*"," Gives good compiler warning that ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," might not be of length 2."),(0,i.kt)("h3",{id:"loop"},"Loop"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"for (let i = 0; i <= 10; i++) {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"for i in 0 to 10 {...}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"for (let i = 10; i >= 0; i--) {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"for i in 10 downto 0 {...}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"while (true) {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"while true {...}"))))),(0,i.kt)("h3",{id:"jsx"},"JSX"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'<Comp message="hi" onClick={handler} />')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Same")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"<Comp message={message} />")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"<Comp message />")," ","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"<input checked />")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"<input checked=true />"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"No children spread"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"<Comp>...children</Comp>"))))),(0,i.kt)("p",null,"*"," Argument punning!"),(0,i.kt)("h3",{id:"exception"},"Exception"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"ReScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"throw new SomeError(...)")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"raise(SomeError(...))"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"try {a} catch (Err) {...} finally {...}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("code",null,"try a catch { ","|"," Err => ...}")," ","*")))),(0,i.kt)("p",null,"*"," No finally."),(0,i.kt)("h3",{id:"blocks-1"},"Blocks"),(0,i.kt)("p",null,"The last expression of a block delimited by ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," implicitly returns (including function body). In JavaScript, this can only be simulated via an immediately-invoked function expression (since function bodies have their own local scope)."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"JavaScript"),(0,i.kt)("th",null,"ReScript"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",null,"let result = (function() {\n  const x = 23;\n  const y = 34;\n  return x + y;\n})();"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",null,"let result = {\n  let x = 23\n  let y = 34\n  x + y\n}")))))),(0,i.kt)("h2",{id:"common-features-js-output"},"Common Features' JS Output"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"Feature"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"Example"),(0,i.kt)("th",(0,a.Z)({parentName:"tr"},{align:null}),"JavaScript Output"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"String"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello"')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"String Interpolation"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"`Hello ${message}`")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello " + message'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Character (disrecommended)"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'x'")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"120")," (char code)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Integer"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-23")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-23"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Float"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23.0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-23.0")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23.0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-23.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Integer Addition"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23 + 1")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23 + 1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Float Addition"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23.0 +. 1.0")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"23.0 + 1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Integer Division/Multiplication"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2 / 23 * 1")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2 / 23 * 1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Float Division/Multiplication"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2.0 /. 23.0 *. 1.0")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2.0 / 23.0 * 1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Float Exponentiation"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2.0 ** 3.0")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Math.pow(2.0, 3.0)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"String Concatenation"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello " ++ "World"')),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},'"Hello " + "World"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Comparison"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},">"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<=")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},">"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Boolean operation"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"&&"),", ",(0,i.kt)("code",null,"|","|")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"&&"),", ",(0,i.kt)("code",null,"|","|"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Shallow and deep Equality"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"==="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"==")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"==="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"=="))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"List (disrecommended)"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"list{1, 2, 3}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"{hd: 1, tl: {hd: 2, tl: {hd: 3, tl: 0}}}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"List Prepend"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"list{a1, a2, ...oldList}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"{hd: a1, tl: {hd: a2, tl: theRest}}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Array"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Record"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"type t = {b: int}; let a = {b: 10}")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"var a = {b: 10}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Multiline Comment"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"/* Comment here */")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Not in output")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Single line Comment"),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"// Comment here")),(0,i.kt)("td",(0,a.Z)({parentName:"tr"},{align:null}),"Not in output")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that this is a cleaned-up comparison table; a few examples' JavaScript output are slightly different in reality.")))}p.isMDXComponent=!0,p.frontmatter={title:"Overview",metaTitle:"Language Features Overview",description:"A quick overview on ReScript's syntax",canonical:"/docs/manual/latest/overview",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/overview.mdx"}},66764:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/overview",function(){return n(54266)}])}},function(t){t.O(0,[49774],(function(){return e=66764,t(t.s=e);var e}));var e=t.O();_N_E=e}]);