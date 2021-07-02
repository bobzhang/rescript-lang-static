(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24076],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},73009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(17375),o=n(96156),a=(n(67294),n(3905));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",l({},t))}},u=i("Intro"),s=i("CodeTab"),p={};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"usecontext"}),"useContext"),(0,a.kt)(u,{mdxType:"Intro"},(0,a.kt)("p",null,"Context provides a way to pass data through the component tree without having to pass props down manually at every level. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hooks gives access to such Context values.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," All the details and rationale on React's context feature can be found in ",(0,a.kt)("a",l({parentName:"p"},{href:"./context"}),"here"),".")),(0,a.kt)("h2",l({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-res"}),"let value = React.useContext(myContext)\n")),(0,a.kt)("p",null,"Accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Context.t")," (the value returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext"),") and returns the current context value for that context. The current context value is determined by the value prop of the nearest ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," above the calling component in the tree."),(0,a.kt)("h2",l({},{id:"examples"}),"Examples"),(0,a.kt)("h3",l({},{id:"a-simple-themeprovider"}),"A Simple ThemeProvider"),(0,a.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-res"}),'// App.re\nmodule ThemeContext = {\n  let context = React.createContext("light")\n\n  module Provider = {\n    let provider = React.Context.provider(context)\n\n    @react.component\n    let make = (~value, ~children) => {\n      React.createElement(provider, {"value": value, "children": children})\n    }\n  }\n}\n\nmodule ThemedButton = {\n  @react.component\n  let make = () => {\n    let theme = React.useContext(ThemeContext.context)\n    let (color, backgroundColor) = switch theme {\n    | "dark" => ("#ffffff", "#222222")\n    | "light" | _ => ("#000000", "#eeeeee")\n    }\n\n    let style = ReactDOMStyle.make(~color, ~backgroundColor, ())\n\n    <button style> {React.string("I am a styled button!")} </button>\n  }\n}\n\nmodule Toolbar = {\n  @react.component\n  let make = () => {\n    <div> <ThemedButton /> </div>\n  }\n}\n\n@react.component\nlet make = () => {\n  <ThemeContext.Provider value="dark">\n    <div> <Toolbar /> </div>\n  </ThemeContext.Provider>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js"}),'var context = React.createContext("light");\n\nvar provider = context.Provider;\n\nfunction ThemeContext$Provider(Props) {\n  var value = Props.value;\n  var children = Props.children;\n  return React.createElement(provider, {\n              value: value,\n              children: children\n            });\n}\n\nvar Provider = {\n  provider: provider,\n  make: ThemeContext$Provider\n};\n\nvar ThemeContext = {\n  context: context,\n  Provider: Provider\n};\n\nfunction ThemedButton(Props) {\n  var theme = React.useContext(context);\n  var match;\n  switch (theme) {\n    case "dark" :\n        match = [\n          "#ffffff",\n          "#222222"\n        ];\n        break;\n    case "light" :\n        match = [\n          "#000000",\n          "#eeeeee"\n        ];\n        break;\n    default:\n      match = [\n        "#000000",\n        "#eeeeee"\n      ];\n  }\n  var style = {\n    backgroundColor: match[1],\n    color: match[0]\n  };\n  return React.createElement("button", {\n              style: style\n            }, "I am a styled button!");\n}\n\nvar ThemedButton = {\n  make: ThemedButton\n};\n\nfunction Toolbar(Props) {\n  return React.createElement("div", undefined, React.createElement(ThemedButton, {}));\n}\n\nvar Toolbar = {\n  make: Toolbar\n};\n\nfunction App(Props) {\n  return React.createElement(ThemeContext$Provider, {\n              value: "dark",\n              children: React.createElement("div", undefined, React.createElement(Toolbar, {}))\n            });\n}\n'))))}d.isMDXComponent=!0,d.frontmatter={title:"useContext Hook",description:"Details about the useContext React hook in ReScript",canonical:"/docs/react/latest/hooks-context",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/hooks-context.mdx"}},71921:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/hooks-context",function(){return n(73009)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=71921,e(e.s=t);var t}));var t=e.O();_N_E=t}]);