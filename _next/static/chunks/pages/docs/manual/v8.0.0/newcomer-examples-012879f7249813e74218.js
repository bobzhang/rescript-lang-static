(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79946],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"===typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},51847:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a,r=t(22122),l=t(17375),o=t(67294),s=t(3905),p=(o.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),i={};function u(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"newcomer-examples"},"Newcomer Examples"),(0,s.kt)("p",null,"An example is worth a thousand words."),(0,s.kt)("p",null,"This section is dedicated to newcomers trying to figure out general idioms & conventions. If you're a beginner who's got a good idea for an example, please suggest an edit!"),(0,s.kt)("h2",{id:"use-the-option-type"},"Use the ",(0,s.kt)("a",(0,r.Z)({parentName:"h2"},{href:"null-undefined-option.md"}),(0,s.kt)("inlineCode",{parentName:"a"},"option")," type")),(0,s.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'let possiblyNullValue1 = None;\nlet possiblyNullValue2 = Some("Hello");\n\nswitch (possiblyNullValue2) {\n| None => Js.log("Nothing to see here.")\n| Some(message) => Js.log(message)\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'let possiblyNullValue1 = None\nlet possiblyNullValue2 = Some "Hello"\n\nlet () = match possiblyNullValue2 with\n| None -> Js.log "Nothing to see here."\n| Some(message) -> Js.log message\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var possiblyNullValue1;\nvar possiblyNullValue2 = "Hello";\n\nif (possiblyNullValue2 !== undefined) {\n  console.log(possiblyNullValue2);\n} else {\n  console.log("Nothing to see here.");\n}\n\n'))),(0,s.kt)("h2",{id:"create-a-parametrized-type"},"Create a Parametrized Type"),(0,s.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type universityStudent = {gpa: float};\n\ntype response('studentType) = {\n  status: int,\n  student: 'studentType,\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type universityStudent = {gpa: float}\n\ntype 'studentType response = {\n  status: int;\n  student: 'studentType;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,s.kt)("h2",{id:"creating-a-js-object"},"Creating a JS Object"),(0,s.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'let student1 = {\n  "name": "John",\n  "age": 30,\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'let student1 = [%bs.obj {\n  name = "John";\n  age = 30\n}]\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var student1 = {\n  name: "John",\n  age: 30,\n};\n'))),(0,s.kt)("p",null,"Or using ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"record.md"}),"record"),":"),(0,s.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'type payload = {\n  name: string,\n  age: int,\n};\n\nlet student1 = {\n  name: "John",\n  age: 30,\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'type payload = {\n  name: string;\n  age: int;\n}\n\nlet student1 = {\n  name = "John";\n  age = 30;\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var student1 = {\n  name: "John",\n  age: 30,\n};\n'))),(0,s.kt)("h2",{id:"modeling-a-js-module-with-default-export"},"Modeling a JS Module with Default Export"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"import-from-export-to-js.md#import-a-javascript-module-itself-es6-module-format"}),"here"),"."),(0,s.kt)("h2",{id:"checking-for-js-nullable-types-using-the-option-type"},"Checking for JS nullable types using the ",(0,s.kt)("inlineCode",{parentName:"h2"},"option")," type"),(0,s.kt)("p",null,"For a function whose argument is passed a JavaScript value that's potentially ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),", it's idiomatic to convert it to an ",(0,s.kt)("inlineCode",{parentName:"p"},"option"),". The conversion is done through the helper functions in ReScript's ",(0,s.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/nullable#t"}),(0,s.kt)("inlineCode",{parentName:"a"},"Js.Nullable"))," module. In this case, ",(0,s.kt)("inlineCode",{parentName:"p"},"toOption"),":"),(0,s.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'let greetByName = (possiblyNullName) => {\n  let optionName = Js.Nullable.toOption(possiblyNullName);\n  switch (optionName) {\n  | None => "Hi"\n  | Some(name) => "Hello " ++ name\n  }\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'let greetByName possiblyNullName =\n  let optionName = Js.Nullable.toOption possiblyNullName in\n  match optionName with\n  | None -> "Hi"\n  | Some name -> "Hello " ^ name\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'function greetByName(possiblyNullName) {\n  if (possiblyNullName == null) {\n    return "Hi";\n  } else {\n    return "Hello " + possiblyNullName;\n  }\n}\n'))),(0,s.kt)("p",null,"This check compiles to ",(0,s.kt)("inlineCode",{parentName:"p"},"possiblyNullName == null")," in JS, so checks for the presence of ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"."))}u.isMDXComponent=!0,u.frontmatter={title:"Newcomer Examples",description:"Quick examples for users new to ReScript",canonical:"/docs/manual/latest/newcomer-examples",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/newcomer-examples.mdx"}},6790:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/newcomer-examples",function(){return t(51847)}])}},function(e){e.O(0,[49774],(function(){return n=6790,e(e.s=n);var n}));var n=e.O();_N_E=n}]);