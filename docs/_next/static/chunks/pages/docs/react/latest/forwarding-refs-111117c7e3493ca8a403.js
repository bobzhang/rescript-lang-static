(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41726],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},63501:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(17375),r=t(96156),o=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",p({},n))}},s=l("Intro"),c=l("CodeTab"),u={};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",p(p(p({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",p({},{id:"forwarding-refs"}),"Forwarding Refs"),(0,o.kt)(s,{mdxType:"Intro"},(0,o.kt)("p",null,"Ref forwarding is a technique for automatically passing a ",(0,o.kt)("a",p({parentName:"p"},{href:"./refs-and-the-dom"}),"React.ref")," through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries. The most common scenarios are described below.")),(0,o.kt)("h2",p({},{id:"why-ref-forwarding"}),"Why Ref Forwarding?"),(0,o.kt)("p",null,"Consider a FancyButton component that renders the native button DOM element:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'// FancyButton.res\n\n@react.component\nlet make = (~children) => {\n  <button className="FancyButton">\n    children\n  </button>\n}\n')),(0,o.kt)("p",null,"React components hide their implementation details, including their rendered output. Other components using FancyButton ",(0,o.kt)("strong",{parentName:"p"},"usually will not need")," to obtain a ref to the inner button DOM element. This is good because it prevents components from relying on each other\u2019s DOM structure too much."),(0,o.kt)("p",null,"Although such encapsulation is desirable for application-level components like ",(0,o.kt)("inlineCode",{parentName:"p"},"FeedStory")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment"),", it can be inconvenient for highly reusable \u201cleaf\u201d components like ",(0,o.kt)("inlineCode",{parentName:"p"},"FancyButton")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTextInput"),". These components tend to be used throughout the application in a similar manner as a regular DOM button and input, and accessing their DOM nodes may be unavoidable for managing focus, selection, or animations."),(0,o.kt)("p",null,"There are currently two strategies on forwarding refs through a component. In ReScript and React we strongly recommend ",(0,o.kt)("strong",{parentName:"p"},"passing your ref as a prop"),", but there is also a dedicated API called ",(0,o.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),"."),(0,o.kt)("p",null,"We will discuss both methods in this document."),(0,o.kt)("h2",p({},{id:"forward-refs-via-props"}),"Forward Refs via Props"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ref")," can be passed down like any other prop. The component will take care of forwarding the ref to the right DOM element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No new concepts to learn!")),(0,o.kt)("p",null,"In the example below, ",(0,o.kt)("inlineCode",{parentName:"p"},"FancyInput")," defines a prop ",(0,o.kt)("inlineCode",{parentName:"p"},"inputRef")," that will be forwarded to its ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'// App.res\n\nmodule FancyInput = {\n  @react.component\n  let make = (~children, ~inputRef: ReactDOM.domRef) =>\n    <div> <input type_="text" ref=inputRef /> children </div>\n}\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let input = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    input.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <FancyInput inputRef={ReactDOM.Ref.domRef(input)}>\n      <button onClick> {React.string("Click to focus")} </button>\n    </FancyInput>\n  </div>\n}\n')),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.domRef")," type to represent our ",(0,o.kt)("inlineCode",{parentName:"p"},"inputRef"),". We pass our ref in the exact same manner as we'd do a DOM ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," attribute (",(0,o.kt)("inlineCode",{parentName:"p"},"<input ref={ReactDOM.Ref.domRef(myRef)} />"),")."),(0,o.kt)("h2",p({},{id:"discouraged-reactforwardref"}),"[Discouraged]"," React.forwardRef"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," We discourage this method since it ",(0,o.kt)("a",p({parentName:"p"},{href:"https://twitter.com/dan_abramov/status/1173372190395445251"}),"will likely go away")," at some point, and doesn't yield any obvious advantages over the previously mentioned ref prop passing."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),' offers a way to "emulate a ',(0,o.kt)("inlineCode",{parentName:"p"},"ref"),' prop" within custom components. Internally the component will forward the passed ',(0,o.kt)("inlineCode",{parentName:"p"},"ref")," value to the target DOM element instead."),(0,o.kt)("p",null,"This is how the previous example would look like with the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," approach:"),(0,o.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'// App.res\n\nmodule FancyInput = {\n  @react.component\n  let make = React.forwardRef((~className=?, ~children, ref_) =>\n    <div>\n      <input\n        type_="text"\n        ?className\n        ref=?{Js.Nullable.toOption(ref_)->Belt.Option.map(\n          ReactDOMRe.Ref.domRef,\n        )}\n      />\n      children\n    </div>\n  )\n}\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let input = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    input.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <FancyInput className="fancy" ref=input>\n      <button onClick> {React.string("Click to focus")} </button>\n    </FancyInput>\n  </div>\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var React = require("react");\nvar Belt_Option = require("./stdlib/belt_Option.js");\nvar Caml_option = require("./stdlib/caml_option.js");\n\nvar make = React.forwardRef(function (Props, ref_) {\n      var className = Props.className;\n      var children = Props.children;\n      var tmp = {\n        type: "text"\n      };\n      var tmp$1 = Belt_Option.map((ref_ == null) ? undefined : Caml_option.some(ref_), (function (prim) {\n              return prim;\n            }));\n      if (tmp$1 !== undefined) {\n        tmp.ref = Caml_option.valFromOption(tmp$1);\n      }\n      if (className !== undefined) {\n        tmp.className = Caml_option.valFromOption(className);\n      }\n      return React.createElement("div", undefined, React.createElement("input", tmp), children);\n    });\n\nvar FancyInput = {\n  make: make\n};\n\nfunction App(Props) {\n  var input = React.useRef(null);\n  var onClick = function (param) {\n    return Belt_Option.forEach(Caml_option.nullable_to_opt(input.current), (function (input) {\n                  input.focus();\n\n                }));\n  };\n  return React.createElement("div", undefined, React.createElement(make, {\n                  className: "fancy",\n                  children: React.createElement("button", {\n                        onClick: onClick\n                      }, "Click to focus"),\n                  ref: input\n                }));\n}\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Our ",(0,o.kt)("inlineCode",{parentName:"p"},"@react.component")," decorator transforms our labeled argument props within our ",(0,o.kt)("inlineCode",{parentName:"p"},"React.forwardRef")," function in the same manner as our classic ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," function."),(0,o.kt)("p",null,"This way, components using ",(0,o.kt)("inlineCode",{parentName:"p"},"FancyInput")," can get a ref to the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," DOM node and access it if necessary\u2014just like if they used a DOM ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," directly."),(0,o.kt)("h2",p({},{id:"note-for-component-library-maintainers"}),"Note for Component Library Maintainers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When you start using ref forwarding in a component library, you should treat it as a breaking change and release a new major version of your library"),". This is because your library likely has an observably different behavior (such as what refs get assigned to, and what types are exported), and this can break apps and other libraries that depend on the old behavior."))}d.isMDXComponent=!0,d.frontmatter={title:"Forwarding Refs",description:"Forwarding Ref values in ReScript and React",canonical:"/docs/react/latest/forwarding-refs",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/forwarding-refs.mdx"}},22808:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/forwarding-refs",function(){return t(63501)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=22808,e(e.s=n);var n}));var n=e.O();_N_E=n}]);