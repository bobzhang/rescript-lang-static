(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9032],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"===typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},50379:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a,r=t(22122),o=t(17375),i=t(67294),p=t(3905),l=(i.createElement,a="Intro",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),s={};function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"option"},"Option"),(0,p.kt)(l,{mdxType:"Intro"},(0,p.kt)("p",null,"In Belt we represent the existence and nonexistence of a value by wrapping it\nwith the ",(0,p.kt)("inlineCode",{parentName:"p"},"option")," type.  In order to make it a bit more convenient to work with\noption-types, Belt provides utility-functions for it."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"option")," type is a part of the Reason / OCaml standard library which is defined like this:")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type option<'a> = None | Some('a)\n")),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let someString: option<string> = Some("hello")\n')),(0,p.kt)("h2",{id:"getexn"},"getExn"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: option<'a> => 'a\n")),(0,p.kt)("p",null,"Raises an Error in case ",(0,p.kt)("inlineCode",{parentName:"p"},"None")," is provided. Use with care."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Option.getExn(Some(3)) /* 3 */\n\nBelt.Option.getExn(None) /* Raises an Error */\n")),(0,p.kt)("h2",{id:"mapwithdefault"},"mapWithDefault"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithDefault: (option<'a>, 'b, 'a => 'b) => 'b\n")),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"optionValue")," is of ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)"),",\nthis function returns that value applied with ",(0,p.kt)("inlineCode",{parentName:"p"},"f"),", in other words ",(0,p.kt)("inlineCode",{parentName:"p"},"f(value)"),"."),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"optionValue")," is ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", the default is returned."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let someValue = Some(3)\nsomeValue->Belt.Option.mapWithDefault(0, x => x + 5) /* 8 */\n\nlet noneValue = None\nnoneValue->Belt.Option.mapWithDefault(0, x => x + 5) /* 0 */\n")),(0,p.kt)("h2",{id:"mapwithdefaultu"},"mapWithDefaultU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithDefaultU: (option<'a>, 'b, (. 'a) => 'b) => 'b\n")),(0,p.kt)("p",null,"Uncurried version of ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"#mapWithDefault"}),"mapWithDefault"),"."),(0,p.kt)("h2",{id:"map"},"map"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (option<'a>, 'a => 'b) => option<'b>\n")),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"optionValue")," is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)")," this returns ",(0,p.kt)("inlineCode",{parentName:"p"},"f(value)"),", otherwise it returns ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Option.map(Some(3), x => x * x) /* Some(9) */\n\nBelt.Option.map(None, x => x * x) /* None */\n")),(0,p.kt)("h2",{id:"mapu"},"mapU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (option<'a>, (. 'a) => 'b) => option<'b>\n")),(0,p.kt)("p",null,"Uncurried version of ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"#map"}),"map"),"."),(0,p.kt)("h2",{id:"flatmap"},"flatMap"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let flatMap: (option<'a>, 'a => option<'b>) => option<'b>\n")),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"optionValue")," is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)"),", returns ",(0,p.kt)("inlineCode",{parentName:"p"},"f(value)"),", otherwise returns\n",(0,p.kt)("inlineCode",{parentName:"p"},"None"),".",(0,p.kt)("br",null),"\nThe function ",(0,p.kt)("inlineCode",{parentName:"p"},"f")," must have a return type of ",(0,p.kt)("inlineCode",{parentName:"p"},"option<'b>"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let addIfAboveOne = value =>\n  if (value > 1) {\n    Some(value + 1)\n  } else {\n    None\n  }\n\nBelt.Option.flatMap(Some(2), addIfAboveOne) /* Some(3) */\n\nBelt.Option.flatMap(Some(-4), addIfAboveOne) /* None */\n\nBelt.Option.flatMap(None, addIfAboveOne) /* None */\n")),(0,p.kt)("h2",{id:"flatmapu"},"flatMapU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let flatMapU: (option<'a>, (. 'a) => option<'b>) => option<'b>\n")),(0,p.kt)("p",null,"Uncurried version of flatMap."),(0,p.kt)("h2",{id:"getwithdefault"},"getWithDefault"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (option<'a>, 'a) => 'a\n")),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalValue")," is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)"),", returns ",(0,p.kt)("inlineCode",{parentName:"p"},"value"),", otherwise default."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Belt.Option.getWithDefault(None, "Banana") /* Banana */\n\nBelt.Option.getWithDefault(Some("Apple"), "Banana") /* Apple */\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let greet = (firstName: option<string>) =>\n  "Greetings " ++ firstName->Belt.Option.getWithDefault("Anonymous")\n\nSome("Jane")->greet /* "Greetings Jane" */\n\nNone->greet /* "Greetings Anonymous" */\n')),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Option.getWithDefault(Some(1812), 1066) /* 1812 */\n\nBelt.Option.getWithDefault(None, 1066) /* 1066 */\n")),(0,p.kt)("h2",{id:"issome"},"isSome"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isSome: option<'a> => bool\n")),(0,p.kt)("p",null,"Returns ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if the argument is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Option.isSome(None) /* false */\n\nBelt.Option.isSome(Some(1)) /* true */\n")),(0,p.kt)("h2",{id:"isnone"},"isNone"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isNone: option<'a> => bool\n")),(0,p.kt)("p",null,"Returns ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if the argument is ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Belt.Option.isNone(None) /* true */\n\nBelt.Option.isNone(Some(1)) /* false */\n")),(0,p.kt)("h2",{id:"eq"},"eq"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (option<'a>, option<'b>, ('a, 'b) => bool) => bool\n")),(0,p.kt)("p",null,"Evaluates two optional values for equality with respect to a predicate\nfunction. If both ",(0,p.kt)("inlineCode",{parentName:"p"},"optValue1")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optValue2")," are ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", returns ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),".\nIf one of the arguments is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value)")," and the other is ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", returns\n",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,p.kt)("p",null,"If arguments are ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value1)")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value2)"),", returns the result of\n",(0,p.kt)("inlineCode",{parentName:"p"},"predicate(value1, value2)"),"; the predicate function must return a bool."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let clockEqual = (a, b) => mod(a, 12) == mod(b, 12)\n\nopen Belt.Option\n\neq(Some(3), Some(15), clockEqual) /* true */\n\neq(Some(3), None, clockEqual) /* false */\n\neq(None, Some(3), clockEqual) /* false */\n\neq(None, None, clockEqual) /* true */\n")),(0,p.kt)("h2",{id:"equ"},"eqU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (option<'a>, option<'b>, (.'a, 'b) => bool) => bool\n")),(0,p.kt)("p",null,"Uncurried version of ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"#eq"}),"eq"),"."),(0,p.kt)("h2",{id:"cmp"},"cmp"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (option<'a>, option<'b>, ('a, 'b) => int) => int\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"cmp(optValue1, optValue2, comparisonFunction)")," compares two optional values\nwith respect to given ",(0,p.kt)("inlineCode",{parentName:"p"},"comparisonFunction"),"."),(0,p.kt)("p",null,"If both ",(0,p.kt)("inlineCode",{parentName:"p"},"optValue1")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optValue2")," are ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", it returns ",(0,p.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,p.kt)("p",null,"If the first argument is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value1)")," and the second is ",(0,p.kt)("inlineCode",{parentName:"p"},"None"),", returns ",(0,p.kt)("inlineCode",{parentName:"p"},"1"),"\n(something is greater than nothing)."),(0,p.kt)("p",null,"If the first argument is ",(0,p.kt)("inlineCode",{parentName:"p"},"None")," and the second is ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value2)"),", returns ",(0,p.kt)("inlineCode",{parentName:"p"},"-1"),"\n(nothing is less than something)."),(0,p.kt)("p",null,"If the arguments are ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value1)")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"Some(value2)"),", returns the result of\n",(0,p.kt)("inlineCode",{parentName:"p"},"comparisonFunction(value1, value2)"),"; comparisonFunction takes two arguments\nand returns ",(0,p.kt)("inlineCode",{parentName:"p"},"-1")," if the first argument is less than the second, ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," if the\narguments are equal, and ",(0,p.kt)("inlineCode",{parentName:"p"},"1")," if the first argument is greater than the second."),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let clockCompare = (a, b) => compare(mod(a, 12), mod(b, 12))\n\nopen Belt.Option\n\ncmp(Some(3), Some(15), clockCompare) /* 0 */\n\ncmp(Some(3), Some(14), clockCompare) /* 1 */\n\ncmp(Some(2), Some(15), clockCompare) /* (-1) */\n\ncmp(None, Some(15), clockCompare) /* (-1) */\n\ncmp(Some(14), None, clockCompare) /* 1 */\n\ncmp(None, None, clockCompare) /* 0 */\n")),(0,p.kt)("h2",{id:"cmpu"},"cmpU"),(0,p.kt)("pre",null,(0,p.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (option<'a>, option<'b>, ((.'a, 'b) => int)) => int\n")),(0,p.kt)("p",null,"Uncurried version of ",(0,p.kt)("a",(0,r.Z)({parentName:"p"},{href:"#cmp"}),"cmp"),"."))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/belt/option.mdx"}},75071:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/belt/option",function(){return t(50379)}])}},function(e){e.O(0,[49774],(function(){return n=75071,e(e.s=n);var n}));var n=e.O();_N_E=n}]);