(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3881],{22122:function(e,r,n){"use strict";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}n.d(r,{Z:function(){return t}})},17375:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,{Z:function(){return t}})},3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"===typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?t.createElement(d,i(i({ref:r},c),{},{components:n})):t.createElement(d,i({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"===typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},28894:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t,o=n(22122),a=n(17375),i=n(67294),s=n(3905),l=(i.createElement,t="CodeTab",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),u={};function c(e){var r=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"async--promise"},"Async & Promise"),(0,s.kt)("p",null,"ReScript's primary mechanism for async programming is the same as JavaScript's (callbacks and promises), since we compile cleanly to JavaScript and would like to avoid dragging in a heavy custom runtime."),(0,s.kt)("p",null,"However, it is planned for us to introduce a coroutine-like feature in the future; for that reason, we're postponing introducing the keywords ",(0,s.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"await")," into the language; though our (upcoming) Promise API bindings revamp + ",(0,s.kt)("a",(0,o.Z)({parentName:"p"},{href:"pipe"}),"pipe")," will make your async code already look better than otherwise."),(0,s.kt)("h2",{id:"promise"},"Promise"),(0,s.kt)("p",null,"ReScript has built-in support for ",(0,s.kt)("a",(0,o.Z)({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises"),". The 3 functions you generally need are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,s.kt)("p",null,"Additionally, here's the type signature for creating a promise on the ReScript side:"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t<'a>\n")),(0,s.kt)("p",null,"This type signature means that ",(0,s.kt)("inlineCode",{parentName:"p"},"make")," takes a callback that takes 2 named arguments, ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"reject"),". Both arguments are themselves ",(0,s.kt)("a",(0,o.Z)({parentName:"p"},{href:"function.md#uncurried-function"}),"uncurried callbacks")," (with a dot). ",(0,s.kt)("inlineCode",{parentName:"p"},"make")," returns the created promise."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Using the ",(0,s.kt)("a",(0,o.Z)({parentName:"p"},{href:"pipe.md"}),"pipe operator"),":"),(0,s.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2))\n\nmyPromise->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 2)\n}, _)->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 3)\n}, _)->Js.Promise.catch(err => {\n  Js.log2("Failure!!", err)\n  Js.Promise.resolve(-2)\n}, _)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",(0,o.Z)({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))))}c.isMDXComponent=!0,c.frontmatter={title:"Async & Promise",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/promise.mdx"}},90881:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/promise",function(){return n(28894)}])}},function(e){e.O(0,[49774],(function(){return r=90881,e(e.s=r);var r}));var r=e.O();_N_E=r}]);