(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60694],{22122:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,{Z:function(){return t}})},17375:function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(n,{Z:function(){return t}})},3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"===typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(d,s(s({ref:n},c),{},{components:r})):t.createElement(d,s({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"===typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},98960:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t,o=r(22122),a=r(17375),s=r(67294),i=r(3905),l=(s.createElement,t="CodeTab",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={};function c(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"promise"},"Promise"),(0,i.kt)("p",null,"ReScript has built-in support for ",(0,i.kt)("a",(0,o.Z)({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises"),". The 3 functions you generally need are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,i.kt)("p",null,"Additionally, here's the type signature for creating a promise on the ReScript side:"),(0,i.kt)(l,{labels:["Reason (Old Syntax)","ML (Older Syntax)"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-rei"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t('a);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-mli"}),"Js.Promise.make: (\n  resolve:(('a -> unit) [@bs]) ->\n  reject:((exn -> unit) [@bs]) ->\n  unit\n) -> 'a Js.Promise.t\n"))),(0,i.kt)("p",null,"This type signature means that ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," takes a callback that takes 2 named arguments, ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),". Both arguments are themselves ",(0,i.kt)("a",(0,o.Z)({parentName:"p"},{href:"function.md#uncurried-function"}),"uncurried callbacks")," (with a dot). ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," returns the created promise."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",(0,o.Z)({parentName:"p"},{href:"pipe.md"}),"pipe operator"),":"),(0,i.kt)(l,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-re"}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2));\n\nmyPromise\n|> Js.Promise.then_(value => {\n     Js.log(value);\n     Js.Promise.resolve(value + 2);\n   })\n|> Js.Promise.then_(value => {\n     Js.log(value);\n     Js.Promise.resolve(value + 3);\n   })\n|> Js.Promise.catch(err => {\n     Js.log2("Failure!!", err);\n     Js.Promise.resolve(-2);\n   });\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-ml"}),'let myPromise = Js.Promise.make (fun ~resolve ~reject -> ((resolve 2) [@bs]))\n\nlet () = myPromise\n|> Js.Promise.then_(fun value ->\n     Js.log value;\n     Js.Promise.resolve (value + 2)\n   )\n|> Js.Promise.then_(fun value ->\n     Js.log value;\n     Js.Promise.resolve (value + 3)\n   )\n|> Js.Promise.catch(fun err ->\n     Js.log2 "Failure!!", err;\n     Js.Promise.resolve -2\n   )\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": we might offer a dedicated syntax for JS promises (async/await) in the future. Stay tuned!"))}c.isMDXComponent=!0,c.frontmatter={title:"Promise",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/promise.mdx"}},87977:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/promise",function(){return r(98960)}])}},function(e){e.O(0,[49774],(function(){return n=87977,e(e.s=n);var n}));var n=e.O();_N_E=n}]);