(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21970],{22122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"===typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},29666:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(22122),o=t(17375),a=t(67294),i=t(3905),l=(a.createElement,function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}}),p=l("Intro"),s=l("Info"),u=l("Warn"),d=l("UrlBox"),c=l("Cite"),m=l("CodeTab"),k={};function h(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markdown-guide"},"Markdown Guide"),(0,i.kt)(p,{mdxType:"Intro"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rescript-lang.org")," defines a set of markdown components to be able to provide a nice\nlooking document when rendered to a webpage. This document gives an overview over\nall available components and demonstrates some use-cases.")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"We use a toolset called ",(0,i.kt)("a",(0,r.Z)({parentName:"p"},{href:"https://mdxjs.com"}),"mdxjs")," to parse and interpret\n",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," files within the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/")," directory.  The default set for our markdown\ncomponents is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Markdown.default")," binding. Each layout in our\ncodebase injects the components via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mdx.Provider")," component, kinda like\nthis:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re"}),"let components = Markdown.default;\n\n<Mdx.Provider components>\n  {/*...*/}\n</Mdx>\n")),(0,i.kt)("p",null,"So the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mdx.Provider")," makes sure that our markdown document looks pretty. Make\nsure to make use of them!"),(0,i.kt)("h2",{id:"markdown-jsx-basics"},"Markdown JSX Basics"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"JSX")," notation inside every ",(0,i.kt)("inlineCode",{parentName:"p"},".md")," / ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," file. We also inject some\nuseful components in there to give your document more visual appeal. There's two\nways on how you can pass in JSX children within the markdown syntax:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a markdown string"),(0,i.kt)("li",{parentName:"ul"},"As a plain string")),(0,i.kt)("p",null,"Whenever you ",(0,i.kt)("strong",{parentName:"p"},"insert a newline")," after the beginning tag and before the closing tag,\nthe content will be interpreted as ",(0,i.kt)("strong",{parentName:"p"},"nested markdown"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),'<div>\n\nThis **thing** will be parsed as markdown, "thing" will therefore be bold\n\n</div>\n')),(0,i.kt)("p",null,"If you leave them out, the content will be a ",(0,i.kt)("strong",{parentName:"p"},"plain string")," without further formatting:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"<div>\n**this will not be bold**\n</div>\n")),(0,i.kt)("p",null,"Keep this in mind when editing content."),(0,i.kt)("h2",{id:"text-components"},"Text Components"),(0,i.kt)("h3",{id:"info--blockquote"},"Info / Blockquote"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Info/>")," component is useful for putting notes into a highlighted\nsection. You can use it via JSX syntax..."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"<Info> This is a info box </Info>\n")),(0,i.kt)("p",null,"...or via blockquote syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"> This is\n> a info box\n")),(0,i.kt)(s,{mdxType:"Info"}," This is a info box "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," component is also really useful if you want its children to be\nparsed as markdown. You can even pass in html elements."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"<Info>\n\n**Note:** Some text\n\n</Info>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want to use markdown content within a component, make sure to\nadd a newline between the content and the opening / closing JSX tag!")),(0,i.kt)("h3",{id:"warn"},"Warn"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Warn/>")," component is a useful tool to point out version issues and\nsimilar information."),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"<Warn>\n\n**Warning:** This might look dangerous\n\n</Warn>\n")),(0,i.kt)(u,{mdxType:"Warn"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")," This might look dangerous")),(0,i.kt)("h3",{id:"urlbox"},"UrlBox"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),'<UrlBox href="/docs/manual/latest/introduction" text="Language Manual">\n\nThis is how you define a UrlBox\n\n</Url>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)(d,{href:"https://rescript-lang.org",text:"rescript-lang.org",mdxType:"UrlBox"},"Check out the officially deployed version of this website (via absolute URL)"),(0,i.kt)(d,{href:"/md-kitchensink",text:"This is a link",mdxType:"UrlBox"},(0,i.kt)("p",null,"We also support markdown inside this component.\nRelative links will be handled by NextJS Links."),(0,i.kt)("p",null,"Try ",(0,i.kt)("strong",{parentName:"p"},"multiple paragraphs")," for instance!")),(0,i.kt)("h3",{id:"cite"},"Cite"),(0,i.kt)(c,{author:"No Designer Ever",mdxType:"Cite"},(0,i.kt)("p",null,'"Always, always make the logo bigger, no matter what."')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),'<Cite author="No Designer Ever">\n\n"Always, always make the logo bigger, no matter what."\n\n</Cite>\n')),(0,i.kt)("h3",{id:"intro--chapter-hero"},"Intro / Chapter Hero"),(0,i.kt)("p",null,"This component is useful to ease the user into the topic.  Use it for the first\nparagraph and give a quick overview on what the document is about. "),(0,i.kt)(p,{mdxType:"Intro"},(0,i.kt)("p",null,"Hinter eines Baumes Rinde wohnt die Made mit dem Kinde, sie ist Witwe, denn der\nGatte, den sie hatte, viel vom Blatte. Diente so auf dieser Weise einer Ameise\nals Speise.")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"<Intro>\n\nYour hero text\n\n</Intro>\n")),(0,i.kt)("h2",{id:"codeblocks"},"Codeblocks"),(0,i.kt)("p",null,"Codeblocks are represented via ","`","`","`"," codefences.\nFollowing languages are available: ",(0,i.kt)("inlineCode",{parentName:"p"},"res"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"re"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'let a = "This is a Reason codeblock"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"The default language is set to `text` and will not provide any syntax\nhighlighting\n")),(0,i.kt)("h3",{id:"highlighting-lines"},"Highlighting lines"),(0,i.kt)("p",null,"To highlight codelines in your code snippet, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"{range}")," meta parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),"```res {1,4-5}\n\nlet a = 1\nlet b = 2\n\nswitch a => {\n| 1 => a + b\n| 2 => a - b\n| _ => b\n}\n```\n")),(0,i.kt)("p",null,"which will render:"),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"{1,4-5}","{1,4-5}":!0}),"let a = 1\nlet b = 2\n\nswitch a => {\n| 1 => a + b\n| 2 => a - b\n| _ => b\n}\n")),(0,i.kt)("h2",{id:"codetabs"},"CodeTabs"),(0,i.kt)("p",null,"For cases where you want to show a single codeblock with multiple syntaxes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<CodeToggle>")," component.\nMake sure to leave a newline between the ",(0,i.kt)("inlineCode",{parentName:"p"},"<CodeToggle>")," JSX tags, otherwise codeblock children won't be recognized!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{}),'<CodeTab labels={["ReScript", "JS Output"]}>\n\n```res\nlet a = "Some ReScript code"\n```\n\n```js {3}\nvar a = "Some JavaScript code";\n\nvar highlighted = "yep"\n```\n\n</CodeTab>\n')),(0,i.kt)("p",null,"Renders to following output:"),(0,i.kt)(m,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res"}),'let a = "Some ReScript code"\nswitch myValue {\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),'var a = "Some JavaScript code";\n\nvar highlighted = "Also supports highlighting ranges";\n'))))}h.isMDXComponent=!0,h.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/markdown-guide.mdx"}},1335:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/markdown-guide",function(){return t(29666)}])}},function(e){e.O(0,[49774],(function(){return n=1335,e(e.s=n);var n}));var n=e.O();_N_E=n}]);