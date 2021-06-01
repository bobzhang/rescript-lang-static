(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},30242:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r,a=n(22122),i=n(17375),o=n(67294),l=n(3905),s=(o.createElement,r="Intro",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"range"},"Range"),(0,l.kt)(s,{mdxType:"Intro"},(0,l.kt)("p",null,"A small utility module to provide inclusive range operations for ",(0,l.kt)("inlineCode",{parentName:"p"},"[start,\nfinish]"),".  Internally it is relying on loops instead of creating new arrays,\nwhich makes it pretty performant and memory friendly.")),(0,l.kt)("h2",{id:"foreachu"},"forEachU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (int, int, (. int) => unit) => unit\n")),(0,l.kt)("h2",{id:"foreach"},"forEach"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (int, int, int => unit) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"forEach(start, finish, action)")),(0,l.kt)("p",null,"equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Array.(forEach(range(start, finish), action))")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Range.forEach(0, 4, (i) => Js.log(i))\n\n/**\n * prints:\n *   0\n *   1\n *   2\n *   3\n *   4\n */\n")),(0,l.kt)("h2",{id:"everyu"},"everyU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (int, int, (. int) => bool) => bool\n")),(0,l.kt)("h2",{id:"every"},"every"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (int, int, int => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"every(start, finish, p)")),(0,l.kt)("p",null,"equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Array.(every(range(start, finish), p))")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Range.every(0, 4, (i) => i < 5) /* true */\n\nBelt.Range.every(0, 4, (i) => i < 4) /* false */\n")),(0,l.kt)("h2",{id:"everybyu"},"everyByU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyByU: (int, int, ~step: int, (. int) => bool) => bool\n")),(0,l.kt)("h2",{id:"everyby"},"everyBy"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyBy: (int, int, ~step: int, int => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"everyBy(start, finish, ~step, p)")),(0,l.kt)("p",null,"See ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt_Array.rangeBy")),(0,l.kt)("p",null,"equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Array.(every(rangeBy(start, finish, ~step), p))")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Range.everyBy(0, 4, ~step=1, (i) => mod(i, 2) === 0) /* false */\n\nBelt.Range.everyBy(0, 4, ~step=2, (i) => mod(i, 2) === 0) /* true */\n")),(0,l.kt)("h2",{id:"someu"},"someU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (int, int, (. int) => bool) => bool\n")),(0,l.kt)("h2",{id:"some"},"some"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (int, int, int => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"some(start, finish, p)")),(0,l.kt)("p",null,"equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Array.(some(range(start, finish), p))")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Range.some(0, 4, (i) => i > 5) /* false */\n\nBelt.Range.some(0, 4, (i) => i > 2) /* true */\n")),(0,l.kt)("h2",{id:"somebyu"},"someByU"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someByU: (int, int, ~step: int, (. int) => bool) => bool\n")),(0,l.kt)("h2",{id:"someby"},"someBy"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someBy: (int, int, ~step: int, int => bool) => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"someBy(start, finish, ~step, p)")),(0,l.kt)("p",null,"See ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt_Array.rangeBy")),(0,l.kt)("p",null,"equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.Array.(some(rangeBy(start, finish, ~step), p))")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Range.someBy(1, 5, ~step=2, (i) => mod(i, 2) === 0) /* false */\n\nBelt.Range.someBy(0, 4, ~step=2, (i) => mod(i, 2) === 0) /* true */\n")))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/range.mdx"}},85007:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/range",function(){return n(30242)}])}},function(e){e.O(0,[49774],(function(){return t=85007,e(e.s=t);var t}));var t=e.O();_N_E=t}]);