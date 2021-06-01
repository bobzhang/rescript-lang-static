(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26805],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(n),y=r,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"===typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},45437:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a,r=n(22122),l=n(17375),o=n(67294),p=n(3905),s=(o.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),i={};function u(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"type"},"Type"),(0,p.kt)("p",null,"Types are the highlight of ReScript! They are:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Strong"),". A type can't change into another type. In JavaScript, your variable's type might change when the code runs (aka at runtime). E.g. a ",(0,p.kt)("inlineCode",{parentName:"li"},"number")," variable might change into a ",(0,p.kt)("inlineCode",{parentName:"li"},"string")," sometimes. This is an anti-feature; it makes the code much harder to understand when reading or debugging."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Static"),". ReScript types are erased after compilation and don't exist at runtime. Never worry about your types dragging down performance. You don't need type info during runtime; we report all the information (especially all the type errors) during compile time. Catch the bugs earlier!"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Sound"),". This is our biggest differentiator versus many other typed languages that compile to JavaScript. Our type system is guaranteed to ",(0,p.kt)("strong",{parentName:"li"},"never")," be wrong. Most type systems make a guess at the type of a value and show you a type in your editor that's sometime incorrect. We don't do that. We believe that a type system that is sometime incorrect can end up being dangerous due to expectation mismatches."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Fast"),". Many developers underestimate how much of their project's build time goes into type checking. Our type checker is one of the fastest around."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Inferred"),". You don't have to write down the types! ReScript can deduce them from their values. Yes, it might seem magical that we can deduce all of your program's types, without incorrectness, without your manual annotation, and do so quickly. Welcome to ReScript =).")),(0,p.kt)("p",null,"The following sections explore more of our type system."),(0,p.kt)("h2",{id:"inference"},"Inference"),(0,p.kt)("p",null,"This let-binding doesn't contain any written type:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"let score = 10;\nlet add = (a, b) => a + b;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"let score = 10\nlet add a b = a + b\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var score = 10;\nfunction add(a, b) {\n  return a + b | 0;\n}\n"))),(0,p.kt)("p",null,"ReScript knows that ",(0,p.kt)("inlineCode",{parentName:"p"},"score")," is an ",(0,p.kt)("inlineCode",{parentName:"p"},"int"),", judging by the value ",(0,p.kt)("inlineCode",{parentName:"p"},"10"),". This is called ",(0,p.kt)("strong",{parentName:"p"},"inference"),". Likewise, it also knows that the ",(0,p.kt)("inlineCode",{parentName:"p"},"add")," function takes 2 ",(0,p.kt)("inlineCode",{parentName:"p"},"int"),"s and returns an ",(0,p.kt)("inlineCode",{parentName:"p"},"int"),", judging from the ",(0,p.kt)("inlineCode",{parentName:"p"},"+")," operator, which works on ints."),(0,p.kt)("h2",{id:"type-annotation"},"Type Annotation"),(0,p.kt)("p",null,"But you can also optionally write down the type, aka annotate your value:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"let score: int = 10;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"let score: int = 10\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var score = 10;\n"))),(0,p.kt)("p",null,"If the type annotation for ",(0,p.kt)("inlineCode",{parentName:"p"},"score")," doesn't correspond to our inferred type for it, we'll show you an error during compilation time. We ",(0,p.kt)("strong",{parentName:"p"},"won't")," silently assume your type annotation is correct, unlike many other languages."),(0,p.kt)("p",null,"You can also wrap any expression in parentheses and annotate it:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"let myInt = 5;\nlet myInt: int = 5;\nlet myInt = (5: int) + (4: int);\nlet add = (x: int, y: int) : int => x + y;\nlet drawCircle = (~radius as r: int): circleType => /* code here */;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"let myInt = 5\nlet myInt: int = 5\nlet myInt = (5 : int) + (4 : int)\nlet add (x : int) (y : int) = (x + y : int)\nlet drawCircle ~radius:(r : int) : circleType = (* code here *)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var myInt = 9;\nfunction add(x, y) {\n  return x + y | 0;\n}\nfunction drawCircle(r) {\n  /* code here */\n}\n"))),(0,p.kt)("p",null,"Note: in the last line, ",(0,p.kt)("inlineCode",{parentName:"p"},"(~radius as r: int)")," is a labeled argument. More on this in the ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"function.md"}),"function")," page."),(0,p.kt)("h2",{id:"type-alias"},"Type Alias"),(0,p.kt)("p",null,"You can refer to a type by a different name. They'll be equivalent:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type scoreType = int;\nlet x: scoreType = 10;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type scoreType = int\nlet x: scoreType = 10\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var x = 10;\n"))),(0,p.kt)("h2",{id:"type-parameter-aka-generic"},"Type Parameter (Aka Generic)"),(0,p.kt)("p",null,"Types can accept parameters, akin to generics in other languages. The parameters' names ",(0,p.kt)("strong",{parentName:"p"},"need")," to start with ",(0,p.kt)("inlineCode",{parentName:"p"},"'"),"."),(0,p.kt)("p",null,"The use-case of a parameterized type is to kill duplications. Before:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"// this is a tuple of 3 items, explained next\ntype intCoordinates = (int, int, int);\ntype floatCoordinates = (float, float, float);\n\nlet a: intCoordinates = (10, 20, 20);\nlet b: floatCoordinates = (10.5, 20.5, 20.5);\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"(* this is a tuple of 3 items, explained next *)\ntype intCoordinates = (int, int, int)\ntype floatCoordinates = (float, float, float)\n\nlet a: intCoordinates = (10, 20, 20)\nlet b: floatCoordinates = (10.5, 20.5, 20.5)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var a = [10, 20, 20];\nvar b = [10.5, 20.5, 20.5];\n"))),(0,p.kt)("p",null,"After:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type coordinates('a) = ('a, 'a, 'a);\n\nlet a: coordinates(int) = (10, 20, 20);\nlet b: coordinates(float) = (10.5, 20.5, 20.5);\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type 'a coordinates = ('a * 'a * 'a)\n\nlet a: int coordinates = (10, 20, 20)\nlet b: float coordinates = (10.5, 20.5, 20.5)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var a = [10, 20, 20];\nvar b = [10.5, 20.5, 20.5];\n"))),(0,p.kt)("p",null,"Note that the above codes are just contrived examples for illustration purposes. Since the types are inferred, you could have just written:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"let buddy = (10, 20, 20);\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"let buddy = (10, 20, 20)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var buddy = [10, 20, 20];\n"))),(0,p.kt)("p",null,"The type system infers that it's a ",(0,p.kt)("inlineCode",{parentName:"p"},"(int, int, int)"),". Nothing else needed to be written down."),(0,p.kt)("p",null,"Type arguments appear in many places. Our ",(0,p.kt)("inlineCode",{parentName:"p"},"array('a)")," type is such a type that requires a type parameter"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'// inferred as `array(string)`\nlet greetings = [|"hello", "world", "how are you"|];\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'(* inferred as `string array` *)\nlet greetings = [|"hello"; "world"; "how are you"|]\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var greetings = ["hello", "world", "how are you"];\n'))),(0,p.kt)("p",null,"If types didn't accept parameters, the standard library would need to define the types ",(0,p.kt)("inlineCode",{parentName:"p"},"arrayOfString"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"arrayOfInt"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"arrayOfTuplesOfInt"),", etc. That'd be tedious."),(0,p.kt)("p",null,"Types can receive many arguments, and be composable."),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type result('a, 'b) =\n  | Ok('a)\n  | Error('b);\n\ntype myPayload = {data: string};\n\ntype myPayloadResults('errorType) = array(result(myPayload, 'errorType));\n\nlet payloadResults: myPayloadResults(string) = [|\n  Ok({data: \"hi\"}),\n  Ok({data: \"bye\"}),\n  Error(\"Something wrong happened!\")\n|];\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type ('a, 'b) result =\n  | Ok of 'a\n  | Error of 'b\n\ntype myPayload = {\n  data: string;\n}\n\ntype 'errorType myPayloadResults = (myPayload, 'errorType) result array\n\nlet payloadResults: string myPayloadResults = [|\n  Ok({data = \"hi\"});\n  Ok({data = \"bye\"});\n  Error(\"Something wrong happaned!\");\n|]\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var payloadResults = [\n  {\n    TAG: /* Ok */0,\n    _0: {data: "hi"}\n  },\n  {\n    TAG: /* Ok */0,\n    _0: {data: "bye"}\n  },\n  {\n    TAG: /* Error */1,\n    _0: "Something wrong happened!"\n  }\n];\n'))),(0,p.kt)("h2",{id:"recursive-types"},"Recursive Types"),(0,p.kt)("p",null,"Just like a functions, a type can reference itself within itself:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type person = {\n  name: string,\n  friends: array(person)\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type person = {\n  name: string;\n  friends: person array;\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,p.kt)("p",null,"To opt out of resursive type, use ",(0,p.kt)("inlineCode",{parentName:"p"},"type nonrec person = ..."),"."),(0,p.kt)("h2",{id:"mutually-recursive-types"},"Mutually Recursive Types"),(0,p.kt)("p",null,"Types can also be ",(0,p.kt)("em",{parentName:"p"},"mutually")," recursive through ",(0,p.kt)("inlineCode",{parentName:"p"},"and"),":"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"type student = {taughtBy: teacher}\nand teacher = {students: array(student)};\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),"type student = {taughtBy: teacher}\nand teacher = {students: student array}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,p.kt)("h2",{id:"type-escape-hatch"},"Type Escape Hatch"),(0,p.kt)("p",null,"ReScript's type system is robust and does not allow dangerous, unsafe stuff like implicit type casting, randomly guessing a value's type, etc. However, out of pragmatism, we expose a single escape hatch for you to \"lie\" to the type system:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'external myShadyConversion: myType1 => myType2 = "%identity";\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'external myShadyConversion: myType1 -> myType2 = "%identity"\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,p.kt)("p",null,"This declaration converts a ",(0,p.kt)("inlineCode",{parentName:"p"},"myType1")," of your choice to ",(0,p.kt)("inlineCode",{parentName:"p"},"myType2")," of your choice. You can use it like so:"),(0,p.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),'external convertToFloat : int => float = "%identity";\nlet age = 10;\nlet gpa = 2.1 +. convertToFloat(age);\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-ml"}),'external convertToFloat : int -> float = "%identity"\nlet age = 10\nlet gpa = 2.1 +. (convertToFloat age)\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var age = 10;\nvar gpa = 2.1 + 10;\n"))),(0,p.kt)("p",null,"Obviously, do ",(0,p.kt)("strong",{parentName:"p"},"not")," abuse this feature. Use it tastefully when you're working with existing, overly dynamic JS code, for example."),(0,p.kt)("p",null,"More on externals ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"external.md"}),"here"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note"),": this particular ",(0,p.kt)("inlineCode",{parentName:"p"},"external")," is the only one that isn't preceded by a ",(0,p.kt)("inlineCode",{parentName:"p"},"@bs")," annotation."))}u.isMDXComponent=!0,u.frontmatter={title:"Type",description:"Types and type definitions in ReScript",canonical:"/docs/manual/latest/type",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/type.mdx"}},89698:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/type",function(){return n(45437)}])}},function(e){e.O(0,[49774],(function(){return t=89698,e(e.s=t);var t}));var t=e.O();_N_E=t}]);