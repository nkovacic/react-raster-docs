(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(n),O=a,j=p["".concat(i,".").concat(O)]||p[O]||m[O]||b;return n?r.a.createElement(j,l(l({ref:t},c),{},{components:n})):r.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=O;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<b;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(109));const b={id:"grid",title:"Grid"},i={unversionedId:"grid",id:"grid",isDocsHomePage:!1,title:"Grid",description:"All props are optional. Generic Props like Events and HTML-Attributes are passed automatically.",source:"@site/docs/api-grid.md",slug:"/grid",permalink:"/react-raster-docs/docs/grid",version:"current",sidebar:"docs",previous:{title:"Polyfill for CSS Grid-Layout",permalink:"/react-raster-docs/docs/polyfill"},next:{title:"Box",permalink:"/react-raster-docs/docs/box"}},l=[],d={toc:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All props are optional. ",Object(r.b)("inlineCode",{parentName:"p"},"Generic Props")," like Events and HTML-Attributes are passed automatically."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Name")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Type")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Default")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"alignX")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Horizontal align of child elements. Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"left"),", ",Object(r.b)("inlineCode",{parentName:"td"},"center"),", ",Object(r.b)("inlineCode",{parentName:"td"},"right"),", ",Object(r.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(r.b)("inlineCode",{parentName:"td"},"space-around"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"alignY")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Vertical align of child elements. Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"top"),", ",Object(r.b)("inlineCode",{parentName:"td"},"center"),", ",Object(r.b)("inlineCode",{parentName:"td"},"bottom"),", ",Object(r.b)("inlineCode",{parentName:"td"},"stretch"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"bottom")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Bottom padding of the Grid.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"breakpoints")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"[0, 432, 768, 1024, 1200, 1400]")),Object(r.b)("td",{parentName:"tr",align:"left"},"Breakpoints in Pixels, in ascending order starting with zero.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"colspan")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"Number")," ",Object(r.b)("inlineCode",{parentName:"td"},"Number[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",{parentName:"tr",align:"left"},"Number of columns.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"component")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ReactElement")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Render a React Component instead of a normal Grid. Useful for Framer Motion.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"control")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"Boolean")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:"left"},"Enable visual control via ESC-Key.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"controlColor")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Custom color for the grid-control.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"css")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Custom styles with styled-components.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"cssMode")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"gutterX")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0px'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Horizontal gutter.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"gutterY")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0px'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Verical gutter.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"innerHTML")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"React\u2019s ",Object(r.b)("inlineCode",{parentName:"td"},"dangerouslySetInnerHTML")," simplified")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"left")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Left padding of the Grid.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"order")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"Number")," ",Object(r.b)("inlineCode",{parentName:"td"},"Number[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"CSS Grid-Layout/Flexbox order-property")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"position")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'relative'")),Object(r.b)("td",{parentName:"tr",align:"left"},"CSS-position")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"ref")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"React Ref-Object")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined")),Object(r.b)("td",{parentName:"tr",align:"left"},"Pass a ref.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"right")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Right padding of the Grid.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"tag")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'div'")),Object(r.b)("td",{parentName:"tr",align:"left"},"HTML-Tag")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"top")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"String")," ",Object(r.b)("inlineCode",{parentName:"td"},"Strings[]")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"'0'")),Object(r.b)("td",{parentName:"tr",align:"left"},"Top padding of the Grid.")))))}c.isMDXComponent=!0}}]);