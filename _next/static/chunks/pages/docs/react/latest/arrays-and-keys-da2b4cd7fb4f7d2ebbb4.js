(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27885],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},16048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r,o=n(22122),a=n(17375),i=n(67294),s=n(3905),l=(i.createElement,r="Intro",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),c={};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"arrays-and-keys"},"Arrays and Keys"),(0,s.kt)(l,{mdxType:"Intro"},(0,s.kt)("p",null,"Whenever we are transforming data into an array of elements and put it in our React tree, we need to make sure to give every element an unique identifier to help React distinguish elements for each render. This page will explain the ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," attribute and how to apply it whenever we need to map data to ",(0,s.kt)("inlineCode",{parentName:"p"},"React.element"),"s.")),(0,s.kt)("h2",{id:"keys--rendering-arrays"},"Keys & Rendering Arrays"),(0,s.kt)("p",null,"Keys help React identify which elements have been changed, added, or removed throughout each render. Keys should be given to elements inside the array to give the elements a stable identity:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res"}),"let numbers = [1, 2, 3, 4, 5];\n\nlet items = Belt.Array.map(numbers, (number) => {\n  <li key={Belt.Int.toString(number)}> {React.int(number)} </li>\n})\n")),(0,s.kt)("p",null,"The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res"}),'type todo = {id: string, text: string}\n\nlet todos = [\n  {id: "todo1", text: "Todo 1"},\n  {id: "todo2", text: "Todo 2"}\n]\n\nlet items = Belt.Array.map(todos, todo => {\n  <li key={todo.id}> {React.string(todo.text)} </li>\n})\n')),(0,s.kt)("p",null,"If you don\u2019t have stable IDs for rendered items, you may use the item index as a key as a last resort:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res",metastring:"{1..3}","{1..3}":!0}),"let items = Belt.Array.mapWithIndex(todos, (i, todo) => {\n  // Only do this if items have no stable id\n  <li key={Belt.Int.toString(i)}>\n    {todo.text}\n  </li>\n});\n")),(0,s.kt)("h3",{id:"keys-must-only-be-unique-among-siblings"},"Keys Must Only Be Unique Among Siblings"),(0,s.kt)("p",null,"Keys used within arrays should be unique among their siblings. However they don\u2019t need to be globally unique. We can use the same keys when we produce two different arrays:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res",metastring:"{6,10,17,18,25,27}","{6,10,17,18,25,27}":!0}),'type post = {id: string, title: string, content: string}\n\nmodule Blog = {\n  @react.component\n  let make = (~posts: array<post>) => {\n    let sidebar =\n      <ul>\n        {\n          Belt.Array.map(posts, (post) => {\n            <li key={post.id}>\n              {React.string(post.title)}\n            </li>\n          })->React.array\n        }\n      </ul>\n\n    let content = Belt.Array.map(posts, (post) => {\n        <div key={post.id}>\n          <h3>{React.string(post.title)}</h3>\n          <p>{React.string(post.content)}</p>\n        </div>\n    });\n      \n      <div>\n      {sidebar}\n      <hr />\n      {React.array(content)}\n    </div>\n  }\n}\n\nlet posts = [\n  {id: "1", title: "Hello World", content: "Welcome to learning ReScript & React!"},\n  {id: "2", title: "Installation", content: "You can install reason-react from npm."}\n]\n\nlet blog = <Blog posts/>\n')),(0,s.kt)("h2",{id:"rendering-list-values"},"Rendering ",(0,s.kt)("inlineCode",{parentName:"h2"},"list")," Values"),(0,s.kt)("p",null,"In case you ever want to render a ",(0,s.kt)("inlineCode",{parentName:"p"},"list")," of items, you can do something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res"}),'type todo = {id: string, text: string}\nlet todoList = list{\n  {id: "todo1", text: "Todo 1"},\n  {id: "todo2", text: "Todo 2"}\n}\n\nlet items =\n  todoList\n  ->Belt.List.toArray\n  ->Belt.List.map((todo) => {\n  <li key={todo.id}>\n    {React.string(todo.text)}\n  </li>\n})\n\n<div> {React.array(items)} </div>\n')),(0,s.kt)("p",null,"We use ",(0,s.kt)("inlineCode",{parentName:"p"},"Belt.List.toArray")," to convert our list to an array before creating our ",(0,s.kt)("inlineCode",{parentName:"p"},"array<React.element>"),". Please note that using ",(0,s.kt)("inlineCode",{parentName:"p"},"list")," has performance impact due to extra conversion costs."),(0,s.kt)("p",null,"In 99% you'll want to use arrays (seamless interop, faster JS code), but in some cases it might make sense to use a ",(0,s.kt)("inlineCode",{parentName:"p"},"list")," to leverage advanced pattern matching features etc."))}u.isMDXComponent=!0,u.frontmatter={title:"Arrays and Keys",description:"Rendering arrays and handling keys in ReScript and React",canonical:"/docs/react/latest/arrays-and-keys",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/arrays-and-keys.mdx"}},37949:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/arrays-and-keys",function(){return n(16048)}])}},function(e){e.O(0,[49774],(function(){return t=37949,e(e.s=t);var t}));var t=e.O();_N_E=t}]);