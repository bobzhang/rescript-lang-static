(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23194],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},99265:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r,a=n(22122),o=n(17375),i=n(67294),l=n(3905),c=(i.createElement,r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"embed-raw-javascript"},"Embed Raw JavaScript"),(0,l.kt)("h2",{id:"paste-raw-js-code"},"Paste Raw JS Code"),(0,l.kt)("p",null,"First thing first. If you're ever stuck learning ReScript, remember that you can always just paste raw JavaScript code into our source file:"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'%%raw(`\n// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n`)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n'))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," special ReScript call takes your code string and pastes it as-is into the output. ",(0,l.kt)("strong",{parentName:"p"},"You've now technically written your first ReScript file!")),(0,l.kt)("p",null,"(The back tick syntax is a multiline string, similar to JavaScript's. Except for us, no escaping is needed inside the string. More on string in a later section.)"),(0,l.kt)("p",null,"While ",(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," lets you embed top-level raw JS code, ",(0,l.kt)("inlineCode",{parentName:"p"},"%raw")," lets you embed expression-level JS code:"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let add = %raw(`\n  function(a, b) {\n    console.log("hello from raw JavaScript!");\n    return a + b\n  }\n`)\n\nJs.log(add(1, 2))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var add = function(a, b) {\n  console.log("hello from raw JavaScript!");\n  return a + b\n};\n\nconsole.log(add(1, 2));\n'))),(0,l.kt)("p",null,"The above code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"declared a ReScript variable ",(0,l.kt)("inlineCode",{parentName:"li"},"add"),","),(0,l.kt)("li",{parentName:"ul"},"with the raw JavaScript value of a function declaration,"),(0,l.kt)("li",{parentName:"ul"},"then called that function in ReScript.")),(0,l.kt)("p",null,"If your boss is ever worried that your teammates can't adopt ReScript, just let them keep writing JavaScript inside ReScript files =)."),(0,l.kt)("h2",{id:"debugger"},"Debugger"),(0,l.kt)("p",null,"You can also drop a ",(0,l.kt)("inlineCode",{parentName:"p"},"%debugger")," expression in a body:"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let f = (x, y) => {\n  %debugger\n  x + y\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger;\n  return x + y | 0;\n}\n"))),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger; // JavaScript developer tools will set an breakpoint and stop here\n  x + y;\n}\n")),(0,l.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,l.kt)("p",null,"Embedding raw JS snippets isn't the best way to experience ReScript, though it's also highly useful if you're just starting out. As a matter of fact, the first few ReScript projects were converted through:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pasting raw JS snippets inside a file"),(0,l.kt)("li",{parentName:"ul"},"examining the JS output (identical to the old hand-written JS)"),(0,l.kt)("li",{parentName:"ul"},"gradually extract a few values and functions and making sure the output still looks OK")),(0,l.kt)("p",null,"At the end, we get a fully safe, converted ReScript file whose JS output is clean enough that we can confidently assert that no new bug has been introduced during the conversion process."),(0,l.kt)("p",null,"We have a small guide on this iteration ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"converting-from-js.md"}),"here"),". Feel free to peruse it later."))}s.isMDXComponent=!0,s.frontmatter={title:"Embed Raw JavaScript",description:"Utility syntax to for raw JS usage in ReScript",canonical:"/docs/manual/latest/embed-raw-javascript",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/embed-raw-javascript.mdx"}},60171:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/embed-raw-javascript",function(){return n(99265)}])}},function(e){e.O(0,[49774],(function(){return t=60171,e(e.s=t);var t}));var t=e.O();_N_E=t}]);