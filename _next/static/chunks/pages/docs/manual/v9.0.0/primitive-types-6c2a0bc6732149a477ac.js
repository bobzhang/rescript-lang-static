(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28289],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"===typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},81571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a,r=n(22122),i=n(17375),l=n(67294),o=n(3905),p=(l.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),s={};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"primitive-types"},"Primitive Types"),(0,o.kt)("p",null,"ReScript comes with the familiar primitive types like ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),", etc."),(0,o.kt)("h2",{id:"string"},"String"),(0,o.kt)("p",null,"ReScript ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"s are delimited using ",(0,o.kt)("strong",{parentName:"p"},"double")," quotes (single quotes are reserved for the character type below)."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let greeting = "Hello world!"\nlet multilineGreeting = "Hello\n world!"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var greeting = "Hello world!";\nvar multilineGreeting = "Hello\\n world!";\n'))),(0,o.kt)("p",null,"To concatenate strings, use ",(0,o.kt)("inlineCode",{parentName:"p"},"++"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let greetings = "Hello " ++ "world!"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var greetings = "Hello world!";\n'))),(0,o.kt)("h3",{id:"string-interpolation"},"String Interpolation"),(0,o.kt)("p",null,"There's a special syntax for string that allows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"multiline string just like before"),(0,o.kt)("li",{parentName:"ul"},"no special character escaping"),(0,o.kt)("li",{parentName:"ul"},"Interpolation"),(0,o.kt)("li",{parentName:"ul"},"Proper unicode handling")),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let name = "Joe"\n\nlet greeting = `Hello\nWorld\n\ud83d\udc4b\n${name}\n`\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var name = "Joe";\n\nvar greeting = "Hello\\nWorld\\n\ud83d\udc4b\\n" + name + "\\n";\n'))),(0,o.kt)("p",null,"This is just like JavaScript's backtick string interpolation, except without needing to escape special characters."),(0,o.kt)("p",null,"For interpolation, you'll have to convert the binding (",(0,o.kt)("inlineCode",{parentName:"p"},"name")," in the example) into a string if it isn't one. If you want the interpolation to implicitly convert a binding into a string, prepend a ",(0,o.kt)("inlineCode",{parentName:"p"},"j"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let age = 10\nlet message = j`Today I am $age years old.`\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var message = "Today I am " + 10 + " years old.";\n'))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"See the familiar ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.String")," API in the ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/string"}),"API docs"),". Since a ReScript string maps to a JavaScript string, you can mix & match the string operations in both standard libraries."),(0,o.kt)("h3",{id:"tips--tricks"},"Tips & Tricks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You have a good type system now"),"! In an untyped language, you'd often overload the meaning of string by using it as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a unique id: ",(0,o.kt)("inlineCode",{parentName:"li"},'var BLUE_COLOR = "blue"')),(0,o.kt)("li",{parentName:"ul"},"an identifier into a data structure: ",(0,o.kt)("inlineCode",{parentName:"li"},'var BLUE = "blue" var RED = "red" var colors = [BLUE, RED]')),(0,o.kt)("li",{parentName:"ul"},"the name of an object field: ",(0,o.kt)("inlineCode",{parentName:"li"},'person["age"] = 24')),(0,o.kt)("li",{parentName:"ul"},"an enum: ",(0,o.kt)("inlineCode",{parentName:"li"},"if (audio.canPlayType() === 'probably') {...}")," ",(0,o.kt)("a",(0,r.Z)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType#Return_value"}),"(\u0ca0_\u0ca0)")),(0,o.kt)("li",{parentName:"ul"},"other crazy patterns you'll soon find horrible, after getting used to ReScript's alternatives.")),(0,o.kt)("p",null,"The more you overload the poor string type, the less the type system (or a teammate) can help you! ReScript provides concise, fast and maintainable types & data structures alternatives to the use-cases above (e.g. variants, in a later section)."),(0,o.kt)("h2",{id:"char"},"Char"),(0,o.kt)("p",null,"ReScript has a type for a string with a single letter:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let firstLetterOfAlphabet = 'a'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var firstLetterOfAlphabet = /* "a" */97;\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Char doesn't support Unicode or UTF-8 and is therefore not recommended."),(0,o.kt)("p",null,"To convert a String to a Char, use ",(0,o.kt)("inlineCode",{parentName:"p"},'String.get("a", 0)'),". To convert a Char to a String, use ",(0,o.kt)("inlineCode",{parentName:"p"},"String.make(1, 'a')"),"."),(0,o.kt)("h2",{id:"regular-expression"},"Regular Expression"),(0,o.kt)("p",null,"ReScript regular expressions compile cleanly to their JavaScript counterpart:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let r = %re("/b/g")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var r = /b/g;\n"))),(0,o.kt)("p",null,"A regular expression like the above has the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Re.t"),". The ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/re"}),"Js.Re")," module contains the regular expression helpers you have seen in JS."),(0,o.kt)("h2",{id:"boolean"},"Boolean"),(0,o.kt)("p",null,"A ReScript boolean has the type ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," and can be either ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Common operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&&"),": logical and."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"||"),": logical or."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"!"),": logical not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,o.kt)("inlineCode",{parentName:"li"},">="),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"li"},">")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"=="),": structural equal, compares data structures deeply: ",(0,o.kt)("inlineCode",{parentName:"li"},"(1, 2) == (1, 2)")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". Convenient, but use with caution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"==="),": referential equal, compares shallowly. ",(0,o.kt)("inlineCode",{parentName:"li"},"(1, 2) === (1, 2)")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"let myTuple = (1, 2); myTuple === myTuple")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"!="),": structural unequal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"!=="),": referential unequal.")),(0,o.kt)("p",null,"ReScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"true/false")," compiles into a JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"true/false"),"."),(0,o.kt)("h2",{id:"integers"},"Integers"),(0,o.kt)("p",null,"32-bits, truncated when necessary. We provide the usual operations on them: ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", etc. See ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/int"}),"Js.Int")," for helper functions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Careful when you bind to JavaScript numbers"),"! Long ones might be truncated. Bind JS number (especially Dates) as ",(0,o.kt)("strong",{parentName:"p"},"float")," instead."),(0,o.kt)("p",null,"To improve readability, you may place underscores in the middle of numeric literals such as ",(0,o.kt)("inlineCode",{parentName:"p"},"1_000_000"),". Note that underscores can be placed anywhere within a number, not just every three digits."),(0,o.kt)("h2",{id:"floats"},"Floats"),(0,o.kt)("p",null,"Float requires other operators: ",(0,o.kt)("inlineCode",{parentName:"p"},"+."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/."),", etc. Like ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 +. 0.6"),". See ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"api/js/float"}),"Js.Float")," for helper functions."),(0,o.kt)("p",null,"As with integers, you may use underscores within literals to improve readability."),(0,o.kt)("h2",{id:"unit"},"Unit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," type has a single value, ",(0,o.kt)("inlineCode",{parentName:"p"},"()"),". It compiles to JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". It's a dummy type used as a placeholder in various places. You won't need it until you see it."))}u.isMDXComponent=!0,u.frontmatter={title:"Primitive Types",description:"Primitive Data Types in ReScript",canonical:"/docs/manual/latest/primitive-types",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/primitive-types.mdx"}},72034:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/primitive-types",function(){return n(81571)}])}},function(e){e.O(0,[49774],(function(){return t=72034,e(e.s=t);var t}));var t=e.O();_N_E=t}]);