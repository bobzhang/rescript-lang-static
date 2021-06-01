(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33098],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},70031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(22122),r=n(17375),o=n(67294),l=n(3905),i=(o.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}}),u=i("Intro"),p=i("CodeTab"),s={};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"refs-and-the-dom"},"Refs and the DOM"),(0,l.kt)(u,{mdxType:"Intro"},(0,l.kt)("p",null,"Refs provide a way to access DOM nodes or React elements created within your ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," component function.")),(0,l.kt)("p",null,"In the typical React dataflow, ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"./components-and-props"}),"props")," are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element"),", or it could be a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dom.element"),". For both of these cases, React provides an escape hatch."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref")," is defined like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"type t<'value> = { mutable current: 'value }\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Note that the ",(0,l.kt)("inlineCode",{parentName:"em"},"Ref.ref")," should not to be confused with the builtin ",(0,l.kt)("a",(0,a.Z)({parentName:"em"},{href:"/docs/manual/latest/mutation"}),"ref type"),", the language feature that enables mutation."))),(0,l.kt)("h2",{id:"when-to-use-refs"},"When to use Refs"),(0,l.kt)("p",null,"There are a few good use cases for refs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Managing state that ",(0,l.kt)("em",{parentName:"li"},"should not trigger")," any re-render."),(0,l.kt)("li",{parentName:"ul"},"Managing focus, text selection, or media playback."),(0,l.kt)("li",{parentName:"ul"},"Triggering imperative animations."),(0,l.kt)("li",{parentName:"ul"},"Integrating with third-party DOM libraries.")),(0,l.kt)("p",null,"Avoid using refs for anything that can be done declaratively."),(0,l.kt)("h2",{id:"creating-refs"},"Creating Refs"),(0,l.kt)("p",null,"A React ref is represented as a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref('value)")," type, a container managing a mutable value of type ",(0,l.kt)("inlineCode",{parentName:"p"},"'value"),". You can create this kind of ref with the ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"./hooks-ref"}),"React.useRef")," hook:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"@react.component\nlet make = () => {\n  let clicks = React.useRef(0);\n\n  let onClick = (_) => {\n    clicks.current = clicks.current + 1;\n  };\n\n  <div onClick>\n    {Belt.Int.toString(clicks.current)->React.string}\n  </div>\n}\n")),(0,l.kt)("p",null,"The example above defines a binding ",(0,l.kt)("inlineCode",{parentName:"p"},"clicks")," of type ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref(int)"),". Note how changing the value ",(0,l.kt)("inlineCode",{parentName:"p"},"clicks.current")," doesn't trigger any re-rendering of the component."),(0,l.kt)("h2",{id:"accessing-refs"},"Accessing Refs"),(0,l.kt)("p",null,"When a ref is passed to an element during render, a reference to the node becomes accessible at the current attribute of the ref."),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"let value = myRef.current\n")),(0,l.kt)("p",null,"The value of the ref differs depending on the type of the node:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the ref attribute is used on an HTML element, the ref passed via ",(0,l.kt)("inlineCode",{parentName:"li"},"ReactDOM.Ref.domRef")," receives the underlying DOM element as its current property (type of ",(0,l.kt)("inlineCode",{parentName:"li"},"React.ref<Js.Nullable.t<Dom.element>>"),")"),(0,l.kt)("li",{parentName:"ul"},"In case of interop, when the ref attribute is used on a custom class component (based on JS classes), the ref object receives the mounted instance of the component as its current (not discussed in this document)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"You may not use the ref attribute on component functions")," because they don\u2019t have instances (we don't expose JS classes in ReScript).")),(0,l.kt)("p",null,"Here are some examples:"),(0,l.kt)("h3",{id:"adding-a-ref-to-a-dom-element"},"Adding a Ref to a DOM Element"),(0,l.kt)("p",null,"This code uses a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.ref")," to store a reference to an ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," DOM node to put focus on a text field when a button was clicked:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// CustomTextInput.res\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n\n  let focusInput = () =>\n    switch textInput.current->Js.Nullable.toOption {\n    | Some(dom) => dom->focus\n    | None => ()\n    }\n\n  let onClick = _ => focusInput()\n\n  <div>\n    <input type_="text" ref={ReactDOM.Ref.domRef(textInput)} />\n    <input type_="button" value="Focus the text input" onClick />\n  </div>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var textInput = React.useRef(null);\n  var onClick = function (param) {\n    var dom = textInput.current;\n    if (!(dom == null)) {\n      dom.focus();\n      return ;\n    }\n\n  };\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: textInput,\n                  type: "text"\n                }), React.createElement("input", {\n                  type: "button",\n                  value: "Focus the text input",\n                  onClick: onClick\n                }));\n}\n'))),(0,l.kt)("p",null,"A few things happened here, so let's break them down:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We initialize our ",(0,l.kt)("inlineCode",{parentName:"li"},"textInput")," ref as a ",(0,l.kt)("inlineCode",{parentName:"li"},"Js.Nullable.null")),(0,l.kt)("li",{parentName:"ul"},"We register our ",(0,l.kt)("inlineCode",{parentName:"li"},"textInput")," ref in our ",(0,l.kt)("inlineCode",{parentName:"li"},"<input>")," element with ",(0,l.kt)("inlineCode",{parentName:"li"},"ReactDOM.Ref.domRef(textInput)")),(0,l.kt)("li",{parentName:"ul"},"In our ",(0,l.kt)("inlineCode",{parentName:"li"},"focusInput")," function, we need to first verify that our DOM element is set, and then use the ",(0,l.kt)("inlineCode",{parentName:"li"},"focus")," binding to set the focus")),(0,l.kt)("p",null,"React will assign the ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," field with the DOM element when the component mounts, and assign it back to null when it unmounts."),(0,l.kt)("h3",{id:"refs-and-component-functions"},"Refs and Component Functions"),(0,l.kt)("p",null,"In React, you ",(0,l.kt)("strong",{parentName:"p"},"can't")," pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," attribute to a component function:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"module MyComp = {\n  @react.component\n  let make = (~ref) => <input />\n}\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n\n  // This will **not** work\n  <MyComp ref={ReactDOM.Ref.domRef(textInput)} />\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"// Compiler Error:\n// Ref cannot be passed as a normal prop. Please use `forwardRef`\n// API instead\n"))),(0,l.kt)("p",null,"The snippet above will not compile and output an error that looks like this: ",(0,l.kt)("inlineCode",{parentName:"p"},'"Ref cannot be passed as a normal prop. Please use forwardRef API instead."'),"."),(0,l.kt)("p",null,"As the error message implies, If you want to allow people to take a ref to your component function, you can use ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"./forwarding-refs"}),"ref forwarding")," (possibly in conjunction with useImperativeHandle) instead."),(0,l.kt)("h2",{id:"exposing-dom-refs-to-parent-components"},"Exposing DOM Refs to Parent Components"),(0,l.kt)("p",null,"In rare cases, you might want to have access to a child\u2019s DOM node from a parent component. This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node."),(0,l.kt)("p",null,"we recommend to use ",(0,l.kt)("a",(0,a.Z)({parentName:"p"},{href:"./forwarding-refs"}),"ref forwarding")," for these cases. ",(0,l.kt)("strong",{parentName:"p"},"Ref forwarding lets components opt into exposing any child component\u2019s ref as their own"),". You can find a detailed example of how to expose a child\u2019s DOM node to a parent component in the ref forwarding documentation."),(0,l.kt)("h2",{id:"callback-refs"},"Callback Refs"),(0,l.kt)("p",null,"React also supports another way to set refs called \u201ccallback refs\u201d (",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.callbackDomRef"),"), which gives more fine-grain control over when refs are set and unset."),(0,l.kt)("p",null,"Instead of passing a ref value created by ",(0,l.kt)("inlineCode",{parentName:"p"},"React.useRef()"),", you can pass in a callback function. The function receives the target ",(0,l.kt)("inlineCode",{parentName:"p"},"Dom.element")," as its argument, which can be stored and accessed elsewhere."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Usually we'd use ",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.domRef()")," to pass a ref value, but for callback refs, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"React.Ref.callbackDomRef()")," instead."),(0,l.kt)("p",null,"The example below implements a common pattern: using the ref callback to store a reference to a DOM node in an instance property."),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// CustomTextInput.re\n\n@send external focus: Dom.element => unit = "focus"\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n  let setTextInputRef = element => {\n    textInput.current = element;\n  }\n\n  let focusTextInput = _ => {\n    textInput.current\n    ->Js.Nullable.toOption\n    ->Belt.Option.forEach(input => input->focus)\n  }\n\n  <div>\n    <input type_="text" ref={ReactDOM.Ref.callbackDomRef(setTextInputRef)} />\n    <input\n      type_="button" value="Focus the text input" onClick={focusTextInput}\n    />\n  </div>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var textInput = React.useRef(null);\n  var setTextInputRef = function (element) {\n    textInput.current = element;\n\n  };\n  var focusTextInput = function (param) {\n    return Belt_Option.forEach(Caml_option.nullable_to_opt(textInput.current), (function (input) {\n                  input.focus();\n\n                }));\n  };\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: setTextInputRef,\n                  type: "text"\n                }), React.createElement("input", {\n                  type: "button",\n                  value: "Focus the text input",\n                  onClick: focusTextInput\n                }));\n}\n'))),(0,l.kt)("p",null,"React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts."),(0,l.kt)("p",null,"You can pass callback refs between components like you can with object refs that were created with ",(0,l.kt)("inlineCode",{parentName:"p"},"React.useRef()"),"."),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// Parent.res\n\n@send external focus: Dom.element => unit = "focus"\n\nmodule CustomTextInput = {\n  @react.component\n  let make = (~setInputRef) => {\n    <div>\n      <input type_="text" ref={ReactDOM.Ref.callbackDomRef(setInputRef)} />\n    </div>\n  }\n}\n\n@react.component\nlet make = () => {\n  let textInput = React.useRef(Js.Nullable.null)\n  let setInputRef = element => { textInput.current = element}\n\n  <CustomTextInput setInputRef/>\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function CustomTextInput(Props) {\n  var setInputRef = Props.setInputRef;\n  return React.createElement("div", undefined, React.createElement("input", {\n                  ref: setInputRef,\n                  type: "text"\n                }));\n}\n\nvar CustomTextInput = {\n  make: CustomTextInput\n};\n\nfunction Parent(Props) {\n  var textInput = React.useRef(null);\n  var setInputRef = function (element) {\n    textInput.current = element;\n\n  };\n  return React.createElement(CustomTextInput, {\n              setInputRef: setInputRef\n            });\n}\n'))),(0,l.kt)("p",null,"In the example above, ",(0,l.kt)("inlineCode",{parentName:"p"},"Parent")," passes its ref callback as an ",(0,l.kt)("inlineCode",{parentName:"p"},"setInputRef")," prop to the ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput"),", and the ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput")," passes the same function as a special ref attribute to the ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>"),". As a result, the ",(0,l.kt)("inlineCode",{parentName:"p"},"textInput")," ref in Parent will be set to the DOM node corresponding to the ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>")," element in the ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomTextInput"),"."))}c.isMDXComponent=!0,c.frontmatter={title:"Refs and the DOM",description:"Using Refs and DOM elements in ReScript and React",canonical:"/docs/react/latest/refs-and-the-dom",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/refs-and-the-dom.mdx"}},12481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/refs-and-the-dom",function(){return n(70031)}])}},function(e){e.O(0,[49774],(function(){return t=12481,e(e.s=t);var t}));var t=e.O();_N_E=t}]);