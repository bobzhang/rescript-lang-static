(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37580],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},97219:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r,a=n(22122),o=n(17375),i=n(67294),l=n(3905),p=(i.createElement,r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),c={};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bind-to-js-object"},"Bind to JS Object"),(0,l.kt)("p",null,"JavaScript objects are a combination of several use-cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'As a "record" or "struct" in other languages (like ReScript and C).'),(0,l.kt)("li",{parentName:"ul"},"As a hash map."),(0,l.kt)("li",{parentName:"ul"},"As a class."),(0,l.kt)("li",{parentName:"ul"},"As a module to import/export.")),(0,l.kt)("p",null,"ReScript cleanly separates the binding methods for JS object based on these 4 use-cases. This page documents the first three. Binding to JS module objects is described in the ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"import-from-export-to-js.md"}),"Import from/Export to JS")," section."),(0,l.kt)("h2",{id:"bind-to-record-like-js-objects"},"Bind to Record-like JS Objects"),(0,l.kt)("h3",{id:"bind-using-rescript-record"},"Bind Using ReScript Record"),(0,l.kt)("p",null,"If your JavaScript object has fixed fields, then it's conceptually like a ReScript record. Since a ReScript record compiles to a clean JavaScript object, you can definitely type a JS object as a ReScript record!"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type person = {\n  name: string,\n  friends: array<string>,\n  age: int,\n}\n\n@module("MySchool") external john: person = "john"\n\nlet johnName = john.name\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var MySchool = require("MySchool");\n\nvar johnName = MySchool.john.name;\n'))),(0,l.kt)("p",null,"External is documented ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"external.md"}),"here"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"@module")," is documented ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"import-from-export-to-js.md"}),"here"),"."),(0,l.kt)("h3",{id:"bind-using-rescript-object"},"Bind Using ReScript Object"),(0,l.kt)("p",null,"Alternatively, you can use ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"object.md"}),"ReScript object")," to model a JS object too:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type person = {\n  "name": string,\n  "friends": array<string>,\n  "age": int,\n}\n\n@module("MySchool") external john: person = "john"\n\nlet johnName = john["name"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var MySchool = require("MySchool");\n\nvar johnName = MySchool.john.name;\n'))),(0,l.kt)("h3",{id:"bind-using-special-getter-and-setter-attributes"},"Bind Using Special Getter and Setter Attributes"),(0,l.kt)("p",null,"Alternatively, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," to bind to individual fields of a JS object:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type textarea\n@set external setName: (textarea, string) => unit = "name"\n@get external getName: textarea => string = "name"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),""))),(0,l.kt)("p",null,"You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"get_index")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"set_index")," to access a dynamic property or an index:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new external create: int => t = "Int32Array"\n@get_index external get: (t, int) => int = ""\n@set_index external set: (t, int, int) => unit = ""\n\nlet i32arr = create(3)\ni32arr->set(0, 42)\nJs.log(i32arr->get(0))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"var i32arr = new Int32Array(3);\ni32arr[0] = 42;\nconsole.log(i32arr[0]);\n"))),(0,l.kt)("h2",{id:"bind-to-hash-map-like-js-object"},"Bind to Hash Map-like JS Object"),(0,l.kt)("p",null,"If your JavaScript object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"might or might not add/remove keys"),(0,l.kt)("li",{parentName:"ul"},"contains only values that are of the same type")),(0,l.kt)("p",null,"Then it's not really an object, it's a hash map. Use ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"api/js/dict"}),"Js.Dict"),", which contains operations like ",(0,l.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"set"),", etc. and cleanly compiles to a JavaScript object still."),(0,l.kt)("h2",{id:"bind-to-a-js-object-thats-a-class"},"Bind to a JS Object That's a Class"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"new")," to emulate e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"new Date()"),":"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new external createDate: unit => t = "Date"\n\nlet date = createDate()\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"var date = new Date();\n"))),(0,l.kt)("p",null,"You can chain ",(0,l.kt)("inlineCode",{parentName:"p"},"new")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," if the JS module you're importing is itself a class:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type t\n@new @module external book: unit => t = "Book"\nlet myBook = book()\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var Book = require("Book");\nvar myBook = new Book();\n'))))}s.isMDXComponent=!0,s.frontmatter={title:"Bind to JS Object",description:"Interop with JS objects in ReScript",canonical:"/docs/manual/latest/bind-to-js-object",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/bind-to-js-object.mdx"}},91301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/bind-to-js-object",function(){return n(97219)}])}},function(e){e.O(0,[49774],(function(){return t=91301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);