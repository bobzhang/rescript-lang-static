(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69545],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},17450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(96156),i=n(17375),a=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"ReScript ships 3 modules in its standard library."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"api/js"}),"Js"),": bindings for all your familiar JavaScript APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"api/belt"}),"Belt"),": extra collections and helpers not available in JavaScript."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"api/dom"}),"Dom"),": Dom related types and modules.")),(0,a.kt)("p",null,"Usage heuristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default to using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Js")," module. Most of the APIs in it are runtime-free and compile down to clean, readable JavaScript, which is our priority."),(0,a.kt)("li",{parentName:"ul"},"For other APIs that aren't available in regular JavaScript (and thus don't exist in our ",(0,a.kt)("inlineCode",{parentName:"li"},"Js")," bindings), use Belt. For example, prefer ",(0,a.kt)("inlineCode",{parentName:"li"},"Js.Array2")," over ",(0,a.kt)("inlineCode",{parentName:"li"},"Belt.Array"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Dom")," module contains our standardized types used by various userland DOM bindings. Due to the complexity of DOM, we don't mind that you ignore this module and build your application-specific DOM bindings.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": we do not recommend other userland standard library alternatives (unless it's DOM bindings). These cause confusion and split points for the community."))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api.mdx"}},2494:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api",function(){return n(17450)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=2494,e(e.s=t);var t}));var t=e.O();_N_E=t}]);