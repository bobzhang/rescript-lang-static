(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49225],{59682:function(e,t,r){"use strict";r.d(t,{ZP:function(){return k},PV:function(){return _}});var n=r(60739),a=r(84486),l=r(43723),i=r(89620),o=r(45841),c=r(62024),m=r(67294);var s=function(e){var t=e.children;return m.createElement("button",{className:"transition-colors duration-200 inline-block text-base text-fire hover:text-white hover:bg-fire rounded border border-fire-70 px-5 py-2"},t)},u=r(8600),d=r(21668),f=r(94216),g=r(70762),E=r(4285),p=r(88200),v=r(66397),h=r(37177),_="https://res.cloudinary.com/dmm9n7v9f/image/upload/v1598616442/Reason%20Association/rescript-lang.org/Art-3-rescript-launch_ovoibg.jpg",b=" "+String.fromCharCode(183)+" ";function w(e){var t=e.badge,r=1!==t?"bg-turtle":"bg-orange",n=h.Ct.toString(t);return m.createElement("div",{className:r+" flex items-center h-6 font-medium tracking-tight text-gray-80-tr text-14 px-2 rounded-sm"},m.createElement("div",void 0,m.createElement("img",{className:"h-3 block mr-1",src:"/static/star.svg"})),m.createElement("div",void 0,n))}function x(e){var t=e.selected,r=e.onSelected;return m.createElement("div",{className:"text-16 w-full flex items-center justify-between text-gray-60"},E.UI([0,1],(function(e){var n=t===e,a=e?"Archived":"All";return m.createElement("div",{key:a,className:(n?"bg-gray-10 text-gray-80 rounded py-1":"hover:cursor-pointer hover:text-gray-80")+"  px-4 inline-block",onClick:function(t){return t.preventDefault(),c._1(r,e)}},a)})))}function y(e){var t=e.previewImg,r=e.title,n=e.category,a=e.badge,c=e.date,s=e.slug,u=void 0!==r?r:"Unknown Title",d="absolute top-0 h-full w-full object-cover";return m.createElement("section",{className:"h-full"},m.createElement("div",{className:"relative"},void 0!==a?m.createElement("div",{className:"absolute z-10 bottom-0 mb-4 -ml-2"},m.createElement(w,{badge:a})):null,m.createElement(l.rU.make,{href:"/blog/[slug]",as:"/blog/"+s,children:m.createElement("a",{className:"relative block mb-4 pt-9/16"},void 0!==t?m.createElement("img",{className:d,src:t}):m.createElement("img",{className:d,src:_}))})),m.createElement("div",{className:"px-2"},m.createElement(l.rU.make,{href:"/blog/[slug]",as:"/blog/"+s,children:m.createElement("a",void 0,m.createElement("h2",{className:i.H3.$$default},u))}),m.createElement("div",{className:"text-gray-60 text-14"},void 0!==n?m.createElement(m.Fragment,void 0,n," \xb7 "):null,o.FC.toDayMonthYear(c))))}function N(e){var t=e.previewImg,r=e.title,n=e.author,a=e.badge,c=e.date,u=e.category,d=e.firstParagraph,f=e.slug,g=void 0!==r?r:"Unknown Title",E=void 0!==d?d:"",p=m.createElement("img",{className:"h-full w-full rounded-full",src:n.imgUrl}),v="absolute top-0 h-full w-full object-cover";return m.createElement("section",{className:"flex sm:px-4 md:px-8 lg:px-0 flex-col justify-end lg:flex-row sm:items-center h-full"},m.createElement("div",{className:"w-full h-full sm:self-start md:self-auto",style:{maxHeight:"25.4375rem"}},m.createElement(l.rU.make,{href:"/blog/[slug]",as:"/blog/"+f,children:m.createElement("a",{className:"relative block pt-2/3"},void 0!==a?m.createElement("div",{className:"absolute z-10 top-0 mt-10 ml-4 lg:-ml-4"},m.createElement(w,{badge:a})):null,void 0!==t?m.createElement("img",{className:v,src:t}):m.createElement("img",{className:v,src:_}))})),m.createElement("div",{className:"relative px-4 lg:self-auto sm:pt-12 md:px-20 sm:self-start md:-mt-20 mt-4 bg-white lg:w-full lg:pt-0 lg:mt-0 lg:px-0 lg:ml-12"},m.createElement("div",{className:"max-w-400 "},m.createElement("h2",{className:i.H2.$$default},g),m.createElement("div",{className:"mb-6"},m.createElement("div",{className:"flex items-center font-medium text-gray-40 text-sm mt-2 mb-5"},m.createElement("div",{className:"inline-block w-4 h-4 mr-2"},p),m.createElement("div",void 0,m.createElement("a",{className:"hover:text-gray-80",href:"https://twitter.com/"+n.twitter,rel:"noopener noreferrer",target:"_blank"},n.fullname),void 0!==u?m.createElement(m.Fragment,void 0,b,u,b):b,o.FC.toDayMonthYear(c))),m.createElement("p",{className:"text-gray-90 antialiased tracking-tight text-16"},E))),m.createElement(l.rU.make,{href:"/blog/[slug]",as:"/blog/"+f,children:m.createElement("a",void 0,m.createElement(s,{children:"Read Article"}))})))}function k(e){var t,r=e.posts,l=m.useState((function(){return 0})),i=l[1],o=l[0];if(0===r.length)t=m.createElement("div",{className:"mt-8"},m.createElement(g.H1.make,{children:"Blog not yet available"}),m.createElement(g.uU.make,{children:"This blog is currently in the works."}));else{var s,h=o?e.archived:r;if(0!==h.length){var _=E.BP(h,0),b=h.slice(1),w={title:_.frontmatter.title,author:_.frontmatter.author,date:f.Z(_.frontmatter.date),slug:d.Ym(_.path)},k=v.UA(_.frontmatter.previewImg);void 0!==k&&(w.previewImg=k);var S=v.UA(_.frontmatter.badge);void 0!==S&&(w.badge=v.xt(S));var U=v.UA(_.frontmatter.description);void 0!==U&&(w.firstParagraph=U);var I=m.createElement("div",{className:"w-full mb-24 lg:px-8 xl:px-0"},m.createElement(N,w)),R=0!==b.length?m.createElement("div",{className:"px-4 md:px-8 xl:px-0 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-20 row-gap-12 md:row-gap-24 w-full"},b.map((function(e){var t=e.frontmatter.badge,r={title:e.frontmatter.title,author:e.frontmatter.author,date:f.Z(e.frontmatter.date),slug:d.Ym(e.path),key:e.path},n=v.UA(e.frontmatter.previewImg);void 0!==n&&(r.previewImg=n);var a=null===t?void 0:v.G(t);return void 0!==a&&(r.badge=v.xt(a)),m.createElement(y,r)}))):null;s=m.createElement(m.Fragment,void 0,I,R)}else s=m.createElement("div",void 0,"No posts for this category available...");t=m.createElement(m.Fragment,void 0,m.createElement("div",{className:"hidden sm:flex justify-center "},m.createElement("div",{className:"my-16 w-full",style:{maxWidth:"12rem"}},m.createElement(x,{selected:o,onSelected:function(e){return c._1(i,(function(t){return e}))}}))),s)}var D=m.useState((function(){return!1}));return m.createElement(m.Fragment,void 0,m.createElement(a.S,{description:"News, Announcements, Release Notes and more",title:"Blog | ReScript Documentation"}),m.createElement("div",{className:"mt-16 pt-2"},m.createElement("div",{className:"text-gray-80 text-lg"},m.createElement(p.S,{overlayState:D}),m.createElement("div",{className:"flex justify-center overflow-hidden"},m.createElement("main",{className:"min-w-320 lg:align-center w-full lg:px-0 max-w-1280 pb-48"},m.createElement(n.zt.make,{components:g.rH,children:m.createElement("div",{className:"flex justify-center"},m.createElement("div",{className:"w-full",style:{maxWidth:"66.625rem"}},t))}))),m.createElement(u.S,{}))))}},21668:function(e,t,r){"use strict";r.d(t,{Ym:function(){return n}});r(54171),r(19486),r(15436),r(93906),r(94216),r(34155),r(4285),r(66243),r(66397),r(9675),r(37177);function n(e){return e.replace(/^(archive\/)?\d\d\d\d-\d\d-\d\d-(.+)\.mdx$/,"$2")}},37177:function(e,t,r){"use strict";r.d(t,{Ct:function(){return u},Jx:function(){return g}});var n=r(96156),a=r(15927),l=r(4285),i=r(66243),o=r(23832),c=r(42333),m=r(70240),s=[{username:"hongbo",fullname:"Hongbo Zhang",role:"Compiler & Build System",imgUrl:"https://pbs.twimg.com/profile_images/1369548222314598400/E2y46vrB_400x400.jpg",twitter:"bobzhang1988"},{username:"chenglou",fullname:"Cheng Lou",role:"Syntax & Tools",imgUrl:"https://pbs.twimg.com/profile_images/554199709909131265/Y5qUDaCB_400x400.jpeg",twitter:"_chenglou"},{username:"maxim",fullname:"Maxim Valcke",role:"Syntax Lead",imgUrl:"https://pbs.twimg.com/profile_images/970271048812974080/Xrr8Ob6J_400x400.jpg",twitter:"_binary_search"},{username:"ryyppy",fullname:"Patrick Ecker",role:"Documentation",imgUrl:"https://pbs.twimg.com/profile_images/1388426717006544897/B_a7D4GF_400x400.jpg",twitter:"ryyppy"},{username:"rickyvetter",fullname:"Ricky Vetter",role:"ReScript & React",imgUrl:"https://pbs.twimg.com/profile_images/541111032207273984/DGsZmmfr_400x400.jpeg",twitter:"rickyvetter"},{username:"made_by_betty",fullname:"Bettina Steinbrecher",role:"Brand / UI / UX",imgUrl:"https://res.cloudinary.com/dmm9n7v9f/image/upload/v1598547954/Reason%20Association/betty-blog-img_rmckam.jpg",twitter:"made_by_betty"},{username:"rescript-team",fullname:"ReScript Team",role:"Core Development",imgUrl:"https://pbs.twimg.com/profile_images/1358354824660541440/YMKNWE1V_400x400.png",twitter:"rescriptlang"},{username:"rescript-association",fullname:"ReScript Association",role:"Foundation",imgUrl:"https://pbs.twimg.com/profile_images/1045362176117100545/MioTQoTp_400x400.jpg",twitter:"ReScriptAssoc"}];var u={toString:function(e){switch(e){case 0:return"Release";case 1:return"Testing";case 2:return"Preview";case 3:return"Roadmap"}}};var d=c.Ue("BlogFrontmatter.AuthorNotFound");function f(e,t,r){var n=t.find((function(e){return e.username===r}));if(void 0!==n)return n;throw{RE_EXN_ID:d,_1:"Couldn't find author \""+r+'" in field '+e,Error:new Error}}function g(e){var t;try{t={author:f("author",s,o.EP("author",o.Z_,e)),co_authors:i.tj(o.jt((function(e){return o.EP("co-authors",(function(e){return function(e,t,r){return o.wE((function(r){return[f(e,t,o.Z_(r))]}),(function(r){return l.UI(o.IX(o.Z_,r),(function(r){return f(e,t,r)}))}))(r)}("co-authors",s,e)}),e)}),e),[]),date:o.EP("date",o.Z_,e),previewImg:a.Yo(o.jt((function(e){return o.EP("previewImg",o.Z_,e)}),e)),articleImg:a.Yo(o.jt((function(e){return o.EP("articleImg",o.Z_,e)}),e)),title:o.EP("title",o.Z_,e),badge:a.Yo(o.jt((function(e){return function(e){var t=e.toLowerCase();switch(t){case"preview":return 2;case"release":return 0;case"roadmap":return 3;case"testing":return 1;default:throw{RE_EXN_ID:o._9,_1:'Unknown category "'+t+'"',Error:new Error}}}(o.EP("badge",o.Z_,e))}),e)),description:o.AG((function(e){return o.EP("description",o.Z_,e)}),e)}}catch(c){var r=m.UW(c);if(r.RE_EXN_ID===o._9)return(0,n.Z)({TAG:1,_0:r._1},Symbol.for("name"),"Error");if(r.RE_EXN_ID===d)return(0,n.Z)({TAG:1,_0:r._1},Symbol.for("name"),"Error");throw r}return(0,n.Z)({TAG:0,_0:t},Symbol.for("name"),"Ok")}},94216:function(e,t,r){"use strict";function n(e){return new Date(e.replace(/-/g,"/"))}r.d(t,{Z:function(){return n}})},8600:function(e,t,r){"use strict";r.d(t,{S:function(){return c}});var n=r(29826),a=r(43723),l=r(67294),i=r(70762);function o(e){var t=e.title,r=e.children;return l.createElement("div",void 0,l.createElement("span",{className:"block text-gray-60 tracking-wide text-14 uppercase mb-4"},t),r)}var c=function(e){var t="hover:underline hover:pointer",r="hover:pointer hover:text-gray-60-tr";return l.createElement("footer",{className:"flex justify-center border-t border-gray-10"},l.createElement("div",{className:"flex flex-col md:flex-row justify-between max-w-1280 w-full px-8 py-16 text-gray-95 "},l.createElement("div",void 0,l.createElement("img",{className:"w-40 mb-5",src:"/static/rescript_logo_black.svg"}),l.createElement("div",{className:"text-16"},l.createElement("p",void 0,"\xa9 2020 The ReScript Project"),l.createElement("p",void 0,"Software distribution powered by ",l.createElement(i.A.make,{href:"https://www.keycdn.com/",target:"_blank",children:"KeyCDN"}),"."))),l.createElement("div",{className:"flex flex-col space-y-16 md:flex-row mt-16 md:mt-0 md:ml-16 md:space-y-0 md:space-x-16"},l.createElement(o,{title:"About",children:l.createElement("ul",{className:"text-16 text-gray-80-tr space-y-2"},l.createElement("li",void 0,l.createElement(a.rU.make,{href:"/community#core-team",children:l.createElement("a",{className:t},"Team")})),l.createElement("li",void 0,l.createElement("a",{className:t,href:"https://rescript-association.org",target:"_blank"},"ReScript Association")))}),l.createElement(o,{title:"Find us on",children:l.createElement("div",{className:"flex space-x-3 text-gray-100"},l.createElement("a",{className:r,href:"https://github.com/rescript-lang",rel:"noopener noreferrer",target:"_blank"},l.createElement(n.Ey.make,{className:"w-6 h-6"})),l.createElement("a",{className:r,href:"https://twitter.com/rescriptlang",rel:"noopener noreferrer",target:"_blank"},l.createElement(n.tL.make,{className:"w-6 h-6"})),l.createElement("a",{className:r,href:"https://forum.rescript-lang.org",rel:"noopener noreferrer",target:"_blank"},l.createElement(n.o2.make,{className:"w-6 h-6"})))}))))}},89620:function(e,t,r){"use strict";r.d(t,{r:function(){return n},H1:function(){return a},H2:function(){return l},H3:function(){return i}});var n={inline:"no-underline border-b border-gray-95 hover:border-bs-purple text-inherit",standalone:"no-underline text-fire"},a={$$default:"text-gray-95 font-medium tracking-tighter text-42 leading-2"},l={$$default:"text-gray-95 font-semibold text-42 leading-2"},i={$$default:"text-gray-95 font-semibold text-21 leading-2"}},23832:function(e,t,r){"use strict";r.d(t,{_9:function(){return m},Xg:function(){return s},G6:function(){return u},Z_:function(){return d},AG:function(){return f},IX:function(){return g},EP:function(){return E},jt:function(){return p},wE:function(){return v},Wc:function(){return h}});var n=r(73455),a=(r(17726),r(62024)),l=r(92285),i=r(66397),o=r(42333),c=r(70240);var m=o.Ue("Json_decode.DecodeError");function s(e){if("boolean"===typeof e)return e;throw{RE_EXN_ID:m,_1:"Expected boolean, got "+JSON.stringify(e),Error:new Error}}function u(e){var t,r=function(e){if("number"===typeof e)return e;throw{RE_EXN_ID:m,_1:"Expected number, got "+JSON.stringify(e),Error:new Error}}(e);if(t=r,Number.isFinite(t)&&Math.floor(t)===t)return r;throw{RE_EXN_ID:m,_1:"Expected integer, got "+JSON.stringify(e),Error:new Error}}function d(e){if("string"===typeof e)return e;throw{RE_EXN_ID:m,_1:"Expected string, got "+JSON.stringify(e),Error:new Error}}function f(e,t){return null===t?null:a._1(e,t)}function g(e,t){if(Array.isArray(t)){for(var r=t.length,n=new Array(r),l=0;l<r;++l){var i;try{i=a._1(e,t[l])}catch(s){var o=c.UW(s);if(o.RE_EXN_ID===m)throw{RE_EXN_ID:m,_1:o._1+"\n\tin array at index "+String(l),Error:new Error};throw o}n[l]=i}return n}throw{RE_EXN_ID:m,_1:"Expected array, got "+JSON.stringify(t),Error:new Error}}function E(e,t,r){if("object"!==typeof r||Array.isArray(r)||null===r)throw{RE_EXN_ID:m,_1:"Expected object, got "+JSON.stringify(r),Error:new Error};var n=l.U2(r,e);if(void 0===n)throw{RE_EXN_ID:m,_1:"Expected field '"+e+"'",Error:new Error};try{return a._1(t,i.xt(n))}catch(s){var o=c.UW(s);if(o.RE_EXN_ID===m)throw{RE_EXN_ID:m,_1:o._1+"\n\tat field '"+e+"'",Error:new Error};throw o}}function p(e,t){try{return i.G(a._1(e,t))}catch(n){var r=c.UW(n);if(r.RE_EXN_ID===m)return;throw r}}function v(e,t){var r={hd:e,tl:{hd:t,tl:0}};return function(e){return function(e,t){for(var r=e,l=0;;){var i=l,o=r;if(!o){var s=n.OD(i);throw{RE_EXN_ID:m,_1:"All decoders given to oneOf failed. Here are all the errors: "+s+". And the JSON being decoded: "+JSON.stringify(t),Error:new Error}}try{return a._1(o.hd,t)}catch(d){var u=c.UW(d);if(u.RE_EXN_ID===m){l={hd:u._1,tl:i},r=o.tl;continue}throw u}}}(r,e)}}function h(e,t,r){try{return a._1(t,r)}catch(l){var n=c.UW(l);if(n.RE_EXN_ID===m)return e;throw n}}},33596:function(){},54171:function(){},19486:function(){}}]);