(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(109)),c={id:"styling",title:"Styling"},i={unversionedId:"styling",id:"styling",isDocsHomePage:!1,title:"Styling",description:"Grid and Box are styled by Styled-Components via the prop css.",source:"@site/docs/guides-styling.md",slug:"/styling",permalink:"/react-raster-docs/docs/styling",version:"current",sidebar:"docs",previous:{title:"Breakpoints",permalink:"/react-raster-docs/docs/breakpoints"},next:{title:"Typescript",permalink:"/react-raster-docs/docs/typescript"}},l=[{value:"Style by Breakpoint",id:"style-by-breakpoint",children:[{value:"ClassName based on <code>index</code>",id:"classname-based-on-index",children:[]},{value:"ClassName based on <code>pixel</code>",id:"classname-based-on-pixel",children:[]},{value:"Style based on Array",id:"style-based-on-array",children:[]}]},{value:"Style-Object",id:"style-object",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Grid")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," are styled by ",Object(o.b)("a",{parentName:"p",href:"https://styled-components.com/"},"Styled-Components")," via the prop ",Object(o.b)("inlineCode",{parentName:"p"},"css"),". "),Object(o.b)("h2",{id:"style-by-breakpoint"},"Style by Breakpoint"),Object(o.b)("p",null,"The current breakpoint is reflected in two classes of the ",Object(o.b)("inlineCode",{parentName:"p"},"Grid"),"-component.\nOne is named based on ",Object(o.b)("strong",{parentName:"p"},"index"),"\nThe other is named based on ",Object(o.b)("strong",{parentName:"p"},"pixel")),Object(o.b)("h3",{id:"classname-based-on-index"},"ClassName based on ",Object(o.b)("inlineCode",{parentName:"h3"},"index")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"    <Box \n        css={`\n            &&.bp-1,\n            &&.bp-2,\n            &&.bp-3 {\n                background: red;\n            }\n            &&.bp-4,\n            &&.bp-5,\n            &&.bp-6 {\n                background: blue;\n            }\n        `}\n    />\n")),Object(o.b)("h3",{id:"classname-based-on-pixel"},"ClassName based on ",Object(o.b)("inlineCode",{parentName:"h3"},"pixel")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"    <Box \n        css={`\n            &&.bp-0,\n            &&.bp-432,\n            &&.bp-768 {\n                background: red;\n            }\n            &&.bp-1024,\n            &&.bp-1200,\n            &&.bp-1400 {\n                background: blue;\n            }\n        `}\n    />\n")),Object(o.b)("h3",{id:"style-based-on-array"},"Style based on Array"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"    <Box \n        css={[\n            `background: red;`,\n            `background: red;`,\n            `background: red;`,\n            `background: blue;`, // from width 1024 on, the background is blue\n        ]}\n    />\n")),Object(o.b)("h2",{id:"style-object"},"Style-Object"),Object(o.b)("p",null,"Alternatively the default ",Object(o.b)("inlineCode",{parentName:"p"},"style"),"-prop can be used."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"    <Box \n        style={{ background: 'red' }}\n    />\n")))}b.isMDXComponent=!0},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=r,y=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return t?a.a.createElement(y,i(i({ref:n},s),{},{components:t})):a.a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);