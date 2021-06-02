(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19218],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(k,p(p({ref:n},m),{},{components:t})):a.createElement(k,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},38161:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a,r=t(22122),o=t(17375),p=t(67294),i=t(3905),l=(p.createElement,a="Intro",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),s={};function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)(l,{mdxType:"Intro"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"genType")," operates on two kinds of entities: ",(0,i.kt)("em",{parentName:"p"},"types")," and ",(0,i.kt)("em",{parentName:"p"},"values"),".\nEach can be ",(0,i.kt)("em",{parentName:"p"},"exported")," from ReScript to JS, or ",(0,i.kt)("em",{parentName:"p"},"imported")," into ReScript from JS.\nThe main annotation is ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType"),", which by default means ",(0,i.kt)("em",{parentName:"p"},"export"),".")),(0,i.kt)("h2",{id:"export-and-import-types"},"Export and Import Types"),(0,i.kt)("p",null,"The following exports a function type ",(0,i.kt)("inlineCode",{parentName:"p"},"callback")," to JS:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"@genType\ntype callback = ReactEvent.Mouse.t => unit\n")),(0,i.kt)("p",null,"To instead import a type called ",(0,i.kt)("inlineCode",{parentName:"p"},"complexNumber")," from JS module ",(0,i.kt)("inlineCode",{parentName:"p"},"MyMath.ts")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"MyMath.js"),"), use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.import")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType.import("./MyMath")\ntype complexNumber\n')),(0,i.kt)("p",null,"This imported type will be treated as opaque by ReScript."),(0,i.kt)("h2",{id:"export-and-import-values"},"Export and Import Values"),(0,i.kt)("p",null,"To export a function ",(0,i.kt)("inlineCode",{parentName:"p"},"callback")," to JS:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\nlet callback = _ => Js.log("Clicked");\n')),(0,i.kt)("p",null,"To rename the function and export it as ",(0,i.kt)("inlineCode",{parentName:"p"},"CB")," on the JS side, use"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\n@genType.as("CB")\nlet callback = _ => Js.log("Clicked");\n')),(0,i.kt)("p",null,"or the more compact"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType("CB")\nlet callback = _ => Js.log("Clicked");\n')),(0,i.kt)("p",null,"To import a function ",(0,i.kt)("inlineCode",{parentName:"p"},"realValue")," from JS module ",(0,i.kt)("inlineCode",{parentName:"p"},"MyMath.ts")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"MyMath.js"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType.import("./MyMath") /* JS module to import from. */\n/* Name and type of the JS value to import. */\nexternal realValue: complexNumber => float = "realValue";\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," With genType < 2.17.0 or bucklescript < 5.0.0, one had to add a line with ",(0,i.kt)("inlineCode",{parentName:"p"},"@bs.module")," and the current file name. See the older ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"https://github.com/cristianoc/genType/blob/v2.16.0/README.md"}),"README"),".")),(0,i.kt)("p",null,"Because of the ",(0,i.kt)("inlineCode",{parentName:"p"},"external")," keyword, it's clear from context that this is an import, so you can also just use ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType")," and omit ",(0,i.kt)("inlineCode",{parentName:"p"},".import"),"."),(0,i.kt)("p",null,"To import a default JS export, use a second argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.import")," e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "default"))'),"."),(0,i.kt)("p",null,"Similarly, to import a value with a different JS name, use e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "ValueStartingWithUpperCaseLetter"))'),"."),(0,i.kt)("p",null,"To import nested values, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Some.Nested.value"),", use e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "Some.Nested.value"))'),"."),(0,i.kt)("h2",{id:"export-and-import-react-components-using-deprecated-record-api"},"Export and Import React Components Using Deprecated Record API"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:")," This section is only relevant for legacy ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"https://github.com/reasonml/reason-react"}),"reason-react")," codebases."),(0,i.kt)("p",null,"To export a ReasonReact component to JS, and automatically generate a wrapper for it, simply annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\nlet make = (~onClick: callback, _children) => {\n  ...component,\n  render: _ => <div onClick> {ReasonReact.string("Click me")} </div>,\n};\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," the value ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," must also be defined, above ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," in the same module (also in the case of components defined in nested modules)."),(0,i.kt)("p",null,"To import and wrap a ReactJS component for use by ReasonReact, the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," function is the only information required:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType.import("./MyBanner") /* Module with the JS component to be wrapped. */\n/* The make function will be automatically generated from the types below. */\nexternal make:\n  (~show: bool, ~message: option<message>=?, \'a) =>\n  ReasonReact.component<\n    ReasonReact.stateless,\n    ReasonReact.noRetainedProps,\n    ReasonReact.actionless,\n  > =\n  "make";\n')),(0,i.kt)("p",null,"The type of ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," must have a named argument for each prop in the JS component. Optional props have option type. The ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," function will be generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"genType"),"."),(0,i.kt)("p",null,"This assumes that the JS component was exported with a default export. In case of named export, use e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyBanner", "componentName"))'),". To import a nested component, use e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyBanner", "Some.Nested.component"))'),"."),(0,i.kt)("h2",{id:"interface-resi-and-implementation-res-files"},"Interface (.resi) and Implementation (.res) files"),(0,i.kt)("p",null,"If both ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.resi")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.res")," exist, the annotations are taken from ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.resi"),"."),(0,i.kt)("p",null,"The behaviour can be overridden by adding annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.ignoreInterface")," at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.resi"),". Use case: expose implementation details to JS but not to ReScript."),(0,i.kt)("h2",{id:"type-expansion-and-gentypeopaque"},"Type Expansion and @genType.opaque"),(0,i.kt)("p",null,"If an exported type ",(0,i.kt)("inlineCode",{parentName:"p"},"persons")," references other types in its definition, those types are also exported by default, as long as they are defined in the same file:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"type name = string\ntype surname = string\ntype person = {name: name, surname: surname}\n\n@genType\ntype persons = array<person>;\n")),(0,i.kt)("p",null,"If however you wish to hide from JS the fact that ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"surname")," are strings, you can do it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.opaque")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"@genType.opaque\ntype name = string\n\n@genType.opaque\ntype surname = string\n\ntype person = {\n  name,\n  surname,\n};\n\n@genType\ntype persons = array<person>;\n")),(0,i.kt)("h2",{id:"renaming-gentypeas-and-object-mangling-convention"},"Renaming, @genType.as, and object mangling convention."),(0,i.kt)("p",null,"By default, entities with a given name are exported/imported with the same name. However, you might wish to change the appearence of the name on the JS side."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Starting from ReScript 7.0.0, ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.as")," on record fields will be discouraged,\nas it incurs a runtime conversion cost. Instead ",(0,i.kt)("inlineCode",{parentName:"p"},"@bs.as")," will be supported and incur zero cost."),(0,i.kt)("p",null,"For example, in case of a record field whose name is a keyword, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\ntype shipment = {\n  date: float,\n  @genType.as("type")\n  type_: string,\n}\n')),(0,i.kt)("p",null,"Object field names follow ReScript's mangling convention:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),'Remove trailing "__" if present.\nOtherwise remove leading "_" when followed by an uppercase letter, or keyword.\n')),(0,i.kt)("p",null,"This means that the analogous example with objects is:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\ntype shipment = {\n  "date": float,\n  "_type": string,\n}\n')),(0,i.kt)("p",null,"or the equivalent ",(0,i.kt)("inlineCode",{parentName:"p"},' "type__": string'),"."),(0,i.kt)("p",null,"Functions and function components also follow the mangling convention for labeled arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\nlet exampleFunction = (~_type) => "type: " ++ _type\n\n@genType\n@react.component\nlet exampleComponent = (~_type) => React.string("type: " ++ _type)\n')),(0,i.kt)("p",null,"It is possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.as")," for functions, though this is only maintained for backwards compatibility, and cannot be used on function components:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@genType\nlet functionWithGenTypeAs =\n  (~date: float) => @genType.as("type") (~type_: string) => ...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," For technical reasons, it is not possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@genType.as")," on the first argument of a function."),(0,i.kt)("h2",{id:"dependent-projects--libraries"},"Dependent Projects / Libraries"),(0,i.kt)("p",null,"ReScript dependencies are specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"bs-dependencies"),".\nFor example, if the dependencies are ",(0,i.kt)("inlineCode",{parentName:"p"},'"bs-dependencies": ["somelibrary"]')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"somelibrary")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"Common.res"),", this looks up the types of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in the library:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"@genType\nlet z = Common.foo;\n")),(0,i.kt)("p",null,"Scoped packages of the form e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"@demo/somelibrary")," are also supported."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The library must have been published with the ",(0,i.kt)("inlineCode",{parentName:"p"},".gen.ts")," files created by genType."))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/gentype/latest/usage.mdx"}},30835:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gentype/latest/usage",function(){return t(38161)}])}},function(e){e.O(0,[49774],(function(){return n=30835,e(e.s=n);var n}));var n=e.O();_N_E=n}]);