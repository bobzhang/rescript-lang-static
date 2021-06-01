(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32893],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},17375:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),o=function(t){var e=a.useContext(g),n=e;return t&&(n="function"===typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(g.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,g=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=o(n),d=r,m=c["".concat(g,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var g in e)hasOwnProperty.call(e,g)&&(s[g]=e[g]);s.originalType=t,s.mdxType="string"===typeof t?t:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96086:function(t){"use strict";var e=Object.assign.bind(Object);t.exports=e,t.exports.default=t.exports},81477:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var a,r=n(22122),i=n(17375),l=n(67294),s=n(3905),g=(l.createElement,a="Intro",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}),o={};function u(t){var e=t.components,n=(0,i.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"typedarraydataview"},"TypedArray.DataView"),(0,s.kt)(g,{mdxType:"Intro"},(0,s.kt)("p",null,"Provide bindings to JS typed array DataView.")),(0,s.kt)("h2",{id:"t"},"t"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"type t = Js_typed_array2.DataView.t;\n")),(0,s.kt)("h2",{id:"make"},"make"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let make: Js_typed_array.array_buffer => t;\n")),(0,s.kt)("h2",{id:"frombuffer"},"fromBuffer"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fromBuffer: Js_typed_array.array_buffer => t;\n")),(0,s.kt)("h2",{id:"frombufferoffset"},"fromBufferOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fromBufferOffset: (Js_typed_array.array_buffer, int) => t;\n")),(0,s.kt)("h2",{id:"frombufferrange"},"fromBufferRange"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let fromBufferRange: (Js_typed_array.array_buffer, ~offset: int, ~length: int) => t;\n")),(0,s.kt)("h2",{id:"buffer"},"buffer"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let buffer: t => Js_typed_array.array_buffer;\n")),(0,s.kt)("h2",{id:"bytelength"},"byteLength"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let byteLength: t => int;\n")),(0,s.kt)("h2",{id:"byteoffset"},"byteOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let byteOffset: t => int;\n")),(0,s.kt)("h2",{id:"getint8"},"getInt8"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getInt8: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getuint8"},"getUint8"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getUint8: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getint16"},"getInt16"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getInt16: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getint16littleendian"},"getInt16LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getInt16LittleEndian: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getuint16"},"getUint16"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getUint16: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getuint16littleendian"},"getUint16LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getUint16LittleEndian: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getint32"},"getInt32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getInt32: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getint32littleendian"},"getInt32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getInt32LittleEndian: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getuint32"},"getUint32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getUint32: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getuint32littleendian"},"getUint32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getUint32LittleEndian: (t, int) => int;\n")),(0,s.kt)("h2",{id:"getfloat32"},"getFloat32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getFloat32: (t, int) => float;\n")),(0,s.kt)("h2",{id:"getfloat32littleendian"},"getFloat32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getFloat32LittleEndian: (t, int) => float;\n")),(0,s.kt)("h2",{id:"getfloat64"},"getFloat64"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getFloat64: (t, int) => float;\n")),(0,s.kt)("h2",{id:"getfloat64littleendian"},"getFloat64LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let getFloat64LittleEndian: (t, int) => float;\n")),(0,s.kt)("h2",{id:"setint8"},"setInt8"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setInt8: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setuint8"},"setUint8"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setUint8: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setint16"},"setInt16"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setInt16: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setint16littleendian"},"setInt16LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setInt16LittleEndian: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setuint16"},"setUint16"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setUint16: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setuint16littleendian"},"setUint16LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setUint16LittleEndian: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setint32"},"setInt32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setInt32: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setint32littleendian"},"setInt32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setInt32LittleEndian: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setuint32"},"setUint32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setUint32: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setuint32littleendian"},"setUint32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setUint32LittleEndian: (t, int, int) => unit;\n")),(0,s.kt)("h2",{id:"setfloat32"},"setFloat32"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setFloat32: (t, int, float) => unit;\n")),(0,s.kt)("h2",{id:"setfloat32littleendian"},"setFloat32LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setFloat32LittleEndian: (t, int, float) => unit;\n")),(0,s.kt)("h2",{id:"setfloat64"},"setFloat64"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setFloat64: (t, int, float) => unit;\n")),(0,s.kt)("h2",{id:"setfloat64littleendian"},"setFloat64LittleEndian"),(0,s.kt)("pre",null,(0,s.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let setFloat64LittleEndian: (t, int, float) => unit;\n")))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/api/js/typed-array_data-view.mdx"}},67835:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/api/js/typed-array_data-view",function(){return n(81477)}])}},function(t){t.O(0,[49774],(function(){return e=67835,t(t.s=e);var e}));var e=t.O();_N_E=e}]);