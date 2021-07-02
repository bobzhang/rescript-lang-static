(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12143],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})},51627:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),l=n(96156),r=(n(67294),n(3905));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,u=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o({},e))}),p={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",o(o(o({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"let-binding"}),"Let Binding"),(0,r.kt)("p",null,'A "let binding", in other languages, might be called a "variable declaration". ',(0,r.kt)("inlineCode",{parentName:"p"},"let")," ",(0,r.kt)("em",{parentName:"p"},"binds")," values to names. They can be seen and referenced by code that comes ",(0,r.kt)("em",{parentName:"p"},"after")," them."),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let greeting = "hello!"\nlet score = 10\nlet newScore = 10 + score\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var greeting = "hello!";\nvar score = 10;\nvar newScore = 20;\n'))),(0,r.kt)("h2",o({},{id:"block-scope"}),"Block Scope"),(0,r.kt)("p",null,"Bindings can be scoped through ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let message = {\n  let part1 = "hello"\n  let part2 = "world"\n  part1 ++ " " ++ part2\n}\n// `part1` and `part2` not accessible here!\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var message = "hello world";\n'))),(0,r.kt)("p",null,"The value of the last line of a scope is implicitly returned."),(0,r.kt)("h3",o({},{id:"design-decisions"}),"Design Decisions"),(0,r.kt)("p",null,"ReScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," and functions all use the same block scoping mechanism. The code below works ",(0,r.kt)("strong",{parentName:"p"},"not"),' because of some special "if scope"; but simply because it\'s the same scope syntax and feature you just saw:'),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'if displayGreeting {\n  let message = "Enjoying the docs so far?"\n  Js.log(message)\n}\n// `message` not accessible here!\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (displayGreeting) {\n  console.log("Enjoying the docs so far?");\n}\n'))),(0,r.kt)("h2",o({},{id:"bindings-are-immutable"}),"Bindings Are Immutable"),(0,r.kt)("p",null,'Let bindings are "immutable", aka "cannot change". This helps our type system deduce and optimize much more than other languages (and in turn, help you more).'),(0,r.kt)("h2",o({},{id:"binding-shadowing"}),"Binding Shadowing"),(0,r.kt)("p",null,"The above restriction might sound unpractical at first. How would you change a value then? Usually, 2 ways:"),(0,r.kt)("p",null,"The first is to realize that many times, what you want isn't to mutate a variable's value. For example, this JavaScript pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var result = 0;\nresult = calculate(result);\nresult = calculateSomeMore(result);\n")),(0,r.kt)("p",null,"...is really just to comment on intermediate steps. You didn't need to mutate ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," at all! You could have just written this JS:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var result1 = 0;\nvar result2 = calculate(result1);\nvar result3 = calculateSomeMore(result2);\n")),(0,r.kt)("p",null,"In ReScript, this obviously works too:"),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let result1 = 0\nlet result2 = calculate(result1)\nlet result3 = calculateSomeMore(result2)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var result1 = 0;\nvar result2 = calculate(0);\nvar result3 = calculateSomeMore(result2);\n"))),(0,r.kt)("p",null,"Additionally, reusing the same let binding name overshadows the previous bindings with the same name. So you can write this too:"),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let result = 0\nlet result = calculate(result)\nlet result = calculateSomeMore(result)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var result = calculate(0);\nvar result$1 = calculateSomeMore(result);\n"))),(0,r.kt)("p",null,"(Though for the sake of clarity, we don't recommend this)."),(0,r.kt)("p",null,"As a matter of fact, even this is valid code:"),(0,r.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let result = "hello"\nJs.log(result) // prints "hello"\nlet result = 1\nJs.log(result) // prints 1\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var result = 1;\nconsole.log("hello");\nconsole.log(1);\n'))),(0,r.kt)("p",null,"The binding you refer to is whatever's the closest upward. No mutation here!\nIf you need ",(0,r.kt)("em",{parentName:"p"},"real")," mutation, e.g. passing a value around, have it modified by many pieces of code, we provide a slightly heavier ",(0,r.kt)("a",o({parentName:"p"},{href:"mutation.md"}),"mutation feature"),"."),(0,r.kt)("h2",o({},{id:"private-let-bindings"}),"Private let bindings"),(0,r.kt)("p",null,"Private let bindings are introduced in the release ",(0,r.kt)("a",o({parentName:"p"},{href:"https://rescript-lang.org/blog/bucklescript-release-7-2"}),"7.2"),"."),(0,r.kt)("p",null,"In the module system, everything is public by default,\nthe only way to hide some values is by providing a separate signature to\nlist public fields and their types:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module A: {\n  let b: int\n} = {\n  let a = 3\n  let b = 4\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%private")," gives you an option to mark private fields directly"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module A = {\n  %%private(let a = 3)\n  let b = 4\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%private")," also applies to file level modules, so in some cases,\nusers do not need to provide a separate interface file just to hide some particular values."),(0,r.kt)("p",null,"Note interface files are still recommended as a general best practice since they give you better\nseparate compilation units and also they're better for documentation. "),(0,r.kt)("p",null,"Still, ",(0,r.kt)("inlineCode",{parentName:"p"},"%private")," is useful in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Code generators. Some code generators want to hide some values but it is sometimes very hard or time consuming for code generators to synthesize the types for public fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quick prototyping. During prototyping, we still want to hide some values, but the interface file is not stable yet, ",(0,r.kt)("inlineCode",{parentName:"p"},"%private")," provide you such convenience."))))}c.isMDXComponent=!0,c.frontmatter={title:"Let Binding",description:"Let binding syntax for binding to values in ReScript",canonical:"/docs/manual/latest/let-binding",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/let-binding.mdx"}},58616:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/let-binding",function(){return n(51627)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=58616,e(e.s=t);var t}));var t=e.O();_N_E=t}]);