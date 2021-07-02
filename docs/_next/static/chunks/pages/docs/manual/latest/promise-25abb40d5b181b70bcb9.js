(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3881],{17375:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,{Z:function(){return t}})},28894:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(17375),o=n(96156),a=(n(67294),n(3905));function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var l,p=(l="CodeTab",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",s({},e))}),u={};function c(e){var r=e.components,n=(0,t.Z)(e,["components"]);return(0,a.kt)("wrapper",s(s(s({},u),n),{},{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"async--promise"}),"Async & Promise"),(0,a.kt)("p",null,"ReScript's primary mechanism for async programming is the same as JavaScript's (callbacks and promises), since we compile cleanly to JavaScript and would like to avoid dragging in a heavy custom runtime."),(0,a.kt)("p",null,"However, it is planned for us to introduce a coroutine-like feature in the future; for that reason, we're postponing introducing the keywords ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," into the language; though our (upcoming) Promise API bindings revamp + ",(0,a.kt)("a",s({parentName:"p"},{href:"pipe"}),"pipe")," will make your async code already look better than otherwise."),(0,a.kt)("h2",s({},{id:"promise"}),"Promise"),(0,a.kt)("p",null,"ReScript has built-in support for ",(0,a.kt)("a",s({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises"),". The 3 functions you generally need are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,a.kt)("p",null,"Additionally, here's the type signature for creating a promise on the ReScript side:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-res"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t<'a>\n")),(0,a.kt)("p",null,"This type signature means that ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," takes a callback that takes 2 named arguments, ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reject"),". Both arguments are themselves ",(0,a.kt)("a",s({parentName:"p"},{href:"function.md#uncurried-function"}),"uncurried callbacks")," (with a dot). ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," returns the created promise."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",s({parentName:"p"},{href:"pipe.md"}),"pipe operator"),":"),(0,a.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2))\n\nmyPromise->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 2)\n}, _)->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 3)\n}, _)->Js.Promise.catch(err => {\n  Js.log2("Failure!!", err)\n  Js.Promise.resolve(-2)\n}, _)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))))}c.isMDXComponent=!0,c.frontmatter={title:"Async & Promise",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/promise.mdx"}},90881:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/promise",function(){return n(28894)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return r=90881,e(e.s=r);var r}));var r=e.O();_N_E=r}]);