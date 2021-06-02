(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93231],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},58358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(17375),o=n(96156),a=(n(67294),n(3905));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",l({},t))}},s=m("Intro"),i=m("CodeTab"),p={};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"context"}),"Context"),(0,a.kt)(s,{mdxType:"Intro"},(0,a.kt)("p",null,"Context provides a way to pass data through the component tree without having to pass props down manually at every level.")),(0,a.kt)("h2",l({},{id:"why-context"}),"Why Context?"),(0,a.kt)("p",null,"In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In ReScript, passing down props is way simpler than in TS / JS due to its ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/manual/latest/jsx#punning"}),"JSX prop punning")," feature and strong type inference, so it's often preferrable to keep it simple and just do props passing. Less magic means more transparency!"),(0,a.kt)("h2",l({},{id:"when-to-use-context"}),"When to Use Context"),(0,a.kt)("p",null,"Context is designed to share data that can be considered \u201cglobal\u201d for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a \u201ctheme\u201d prop in order to style the Button component:"),(0,a.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-res"}),'// src/App.res\ntype theme = Light | Dark;\n\nmodule Button = {\n  @react.component\n  let make = (~theme) => {\n    let className = switch theme {\n      | Light => "theme-light"\n      | Dark => "theme-black"\n    };\n    <button className> {React.string("Click me")} </button>\n  }\n}\n\nmodule ThemedButton = {\n  @react.component\n  let make = (~theme) => {\n    <Button theme />\n  }\n}\n\nmodule Toolbar = {\n  @react.component\n  let make = (~theme) => {\n    <div>\n      <ThemedButton theme/>\n    </div>\n  }\n}\n\n@react.component\nlet make = () => {\n  // We define the theme in the\n  // toplevel App component and\n  // pass it down\n  <Toolbar theme=Dark/>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js"}),'function Button(Props) {\n  var theme = Props.theme;\n  var className = theme ? "theme-black" : "theme-light";\n  return React.createElement("button", {\n              className: className\n            }, "Click me");\n}\n\nfunction ThemedButton(Props) {\n  var theme = Props.theme;\n  return React.createElement(Button, {\n              theme: theme\n            });\n}\n\nfunction Toolbar(Props) {\n  var theme = Props.theme;\n  return React.createElement("div", undefined, React.createElement(ThemedButton, {\n                  theme: theme\n                }));\n}\n\nfunction Playground(Props) {\n  return React.createElement(Toolbar, {\n              theme: /* Dark */1\n            });\n}\n'))),(0,a.kt)("p",null,"Using context, we can avoid passing props through intermediate elements:"),(0,a.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-res"}),'// src/App.res\n\nmodule ThemeContext = {\n  type theme = Light | Dark;\n  let context = React.createContext(Light)\n\n  module Provider = {\n    let provider = React.Context.provider(context)\n\n    @react.component\n    let make = (~value, ~children) => {\n      React.createElement(provider, {"value": value, "children": children})\n    }\n  }\n}\n\nmodule Button = {\n  @react.component\n  let make = (~theme) => {\n    let className = switch theme {\n      | ThemeContext.Light => "theme-light"\n      | Dark => "theme-black"\n    };\n    <button className> {React.string("Click me")} </button>\n  }\n}\n\nmodule ThemedButton = {\n  @react.component\n  let make = () => {\n    let theme = React.useContext(ThemeContext.context)\n\n    <Button theme/>\n  }\n}\n\nmodule Toolbar = {\n  @react.component\n  let make = () => {\n    <div> <ThemedButton /> </div>\n  }\n}\n\n@react.component\nlet make = () => {\n  <ThemeContext.Provider value=ThemeContext.Dark>\n    <div> <Toolbar /> </div>\n  </ThemeContext.Provider>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js"}),'var context = React.createContext(/* Light */0);\n\nvar provider = context.Provider;\n\nfunction ThemeContext$Provider(Props) {\n  var value = Props.value;\n  var children = Props.children;\n  return React.createElement(provider, {\n              value: value,\n              children: children\n            });\n}\n\nfunction Button(Props) {\n  var theme = Props.theme;\n  var className = theme ? "theme-black" : "theme-light";\n  return React.createElement("button", {\n              className: className\n            }, "Click me");\n}\n\nvar Button = {\n  make: Button\n};\n\nfunction ThemedButton(Props) {\n  var theme = React.useContext(context);\n  return React.createElement(Button, {\n              theme: theme\n            });\n}\n\nvar ThemedButton = {\n  make: ThemedButton\n};\n\nfunction Toolbar(Props) {\n  return React.createElement("div", undefined, React.createElement(ThemedButton, {}));\n}\n\nvar Toolbar = {\n  make: Toolbar\n};\n\nfunction Playground(Props) {\n  return React.createElement(ThemeContext$Provider, {\n              value: /* Dark */1,\n              children: React.createElement("div", undefined, React.createElement(Toolbar, {}))\n            });\n}\n'))))}u.isMDXComponent=!0,u.frontmatter={title:"Context",description:"Details about Context in ReScript and React",canonical:"/docs/react/latest/context",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/context.mdx"}},27954:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/context",function(){return n(58358)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=27954,e(e.s=t);var t}));var t=e.O();_N_E=t}]);