(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10596],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"===typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},31560:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(22122),r=t(17375),o=t(67294),i=t(3905),l=(o.createElement,function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}}),p=l("Intro"),s=l("CodeTab"),c={};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components-and-props"},"Components and Props"),(0,i.kt)(p,{mdxType:"Intro"},(0,i.kt)("p",null,"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. ")),(0,i.kt)("h2",{id:"what-is-a-component"},"What is a Component?"),(0,i.kt)("p",null,"A React component is a function describing a UI element that receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," object as a parameter (data describing the dynamic parts of the UI) and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element"),". "),(0,i.kt)("p",null,"The nice thing about this concept is that you can solely focus on the input and output. The component function receives some data and returns some opaque ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element")," that is managed by the React framework to render your UI."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you want to know more about the low level details on how a component interface is implemented, refer to the ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./beyond-jsx"}),"Beyond JSX")," page.")),(0,i.kt)("h2",{id:"component-example"},"Component Example"),(0,i.kt)("p",null,"Let's start with a first example to see how a ReScript React component looks like:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// src/Greeting.res\n@react.component\nlet make = () => {\n  <div>\n    {React.string("Hello ReScripters!")}\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var React = require("react");\n\nfunction Greeting(Props) {\n  return React.createElement("div", undefined, "Hello ReScripters!");\n}\n\nvar make = Greeting;\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:")," Always make sure to name your component function ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," and don't forget to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@react.component")," attribute."),(0,i.kt)("p",null,"We've created a ",(0,i.kt)("inlineCode",{parentName:"p"},"Greeting.res")," file that contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," function that doesn't receive any props (the function doesn't receive any parameters), and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element")," that represents ",(0,i.kt)("inlineCode",{parentName:"p"},"<div> Hello ReScripters! </div>")," in the rendered DOM."),(0,i.kt)("p",null,"You can also see in the the JS output that the function we created was directly translated into the pure JS version of a ReactJS component. Note how a  ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," transforms into a ",(0,i.kt)("inlineCode",{parentName:"p"},'React.createElement("div",...)')," call in JavaScript."),(0,i.kt)("h2",{id:"defining-props"},"Defining Props"),(0,i.kt)("p",null,"In ReactJS, props are usually described as a single ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," object. In ReScript, we use ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"/docs/manual/latest/function#labeled-arguments"}),"labeled arguments")," to define our props parameters instead. Here's an example:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// src/Article.res\n@react.component\nlet make = (~title: string, ~visitorCount: int, ~children: React.element) => {\n  let visitorCountMsg = "You are visitor number: " ++ Belt.Int.toString(visitorCount);\n  <div>\n    <div> {React.string(title)} </div>\n    <div> {React.string(vistorCount)} </div>\n    children\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var React = require("react");\n\nfunction Article(Props) {\n  var title = Props.title;\n  var visitorCount = Props.visitorCount;\n  var children = Props.children;\n  var visitorCountMsg = "You are visitor number: " + String(visitorCount);\n  return React.createElement("div", undefined, React.createElement("div", undefined, title), React.createElement("div", undefined, visitorCountMsg), children);\n}\n\nvar make = Article;\n'))),(0,i.kt)("h3",{id:"optional-props"},"Optional Props"),(0,i.kt)("p",null,"We can leverage the full power of labeled arguments to define optional props as well:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// Greeting.res\n@react.component\nlet make = (~name: option<string>=?) => {\n  let greeting = switch name {\n    | Some(name) => "Hello " ++ name ++ "!"\n    | None => "Hello stranger!"\n  }\n  <div> {React.string(greeting)} </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function Greeting(Props) {\n  var name = Props.name;\n  var greeting = name !== undefined ? "Hello " + name + "!" : "Hello stranger!";\n  return React.createElement("div", undefined, greeting);\n}\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@react.component")," attribute implicitly adds the last ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," parameter to our ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," function for us (no need to do it ourselves). "),(0,i.kt)("p",null,"In JSX, you can apply optional props with some special syntax:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'let name = Some("Andrea")\n\n<Greeting ?name />\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var Caml_option = require("./stdlib/caml_option.js");\nvar name = "Andrea";\n\nvar tmp = {};\n\nif (name !== undefined) {\n  tmp.name = Caml_option.valFromOption(name);\n}\n\nvar greeting = React.createElement(Playground$Greeting, tmp);\n'))),(0,i.kt)("h3",{id:"special-props-key-and-ref"},"Special Props ",(0,i.kt)("inlineCode",{parentName:"h3"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"ref")),(0,i.kt)("p",null,"You can't define any props called ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),". React treats those props differently and the compiler will will yield an error whenever you try to define a ",(0,i.kt)("inlineCode",{parentName:"p"},"~key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~ref")," argument in your component function."),(0,i.kt)("p",null,"Check out the corresponding ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./arrays-and-keys"}),"Arrays and Keys")," and ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./forwarding-refs"}),"Forwarding React Refs")," sections for more details."),(0,i.kt)("h3",{id:"handling-invalid-prop-names-eg-keywords"},"Handling Invalid Prop Names (e.g. keywords)"),(0,i.kt)("p",null,"Prop names like ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," (as in ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="text" />'),") aren't syntactically valid; ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is a reserved keyword in ReScript. Use ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type_="text" />')," instead. "),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-*")," use camelCasing, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ariaLabel"),". For DOM components, we'll translate it to ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," under the hood."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"data-*")," this is a bit trickier; words with ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," in them aren't valid in ReScript. When you do want to write them, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'<div data-name="click me" />'),", check out the ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./elements-and-jsx#cloning-elements"}),"React.cloneElement")," or ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./elements-and-jsx#creating-dom-elements"}),"React.createDOMElementVariadic")," section."),(0,i.kt)("h2",{id:"children-props"},"Children Props"),(0,i.kt)("p",null,"In React ",(0,i.kt)("inlineCode",{parentName:"p"},"props.children")," is a special attribute to represent the nested elements within a parent element:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"let element = <div> child1 child2 </div>\n")),(0,i.kt)("p",null,"By default, whenever you are passing children like in the expression above, ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," will be treated\nas a ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element"),":"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module MyList = {\n  @react.component\n  let make = (~children: React.element) => {\n    <ul>\n      children\n    </ul>\n  }\n}\n\n<MyList>\n  <li> {React.string("Item 1")} </li>\n  <li> {React.string("Item 2")} </li>\n</MyList>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'\nfunction MyList(Props) {\n  var children = Props.children;\n  return React.createElement("ul", undefined, children);\n}\n\nvar MyList = {\n  make: MyList\n};\n\nReact.createElement(MyList, {\n      children: null\n    }, React.createElement("li", undefined, "Item 1"),\n        React.createElement("li", undefined, "Item 2"));\n'))),(0,i.kt)("p",null,"Interestingly, it doesn't matter if you are passing just one element, or several, React will always collapse its children to a single ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element"),"."),(0,i.kt)("p",null,"It is also possible to redefine the ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," type as well. Here are some examples:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Component with a mandatory ",(0,i.kt)("inlineCode",{parentName:"strong"},"string")," as children:")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module StringChildren = {\n  @react.component\n  let make = (~children: string) => {\n    <div>\n      {React.string(children)}\n    </div>\n  }\n}\n\n<StringChildren> "My Child" </StringChildren>\n\n// This will cause a type check error\n<StringChildren/>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Component with an optional ",(0,i.kt)("inlineCode",{parentName:"strong"},"React.element")," as children:")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module OptionalChildren = {\n  @react.component\n  let make = (~children: option<React.element>=?) => {\n    <div>\n      {switch children {\n      | Some(element) => element\n      | None => React.string("No children provided")\n      }}\n    </div>\n  }\n}\n\n<div>\n  <OptionalChildren />\n  <OptionalChildren> <div /> </OptionalChildren>\n</div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Component that doesn't allow children at all:")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module NoChildren = {\n  @react.component\n  let make = () => {\n    <div>\n      {React.string("I don\'t accept any children params")}\n    </div>\n  }\n}\n\n// The compiler will raise a type error here\n<NoChildren> <div/> </NoChildren>\n')),(0,i.kt)("p",null,"Children props are really tempting to be abused as a way to model hierarchies, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"<List> <ListHeader/> <Item/> </List>")," (",(0,i.kt)("inlineCode",{parentName:"p"},"List")," should only allow ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeader")," elements), but this kind of constraint is hard to enforce because all components end up being a ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element"),", so it would require notorious runtime checking within ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," to verify that all children are in fact of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeader"),"."),(0,i.kt)("p",null,"The best way to approach this kind of issue is by using props instead of children, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'<List header="..." items=[{id: "...", text: "..."}]/>'),". This way it's easy to type check the constraints, and it also spares component consumers from memorizing and remembering component constraints."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The best use-case for ",(0,i.kt)("inlineCode",{parentName:"strong"},"children")," is to pass down ",(0,i.kt)("inlineCode",{parentName:"strong"},"React.element"),"s without any semantic order or implementation details!")),(0,i.kt)("h2",{id:"props--type-inference"},"Props & Type Inference"),(0,i.kt)("p",null,"The ReScript type system is really good at inferring the prop types just by looking at its prop usage. "),(0,i.kt)("p",null,"For simple cases, well-scoped usage, or experimentation, it's still fine to omit type annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// Button.res\n\n@react.component\nlet make = (~onClick, ~msg, ~children) => {\n  <div onClick>\n    {React.string(msg)}\n    children\n  </div>\n}\n")),(0,i.kt)("p",null,"In the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," will be inferred as ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactEvent.Mouse.t => unit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"msg")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"React.element"),". Type inference is especially useful when you just forward values to some smaller (privately scoped) functions."),(0,i.kt)("p",null,"Even though type inference spares us a lot of keyboard typing, we still recommend to explicitly type your props (just like with any public API) for better type visibility and to prevent confusing type errors."),(0,i.kt)("h2",{id:"using-components-in-jsx"},"Using Components in JSX"),(0,i.kt)("p",null,"Every ReScript component can be used in JSX. For example, if we want to use our ",(0,i.kt)("inlineCode",{parentName:"p"},"Greeting")," component within our ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component, we can do this:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// src/App.re\n\n@react.component\nlet make = () => {\n  <div>\n    <Greeting/>\n  </div>\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'var React = require("react");\nvar Greeting = require("./Greeting.js")\n\nfunction App(Props) {\n  return React.createElement("div", undefined, React.createElement(Greeting.make, {}));\n}\n\nvar make = App;\n'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," React components are capitalized; primitive DOM elements like ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," are uncapitalized. More infos on the JSX specifics and code transformations can be found in our ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"/docs/manual/latest/jsx#capitalized-tag"}),"JSX language manual section"),"."),(0,i.kt)("h3",{id:"handwritten-components"},"Handwritten Components"),(0,i.kt)("p",null,"You don't need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@react.component")," decorator to write components that can be used in JSX. Instead you can write a pair of ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"makeProps")," functions such that type ",(0,i.kt)("inlineCode",{parentName:"p"},"makeProps: 'a => props")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"make: props => React.element")," and these will always work as React components."),(0,i.kt)("p",null,"This works with your own version of ",(0,i.kt)("inlineCode",{parentName:"p"},"@obj"),", or any other function that takes named args and returns a single props structure. For example:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module Link = {\n  type props = {"href": string, "children": React.element};\n  @obj external makeProps:(\n    ~href: string,\n    ~children: React.element,\n    unit) => props = ""\n\n  let make = (props: props) => { \n    <a href={props["href"]}>\n     {props["children"]}\n    </a>\n  }\n}\n\n<Link href="/docs"> {React.string("Docs")} </Link>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function Link(props) {\n  return React.createElement("a", {\n              href: props.href\n            }, props.children);\n}\n\nReact.createElement(Link, {\n      href: "/docs",\n      children: "Docs"\n    });\n'))),(0,i.kt)("p",null,"More details on the ",(0,i.kt)("inlineCode",{parentName:"p"},"@react.component")," decorator and its generated interface can be found in our ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"./beyond-jsx"}),"Beyond JSX")," page."),(0,i.kt)("h2",{id:"submodule-components"},"Submodule Components"),(0,i.kt)("p",null,"We can also represent React components as submodules, which makes it very convenient to build more complex UI without the need to create multiple files for each composite component (that's probably only used by the parent component anyways): "),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// src/Button.res\nmodule Label = {\n  @react.component\n  let make = (~title: string) => {\n    <div className="myLabel"> {React.string(title)} </div>\n  }\n}\n\n@react.component\nlet make = (~children) => {\n  <div>\n    <Label title="Getting Started" />\n    children\n  </div>\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Button.res")," file defined above is now containing a ",(0,i.kt)("inlineCode",{parentName:"p"},"Label")," component, that can also be used by other components, either by writing the fully qualified module name (",(0,i.kt)("inlineCode",{parentName:"p"},'<Button.Label title="My Button"/>'),") or by using a module alias to shortcut the full qualifier:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'module Label = Button.Label\n\nlet content = <Label title="Test"/>\n')),(0,i.kt)("h2",{id:"component-naming"},"Component Naming"),(0,i.kt)("p",null,"Because components are actually a pair of functions, they have to belong to a module to be used in JSX. It makes sense to use these modules for identification purposes as well. ",(0,i.kt)("inlineCode",{parentName:"p"},"@react.component")," automatically adds the name for you based on the module you are in."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// File.res\n\n// will be named `File` in dev tools\n@react.component\nlet make = ...\n\n// will be named `File$component` in dev tools\n@react.component\nlet component = ...\n\nmodule Nested = {\n  // will be named `File$Nested` in dev tools\n  @react.component\n  let make = ...\n};\n")),(0,i.kt)("p",null,"If you need a dynamic name for higher-order components or you would like to set your own name you can use ",(0,i.kt)("inlineCode",{parentName:"p"},'React.setDisplayName(make, "NameThatShouldBeInDevTools")'),"."),(0,i.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start with one component file and utilize submodule components as your component grows. Consider splitting up in multiple files when really necessary."),(0,i.kt)("li",{parentName:"ul"},"Keep your directory hierarchy flat. Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"article/Header.res")," use ",(0,i.kt)("inlineCode",{parentName:"li"},"ArticleHeader.res")," etc. Filenames are unique across the codebase, so filenames tend to be very specific ",(0,i.kt)("inlineCode",{parentName:"li"},"ArticleUserHeaderCard.res"),", which is not necessarily a bad thing, since it clearly expresses the intent of the component within its name, and makes it also very easy to find, match and refactor across the whole codebase.")))}d.isMDXComponent=!0,d.frontmatter={title:"Components and Props",description:"Basic concepts for components and props in ReScript & React",canonical:"/docs/react/latest/components-and-props",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/components-and-props.mdx"}},77743:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/components-and-props",function(){return t(31560)}])}},function(e){e.O(0,[49774],(function(){return n=77743,e(e.s=n);var n}));var n=e.O();_N_E=n}]);