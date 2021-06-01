(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13063],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},76882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(22122),r=n(17375),o=n(67294),i=n(3905),s=(o.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}}),c=s("Intro"),u=s("CodeTab"),l={};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useeffect"},"useEffect"),(0,i.kt)(c,{mdxType:"Intro"},(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Effect")," Hook lets you perform side effects in function components.")),(0,i.kt)("h2",{id:"what-are-effects"},"What are Effects?"),(0,i.kt)("p",null,"Common examples for (side) effects are data fetching, setting up a subscription, and manually changing the DOM in React components."),(0,i.kt)("p",null,"There are two common kinds of side effects in React components: those that don\u2019t require cleanup, and those that do. We'll look into the distinction later on in our examples, but first let's see how the interface looks like."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// Runs after every completed render\nReact.useEffect(() => {\n  // Run effects\n  None // or Some(() => {})\n})\n\n\n// Runs only once right after mounting the component\nReact.useEffect0(() => {\n  // Run effects\n  None // or Some(() => {})\n})\n\n// Runs everytime `prop1` has changed\nReact.useEffect1(() => {\n  // Run effects based on prop1\n  None\n}, [prop1])\n\n// Runs everytime `prop1` or `prop2` has changed\nReact.useEffect2(() => {\n  // Run effects based on prop1 / prop2\n  None\n}, (prop1, prop2))\n\nReact.useEffect3(() => {\n  None\n}, (prop1, prop2, prop3));\n\n// useEffect4...7 with according dependency\n// tuple just like useEffect3\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),"React.useEffect(function () { });\nReact.useEffect((function () { }), []);\nReact.useEffect((function () { }), [prop1]);\nReact.useEffect((function () { }), [ prop1, prop2 ]);\nReact.useEffect((function () { }), [ prop1, prop2, prop3 ]);\n"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect")," receives a function that contains imperative, possibly effectful code, and returns a value ",(0,i.kt)("inlineCode",{parentName:"p"},"option<unit => unit>")," as a potential cleanup function."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," call may receive an additional array of dependencies (see ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect1")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect2...7"),"). The effect function will run whenever one of the provided dependencies has changed. More details on why this is useful ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"#effect-dependencies"}),"down below"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You probably wonder why ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect1")," receives an ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect2")," etc require a ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"(prop1, prop2)"),") for the dependency list. That's because a tuple can receive multiple values of different types, whereas an ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," only accepts values of identical types. It's possible to replicate ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect2")," by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect1(fn, [1, 2])"),", on other hand the type checker wouldn't allow ",(0,i.kt)("inlineCode",{parentName:"p"},'React.useEffect1(fn, [1, "two"])'),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect")," will run its function after every completed render, while ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect0")," will only run the effect on the first render (when the component has mounted)."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"effects-without-cleanup"},"Effects without Cleanup"),(0,i.kt)("p",null,"Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don\u2019t require a cleanup. We say that because we can run them and immediately forget about them."),(0,i.kt)("p",null,"As an example, let's write a counter component that updates ",(0,i.kt)("inlineCode",{parentName:"p"},"document.title")," on every render:"),(0,i.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// Counter.re\nmodule Document = {\n  type t;\n  @val external document: t = "document";\n  @set external setTitle: (t, string) => unit = "title"\n}\n\n@react.component\nlet make = () => {\n  let (count, setCount) = React.useState(_ => 0);\n\n  React.useEffect(() => {\n    open Document\n    document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n    None\n  }, );\n\n  let onClick = (_evt) => {\n    setCount(prev => prev + 1)\n  };\n\n  let msg = "You clicked" ++ Belt.Int.toString(count) ++  "times"\n\n  <div>\n    <p>{React.string(msg)}</p>\n    <button onClick> {React.string("Click me")} </button>\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function Counter(Props) {\n  var match = React.useState(function () {\n        return 0;\n      });\n  var setCount = match[1];\n  var count = match[0];\n  React.useEffect(function () {\n        document.title = "You clicked " + String(count) + " times!";\n\n      });\n  var onClick = function (_evt) {\n    return Curry._1(setCount, (function (prev) {\n                  return prev + 1 | 0;\n                }));\n  };\n  var msg = "You clicked" + String(count) + "times";\n  return React.createElement("div", undefined,\n    React.createElement("p", undefined, msg),\n      React.createElement("button", {\n                  onClick: onClick\n                }, "Click me"));\n}\n'))),(0,i.kt)("p",null,"In case we want to make the effects dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),", we can just use following ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," call instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"})," React.useEffect1(() => {\n    open Document\n    document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n    None\n  }, [count]);\n")),(0,i.kt)("p",null,"Now instead of running an effect on every render, it will only run when ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," has a different value than in the render before."),(0,i.kt)("h3",{id:"effects-with-cleanup"},"Effects with Cleanup"),(0,i.kt)("p",null,"Earlier, we looked at how to express side effects that don\u2019t require any cleanup. However, some effects do. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don\u2019t introduce a memory leak!"),(0,i.kt)("p",null,"Let's look at an example that gracefully subscribes, and later on unsubscribes from some subscription API:"),(0,i.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),'// FriendStatus.res\n\nmodule ChatAPI = {\n  // Imaginary globally available ChatAPI for demo purposes\n  type status = { isOnline: bool };\n  @val external subscribeToFriendStatus: (string, status => unit) => unit = "subscribeToFriendStatus";\n  @val external unsubscribeFromFriendStatus: (string, status => unit) => unit = "unsubscribeFromFriendStatus";\n}\n\ntype state = Offline | Loading | Online;\n\n@react.component\nlet make = (~friendId: string) => {\n  let (state, setState) = React.useState(_ => Offline)\n\n  React.useEffect(() => {\n    let handleStatusChange = (status) => {\n      setState(_ => {\n        status.ChatAPI.isOnline ? Online : Offline\n      })\n    }\n\n    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);\n    setState(_ => Loading);\n\n    let cleanup = () => {\n      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)\n    }\n\n    Some(cleanup)\n  })\n\n  let text = switch(state) {\n    | Offline => friendId ++ " is offline"\n    | Online => friendId ++ " is online"\n    | Loading => "loading..."\n  }\n\n  <div>\n    {React.string(text)}\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-js"}),'function FriendStatus(Props) {\n  var friendId = Props.friendId;\n  var match = React.useState(function () {\n        return /* Offline */0;\n      });\n  var setState = match[1];\n  React.useEffect(function () {\n        var handleStatusChange = function (status) {\n          return Curry._1(setState, (function (param) {\n                        if (status.isOnline) {\n                          return /* Online */2;\n                        } else {\n                          return /* Offline */0;\n                        }\n                      }));\n        };\n        subscribeToFriendStatus(friendId, handleStatusChange);\n        Curry._1(setState, (function (param) {\n                return /* Loading */1;\n              }));\n        return (function (param) {\n                  unsubscribeFromFriendStatus(friendId, handleStatusChange);\n\n                });\n      });\n  var text;\n  switch (match[0]) {\n    case /* Offline */0 :\n        text = friendId + " is offline";\n        break;\n    case /* Loading */1 :\n        text = "loading...";\n        break;\n    case /* Online */2 :\n        text = friendId + " is online";\n        break;\n\n  }\n  return React.createElement("div", undefined, text);\n}\n'))),(0,i.kt)("h2",{id:"effect-dependencies"},"Effect Dependencies"),(0,i.kt)("p",null,"In some cases, cleaning up or applying the effect after every render might create a performance problem. Let's look at a concrete example to see what ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," does:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// from a previous example above\nReact.useEffect1(() => {\n  open Document\n  document->setTitle(`You clicked ${Belt.Int.toString(count)} times!`)\n  None;\n}, [count]);\n")),(0,i.kt)("p",null,"Here, we pass ",(0,i.kt)("inlineCode",{parentName:"p"},"[count]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect1")," as a dependency. What does this mean? If the ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," is 5, and then our component re-renders with count still equal to 5, React will compare ",(0,i.kt)("inlineCode",{parentName:"p"},"[5]")," from the previous render and ",(0,i.kt)("inlineCode",{parentName:"p"},"[5]")," from the next render. Because all items within the array are the same (5 === 5), React would skip the effect. That\u2019s our optimization."),(0,i.kt)("p",null,"When we render with count updated to 6, React will compare the items in the ",(0,i.kt)("inlineCode",{parentName:"p"},"[5]")," array from the previous render to items in the ",(0,i.kt)("inlineCode",{parentName:"p"},"[6]")," array from the next render. This time, React will re-apply the effect because ",(0,i.kt)("inlineCode",{parentName:"p"},"5 !== 6"),". If there are multiple items in the array, React will re-run the effect even if just one of them is different."),(0,i.kt)("p",null,"This also works for effects that have a cleanup phase:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res"}),"// from a previous example above\nReact.useEffect1(() => {\n  let handleStatusChange = (status) => {\n    setState(_ => {\n      status.ChatAPI.isOnline ? Online : Offline\n    })\n  }\n\n  ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);\n  setState(_ => Loading);\n\n  let cleanup = () => {\n    ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)\n  }\n\n  Some(cleanup)\n}, [friendId]) // Only re-subscribe if friendId changes\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:")," If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders"),(0,i.kt)("p",null,"If you want to run an effect and clean it up only once (on mount and unmount), use ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useEffect0"),"."),(0,i.kt)("p",null,"If you are interested in more performance optmization related topics, have a look at the ReactJS ",(0,i.kt)("a",(0,a.Z)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-faq.html#performance-optimizations"}),"Performance Optimization Docs")," for more detailed infos."))}p.isMDXComponent=!0,p.frontmatter={title:"useEffect Hook",description:"Details about the useEffect React hook in ReScript",canonical:"/docs/react/latest/hooks-effect",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/hooks-effect.mdx"}},37075:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/hooks-effect",function(){return n(76882)}])}},function(e){e.O(0,[49774],(function(){return t=37075,e(e.s=t);var t}));var t=e.O();_N_E=t}]);