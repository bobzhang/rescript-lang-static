(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88257],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},37657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(22122),a=n(17375),o=n(67294),i=n(3905),c=(o.createElement,function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}}),l=c("Intro"),s=c("CodeTab"),u={};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usestate"},"useState"),(0,i.kt)(l,{mdxType:"Intro"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"React.useState")," returns a stateful value, and a function to update it.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"let (state, setState) = React.useState(_ => initialState)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var match = React.useState(function () {\n      return initialState;\n    });\n\nvar state = match[0];\n\nvar setState = match[1];\n"))),(0,i.kt)("p",null,"During the initial render, the returned state ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is the same as the value passed as the first argument (initialState)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," function can be passed down to other components as well, which is useful for e.g. setting the state of a parent component by its children."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"using-state-for-a-text-input"},"Using State for a Text Input"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'@react.component\nlet make = () => {\n  let (text, setText) = React.useState(_ => "");\n\n  let onChange = evt => {\n    ReactEvent.Form.preventDefault(evt)\n    let value = ReactEvent.Form.target(evt)["value"]\n    setText(_prev => value);\n  }\n\n  <div>\n    <input onChange value=text />\n  </div>\n};\n')),(0,i.kt)("h3",{id:"passing-setstate-to-a-child-component"},"Passing ",(0,i.kt)("inlineCode",{parentName:"h3"},"setState")," to a Child Component"),(0,i.kt)("p",null,"In this example, we are creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"ThemeContainer")," component that manages a ",(0,i.kt)("inlineCode",{parentName:"p"},"darkmode")," boolean state and passes the ",(0,i.kt)("inlineCode",{parentName:"p"},"setDarkmode")," function to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ControlPanel")," component to trigger the state changes."),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'// ThemeContainer.res\nmodule ControlPanel = {\n  @react.component\n  let make = (~setDarkmode, ~darkmode) => {\n    let onClick = evt => {\n      ReactEvent.Mouse.preventDefault(evt)\n      setDarkmode(prev => !prev)\n    }\n\n    let toggleText = "Switch to " ++ ((darkmode ? "light" : "dark") ++ " theme")\n\n    <div> <button onClick> {React.string(toggleText)} </button> </div>\n  }\n}\n\n@react.component\nlet make = (~content) => {\n  let (darkmode, setDarkmode) = React.useState(_ => false)\n\n  let className = darkmode ? "theme-dark" : "theme-light"\n\n  <div className>\n    <section>\n      <h1> {React.string("More Infos about ReScript")} </h1> content\n    </section>\n    <ControlPanel darkmode setDarkmode />\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'function ControlPanel(Props) {\n  var setDarkmode = Props.setDarkmode;\n  var darkmode = Props.darkmode;\n  var onClick = function (evt) {\n    evt.preventDefault();\n    return Curry._1(setDarkmode, (function (prev) {\n                  return !prev;\n                }));\n  };\n  var toggleText = "Switch to " + ((\n      darkmode ? "light" : "dark"\n    ) + " theme");\n  return React.createElement("div", undefined, React.createElement("button", {\n                  onClick: onClick\n                }, toggleText));\n}\n\nfunction ThemeContainer(Props) {\n  var content = Props.content;\n  var match = React.useState(function () {\n        return false;\n      });\n  var darkmode = match[0];\n  var className = darkmode ? "theme-dark" : "theme-light";\n  return React.createElement("div", {\n              className: className\n            }, React.createElement("section", undefined, React.createElement("h1", undefined, "More Infos about ReScript"), content), React.createElement(Playground$ControlPanel, {\n                  setDarkmode: match[1],\n                  darkmode: darkmode\n                }));\n}\n'))),(0,i.kt)("p",null,"Note that whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"setDarkmode")," is returning a new value (e.g. switching from ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"), it will cause a re-render for ",(0,i.kt)("inlineCode",{parentName:"p"},"ThemeContainer"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and the toggle text of its nested ",(0,i.kt)("inlineCode",{parentName:"p"},"ControlPanel"),"."),(0,i.kt)("h2",{id:"uncurried-version"},"Uncurried Version"),(0,i.kt)("p",null,"For cleaner JS output, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Uncurried.useState")," instead:"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),"let (state, setState) = React.Uncurried.useState(_ => 0)\n\nsetState(. prev => prev + 1)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"var match = React.useState(function () {\n      return 0;\n  });\n\nvar setState = match[1];\n\nsetState(function (prev) {\n      return prev + 1 | 0;\n    });\n"))))}p.isMDXComponent=!0,p.frontmatter={title:"useState Hook",description:"Details about the useState React hook in ReScript",canonical:"/docs/react/latest/hooks-state",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/hooks-state.mdx"}},58029:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/hooks-state",function(){return n(37657)}])}},function(e){e.O(0,[49774],(function(){return t=58029,e(e.s=t);var t}));var t=e.O();_N_E=t}]);