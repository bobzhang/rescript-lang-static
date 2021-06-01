(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73778],{22122:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return a}})},17375:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,{Z:function(){return a}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"===typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},41475:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a,n=r(22122),l=r(17375),o=r(67294),i=r(3905),s=(o.createElement,a="Intro",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),c={};function p(e){var t=e.components,r=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"promise"},"Promise"),(0,i.kt)(s,{mdxType:"Intro"},(0,i.kt)("p",null,"Provide bindings to JS promise.")),(0,i.kt)("h2",{id:"t"},"t"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<+'a>\n")),(0,i.kt)("h2",{id:"error"},"error"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type error\n")),(0,i.kt)("h2",{id:"make"},"make"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: ((~resolve: (. 'a) => unit, ~reject: (. exn) => unit) => unit) => t<'a>\n")),(0,i.kt)("h2",{id:"resolve"},"resolve"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let resolve: 'a => t<'a>\n")),(0,i.kt)("h2",{id:"reject"},"reject"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reject: exn => t<'a>\n")),(0,i.kt)("h2",{id:"all"},"all"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all: array<t<'a>> => t<array<'a>>\n")),(0,i.kt)("h2",{id:"all2"},"all2"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all2: ((t<'a0>, t<'a1>)) => t<('a0, 'a1)>\n")),(0,i.kt)("h2",{id:"all3"},"all3"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all3: ((t<'a0>, t<'a1>, t<'a2>)) => t<('a0, 'a1, 'a2)>\n")),(0,i.kt)("h2",{id:"all4"},"all4"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all4: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>)) => t<('a0, 'a1, 'a2, 'a3)>\n")),(0,i.kt)("h2",{id:"all5"},"all5"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all5: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>, t<'a4>)) => t<('a0, 'a1, 'a2, 'a3, 'a4)>\n")),(0,i.kt)("h2",{id:"all6"},"all6"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let all6: ((t<'a0>, t<'a1>, t<'a2>, t<'a3>, t<'a4>, t<'a5>)) => t<('a0, 'a1, 'a2, 'a3, 'a4, 'a5)>\n")),(0,i.kt)("h2",{id:"race"},"race"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let race: array<t<'a>> => t<'a>\n")),(0,i.kt)("h2",{id:"then_"},"then_"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let then_: ('a => t<'b>, t<'a>) => t<'b>\n")),(0,i.kt)("h2",{id:"catch"},"catch"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,n.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let catch: (error => t<'a>, t<'a>) => t<'a>\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/js/promise.mdx"}},84839:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/js/promise",function(){return r(41475)}])}},function(e){e.O(0,[49774],(function(){return t=84839,e(e.s=t);var t}));var t=e.O();_N_E=t}]);