(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97492],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"===typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},38903:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a,r=t(22122),o=t(17375),l=t(67294),i=t(3905),p=(l.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),s={};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"null-undefined-and-option"},"Null, Undefined and Option"),(0,i.kt)("p",null,"ReScript itself doesn't have the notion of ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". This is a ",(0,i.kt)("em",{parentName:"p"},"great")," thing, as it wipes out an entire category of bugs. No more ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined is not a function"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"cannot access someAttribute of undefined"),"!"),(0,i.kt)("p",null,"However, the ",(0,i.kt)("strong",{parentName:"p"},"concept")," of a potentially nonexistent value is still useful, and safely exists in our language."),(0,i.kt)("p",null,"We represent the existence and nonexistence of a value by wrapping it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type. Here's its definition from the standard library:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"type option<'a> = None | Some('a)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,'It means "a value of type option is either None (representing nothing) or that actual value wrapped in a Some".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," how the ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type is just a regular ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"variant.md"}),"variant"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's a normal value:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let licenseNumber = 5\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var licenseNumber = 5;\n"))),(0,i.kt)("p",null,'To represent the concept of "maybe null", you\'d turn this into an ',(0,i.kt)("inlineCode",{parentName:"p"},"option")," type by wrapping it. For the sake of a more illustrative example, we'll put a condition around it:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"let licenseNumber =\n  if personHasACar {\n    Some(5)\n  } else {\n    None\n  }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var licenseNumber = personHasACar ? 5 : undefined;\n"))),(0,i.kt)("p",null,"Later on, when another piece of code receives such value, it'd be forced to handle both cases through ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"pattern matching"),":"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'switch licenseNumber {\n| None =>\n  Js.log("The person doesn\'t have a car")\n| Some(number) =>\n  Js.log("The person\'s license number is " ++ Js.Int.toString(number))\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var number = licenseNumber;\n\nif (number !== undefined) {\n  console.log("The person\'s license number is " + number.toString());\n} else {\n  console.log("The person doesn\'t have a car");\n}\n'))),(0,i.kt)("p",null,"By turning your ordinary number into an ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type, and by forcing you to handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," case, the language effectively removed the possibility for you to mishandle, or forget to handle, a conceptual ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value! ",(0,i.kt)("strong",{parentName:"p"},"A pure ReScript program doesn't have null errors"),"."),(0,i.kt)("h2",{id:"interoperate-with-javascript-undefined-and-null"},"Interoperate with JavaScript ",(0,i.kt)("inlineCode",{parentName:"h2"},"undefined")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"null")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type is common enough that we special-case it when compiling to JavaScript:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(5)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var x = 5;\n"))),(0,i.kt)("p",null,"simply compiles down to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", and"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = None\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var x;\n"))),(0,i.kt)("p",null,"compiles to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"! If you've got e.g. a string in JavaScript that you know might be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", type it as ",(0,i.kt)("inlineCode",{parentName:"p"},"option<string>")," and you're done! Likewise, you can send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(5)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," to the JS side and expect it to be interpreted correctly =)"),(0,i.kt)("h3",{id:"caveat-1"},"Caveat 1"),(0,i.kt)("p",null,"The option-to-undefined translation isn't perfect, because on our side, ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," values can be composed:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(Some(Some(5)))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var x = 5;\n"))),(0,i.kt)("p",null,"This still compiles to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", but this gets troublesome:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(None)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var Caml_option = require("./stdlib/caml_option.js");\n\nvar x = Caml_option.some(undefined);\n')),(0,i.kt)("p",null,"(See output tab).")),(0,i.kt)("p",null,"What's this ",(0,i.kt)("inlineCode",{parentName:"p"},"Caml_option.some")," thing? Why can't this compile to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"? Long story short, when dealing with a polymorphic ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type (aka ",(0,i.kt)("inlineCode",{parentName:"p"},"option<'a>"),", for any ",(0,i.kt)("inlineCode",{parentName:"p"},"'a"),"), many operations become tricky if we don't mark the value with some special annotation. If this doesn't make sense, don't worry; just remember the following rule:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Never, EVER, pass a nested ",(0,i.kt)("inlineCode",{parentName:"strong"},"option")," value (e.g. ",(0,i.kt)("inlineCode",{parentName:"strong"},"Some(Some(Some(5)))"),") into the JS side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Never, EVER, annotate a value coming from JS as ",(0,i.kt)("inlineCode",{parentName:"strong"},"option<'a>"),". Always give the concrete, non-polymorphic type."))),(0,i.kt)("h3",{id:"caveat-2"},"Caveat 2"),(0,i.kt)("p",null,"Unfortunately, lots of times, your JavaScript value might be ",(0,i.kt)("em",{parentName:"p"},"both")," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". In that case, you unfortunately can't type such value as e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"option<int>"),", since our ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type only checks for ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," when dealing with a ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("h4",{id:"solution-more-sophisticated-undefined--null-interop"},"Solution: More Sophisticated ",(0,i.kt)("inlineCode",{parentName:"h4"},"undefined")," & ",(0,i.kt)("inlineCode",{parentName:"h4"},"null")," Interop"),(0,i.kt)("p",null,"To solve this, we provide access to more elaborate ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," helpers through the ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/nullable"}),(0,i.kt)("inlineCode",{parentName:"a"},"Js.Nullable"))," module. This somewhat works like an ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type, but is different from it."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To create a JS ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", use the value ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.null"),". To create a JS ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.undefined")," (you can naturally use ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," too, but that's not the point here; the ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.*")," helpers wouldn't work with it)."),(0,i.kt)("p",null,"If you're receiving, for example, a JS string that can be ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", type it as:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyConstant") external myId: Js.Nullable.t<string> = "myId"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("p",null,"To create such a nullable string from our side (presumably to pass it to the JS side, for interop purpose), do:"),(0,i.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyIdValidator") external validate: Js.Nullable.t<string> => bool = "validate"\nlet personId: Js.Nullable.t<string> = Js.Nullable.return("abc123")\n\nlet result = validate(personId)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var MyIdValidator = require("MyIdValidator");\nvar personId = "abc123";\nvar result = MyIdValidator.validate(personId);\n'))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"return"),' part "wraps" a string into a nullable string, to make the type system understand and track the fact that, as you pass this value around, it\'s not just a string, but a string that can be ',(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h4",{id:"convert-tofrom-option"},"Convert to/from ",(0,i.kt)("inlineCode",{parentName:"h4"},"option")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.fromOption")," converts from a ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.toOption")," does the opposite."))}u.isMDXComponent=!0,u.frontmatter={title:"Null, Undefined and Option",description:"JS interop with nullable and optional values in ReScript",canonical:"/docs/manual/latest/null-undefined-option",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/null-undefined-option.mdx"}},17690:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/null-undefined-option",function(){return t(38903)}])}},function(e){e.O(0,[49774],(function(){return n=17690,e(e.s=n);var n}));var n=e.O();_N_E=n}]);