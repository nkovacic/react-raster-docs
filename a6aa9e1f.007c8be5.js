(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),m=t(118),i=t(125),c=t(112);var s=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(120);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:c}}=Object(l.default)(),{blogDescription:g,blogTitle:d,permalink:u}=a,E="/"===u?c:d;return r.a.createElement(m.a,{title:E,description:g,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((({content:e})=>r.a.createElement(i.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(s,{metadata:a})))))}},120:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(110),m=t(112),i=t(55),c=t.n(i);function s({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},125:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(110),m=t(109),i=t(23),c=t(112),s=t(133),o=t(114),g=t(56),d=t.n(g);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:g,isBlogPostPage:E=!1}=e,{date:v,permalink:p,tags:b,readingTime:N}=n,{author:_,title:h,image:k,keywords:f}=t,w=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,I=t.author_image_url||t.authorImageURL,M=Object(o.a)(k,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:M}),k&&r.a.createElement("meta",{name:"twitter:image",content:M}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${h}`})),r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2",a=v.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},E?h:r.a.createElement(c.a,{to:p},h)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:v,className:d.a.blogPostDate},n," ",m,", ",t," ",N&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(N)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},I&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:I,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:s.a},a)),(b.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),b.map((({label:e,permalink:a})=>r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:n.permalink,"aria-label":`Read more about ${h}`},r.a.createElement("strong",null,"Read More"))))))}},131:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(132),m=t(214);const i={React:r(),Grid:l.b,Box:l.a,motion:m.a,...r.a};a.a=i}}]);