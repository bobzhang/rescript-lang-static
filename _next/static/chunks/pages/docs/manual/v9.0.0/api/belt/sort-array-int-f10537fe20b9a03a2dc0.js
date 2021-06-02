(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38521],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},97081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r,a=n(22122),o=n(17375),i=n(67294),l=n(3905),s=(i.createElement,r="Intro",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sortarrayint"},"SortArrayInt"),(0,l.kt)(s,{mdxType:"Intro"},(0,l.kt)("p",null,"This is a specialized module for ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.SortArray"),", the docs in that module also applies here, except the comparator is fixed and inlined.")),(0,l.kt)("h2",{id:"element"},"element"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type element = int\n")),(0,l.kt)("h2",{id:"strictlysortedlength"},"strictlySortedLength"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let strictlySortedLength: array<element> => int\n")),(0,l.kt)("p",null,"The same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.SortArray.strictlySortedLength")," except the comparator is fixed."),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"+n")," means increasing order ",(0,l.kt)("inlineCode",{parentName:"p"},"-n")," means negative order."),(0,l.kt)("h2",{id:"issorted"},"isSorted"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isSorted: array<element> => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sorted(xs)")," return true if ",(0,l.kt)("inlineCode",{parentName:"p"},"xs")," is in non strict increasing order."),(0,l.kt)("h2",{id:"stablesortinplace"},"stableSortInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let stableSortInPlace: array<element> => unit\n")),(0,l.kt)("p",null,"The same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.SortArray.stableSortInPlaceBy")," except the comparator is fixed."),(0,l.kt)("h2",{id:"stablesort"},"stableSort"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let stableSort: array<element> => array<element>\n")),(0,l.kt)("p",null,"The same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.SortArray.stableSortBy")," except the comparator is fixed."),(0,l.kt)("h2",{id:"binarysearch"},"binarySearch"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,a.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let binarySearch: (array<element>, element) => int\n")),(0,l.kt)("p",null,"If value is not found and value is less than one or more elements in array, the negative number returned is the bitwise complement of the index of the first element that is larger than value."),(0,l.kt)("p",null,"If value is not found and value is greater than all elements in array, the negative number returned is the bitwise complement of (the index of the last element plus 1)"),(0,l.kt)("p",null,"for example, if ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," is smaller than all elements return ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," since ",(0,l.kt)("inlineCode",{parentName:"p"},"lnot(-1) = 0")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," is larger than all elements return ",(0,l.kt)("inlineCode",{parentName:"p"},"- (len + 1)")," since ",(0,l.kt)("inlineCode",{parentName:"p"},"lnot(-(len+1)) = len"),"."))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/api/belt/sort-array-int.mdx"}},20608:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/api/belt/sort-array-int",function(){return n(97081)}])}},function(e){e.O(0,[49774],(function(){return t=20608,e(e.s=t);var t}));var t=e.O();_N_E=t}]);