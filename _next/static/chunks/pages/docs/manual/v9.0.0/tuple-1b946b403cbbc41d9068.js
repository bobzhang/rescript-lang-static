(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16890],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"===typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},88671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r,a=n(22122),o=n(17375),l=n(67294),p=n(3905),u=(l.createElement,r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),i={};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"tuple"},"Tuple"),(0,p.kt)("p",null,"Tuples are a ReScript-specific data structure that don't exist in JavaScript. They are:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"immutable"),(0,p.kt)("li",{parentName:"ul"},"ordered"),(0,p.kt)("li",{parentName:"ul"},"fix-sized at creation time"),(0,p.kt)("li",{parentName:"ul"},"heterogeneous (can contain different types of values)")),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let ageAndName = (24, "Lil\' ReScript")\nlet my3dCoordinates = (20.0, 30.5, 100.0)\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var ageAndName = [24, "Lil\' ReScript"];\nvar my3dCoordinates = [20.0, 30.5, 100.0];\n'))),(0,p.kt)("p",null,"Tuples' types can be used in type annotations as well. Tuple types visually resemble tuples values."),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'let ageAndName: (int, string) = (24, "Lil\' ReScript")\n// a tuple type alias\ntype coord3d = (float, float, float)\nlet my3dCoordinates: coord3d = (20.0, 30.5, 100.0)\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var ageAndName = [24, "Lil\' ReScript"];\nvar my3dCoordinates = [20.0, 30.5, 100.0];\n'))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note"),": there's no tuple of size 1. You'd just use the value itself."),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("p",null,"To get a specific member of a tuple, destructure it:"),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let (_, y, _) = my3dCoordinates // now you've retrieved y\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"var y = 30.5;\n"))),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"_")," means you're ignoring the indicated members of the tuple."),(0,p.kt)("p",null,"Tuples aren't meant to be updated mutatively. You'd create new ones by destructuring the old ones:"),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let coordinates1 = (10, 20, 30)\nlet (c1x, _, _) = coordinates1\nlet coordinates2 = (c1x + 50, 20, 30)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"var coordinates1 = [10, 20, 30];\nvar c1x = 10;\nvar coordinates2 = [60, 20, 30];\n"))),(0,p.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,p.kt)("p",null,"You'd use tuples in handy situations that pass around multiple values without too much ceremony. For example, to return many values:"),(0,p.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"let getCenterCoordinates = () => {\n  let x = doSomeOperationsHere()\n  let y = doSomeMoreOperationsHere()\n  (x, y)\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"function getCenterCoordinates(param) {\n  var x = doSomeOperationsHere(undefined);\n  var y = doSomeMoreOperationsHere(undefined);\n  return [x, y];\n}\n"))),(0,p.kt)("p",null,"Try to keep the usage of tuple ",(0,p.kt)("strong",{parentName:"p"},"local"),". For data structures that are long-living and passed around often, prefer a ",(0,p.kt)("strong",{parentName:"p"},"record"),", which has named fields."))}s.isMDXComponent=!0,s.frontmatter={title:"Tuple",description:"Tuple types and values in ReScript",canonical:"/docs/manual/latest/tuple",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/tuple.mdx"}},84006:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/tuple",function(){return n(88671)}])}},function(e){e.O(0,[49774],(function(){return t=84006,e(e.s=t);var t}));var t=e.O();_N_E=t}]);