(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(f,p(p({ref:t},s),{},{components:n})):a.a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/breakpoints-f83515dda0bee84228765e105f9a6c8c.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(109)),o={id:"breakpoints",title:"Breakpoints"},p={unversionedId:"breakpoints",id:"breakpoints",isDocsHomePage:!1,title:"Breakpoints",description:"Defining Breakpoints",source:"@site/docs/guides-breakpoints.md",slug:"/breakpoints",permalink:"/react-raster-docs/docs/breakpoints",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-raster-docs/docs/getting-started"},next:{title:"Typescript",permalink:"/react-raster-docs/docs/typescript"}},c=[{value:"Defining Breakpoints",id:"defining-breakpoints",children:[]},{value:"Props matching Breakpoints",id:"props-matching-breakpoints",children:[]}],s={toc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"defining-breakpoints"},"Defining Breakpoints"),Object(i.b)("p",null,"Breakpoints is an array of numbers starting with ",Object(i.b)("inlineCode",{parentName:"p"},"0"),".\nEvery number defines a ",Object(i.b)("inlineCode",{parentName:"p"},"min-width"),"."),Object(i.b)("h4",{id:"default-breakpoints"},"Default Breakpoints"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"[0, 432, 768, 1024, 1200, 1400]\n")),Object(i.b)("h3",{id:"props-matching-breakpoints"},"Props matching Breakpoints"),Object(i.b)("p",null,"Often you want to bind props to certain breakpoints.\nYou can achieve this by defining an ",Object(i.b)("strong",{parentName:"p"},"array")," instead of a single string or number for your prop.\nAn array-element\u2019s index matches the index of the breakpoint.\nIf the prop-array is shorter than the breakpoints-array, the last value is adapted for all larger breakpoints."),Object(i.b)("p",null,"This simple example defines a grid with a left padding:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Graphic to illustrate how the elements of an props-array match breakpoints.",src:n(173).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"0px \u2014 499px: 3vw"),Object(i.b)("li",{parentName:"ul"},"500px \u2014 999px: 2vw"),Object(i.b)("li",{parentName:"ul"},"1000px \u2014 infinite: 1vw")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Almost all props support this feature."),"\nLook up the props-specification for ",Object(i.b)("inlineCode",{parentName:"p"},"Grid")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Box")," below."))}l.isMDXComponent=!0}}]);