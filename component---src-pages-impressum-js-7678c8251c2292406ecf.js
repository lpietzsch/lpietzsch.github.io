(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"dataQuery",function(){return m});var n=a(0),r=a.n(n),i=a(199),s=a(201),l=a.n(s),c=(a(189),a(197));t.default=function(e){e.props;var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:t.markdownRemark.frontmatter.title,description:t.markdownRemark.frontmatter.title}),r.a.createElement("div",{className:"relative"},r.a.createElement(l.a,{fluid:t.banner.childImageSharp.fluid}),r.a.createElement("h1",{className:"fw1 tc f2 display absolute dn dib-ns",style:{bottom:"50%",left:"50%",transform:"translate(-50%, -50%)"}},t.markdownRemark.frontmatter.title)),r.a.createElement("div",{className:"mw9 center flex flex-wrap pv5-l w-100"},r.a.createElement("div",{className:"lh-copy f4",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}})))};var m="1636861867"},189:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(188),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(192),u=a.n(m);a.d(t,"PageRenderer",function(){return u.a});var o=a(33);a.d(t,"parsePath",function(){return o.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},191:function(e,t,a){},192:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},194:function(e){e.exports={data:{site:{siteMetadata:{navbarLinks:[{to:"/blog",name:"Blog"},{to:"/kommunikation",name:"Kommunikation"},{to:"/marketing",name:"Marketing"}],siteTitle:"Lara Pietzsch"}}}}},195:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(57),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},196:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",xing:"https://www.xing.com/profile/Lara_Pietzsch",twitter:"https://twitter.com/lara_pietzsch"}}}}},197:function(e,t,a){"use strict";a(34);var n=a(198),r=a(0),i=a.n(r),s=a(193),l=a.n(s),c=a(189);t.a=function(e){return i.a.createElement(c.StaticQuery,{query:"4262317136",render:function(t){return i.a.createElement(l.a,null,i.a.createElement("title",null,e.title.replace(/\b\w/g,function(e){return e.toUpperCase()})+" - "+t.site.siteMetadata.title),i.a.createElement("meta",{name:"description",content:e.description}))},data:n})}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Lara Pietzsch"}}}}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(193),s=a.n(i),l=a(7),c=a.n(l),m=a(56),u=a.n(m),o=(a(204),a(194)),d=a(189),f=a(202),p=(a(191),function(e){return/^\/(?!\/)/.test(e.to)?r.a.createElement(d.Link,{to:e.to,className:e.className},e.children):r.a.createElement("a",{href:e.to,className:e.className},e.children)}),h=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",r.a.createElement("div",{className:"flex flex-column justify-center items-center bg-light-blue fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},r.a.createElement(d.Link,{to:"/",className:"display ttu tracked near-black f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)}),r.a.createElement(d.Link,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},E=function(e){function t(t){var a;return(a=e.call(this)||this).state={menuToggle:null},a.toggleMenu=a.toggleMenu.bind(u()(u()(a))),a}c()(t,e);var a=t.prototype;return a.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},a.render=function(){var e=this;return r.a.createElement(d.StaticQuery,{query:"136301617",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},r.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},r.a.createElement("button",{className:"ttu tracked near-black f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},r.a.createElement(f.b,null)),r.a.createElement(d.Link,{to:"/",className:"display ttu tracked near-black f4 no-underline"},t.site.siteMetadata.siteTitle),t.site.siteMetadata.navbarLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)})),r.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},r.a.createElement(d.Link,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ÜBER MICH"))),r.a.createElement(h,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:o})},t}(r.a.Component),v=a(196),b=a(203),g=(a(190),a(32),a(200)),w=a.n(g),y=function(e){var t=e.href,a=e.external,n=e.children,i=w()(e,["href","external","children"]);return r.a.createElement("a",Object.assign({href:t,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0},i),n)},k=function(){return r.a.createElement(d.StaticQuery,{query:"2957564198",render:function(e){return r.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},r.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},r.a.createElement("div",{className:"w-100 mw5 mb4"},r.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),r.a.createElement("hr",null),r.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},r.a.createElement(y,{className:"near-white",href:e.site.siteMetadata.xing,external:!0},r.a.createElement(b.d,null)),r.a.createElement(y,{className:"near-white",href:e.site.siteMetadata.twitter,external:!0},r.a.createElement(b.c,null)))),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Artikel von ",e.site.siteMetadata.siteTitle),r.a.createElement(d.Link,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALLE ARTIKEL"),r.a.createElement(d.Link,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Mehr"),r.a.createElement(d.Link,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ÜBER MICH"))),r.a.createElement("div",{className:"w-100 mw9 center silver mb3"},r.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),r.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},r.a.createElement(d.Link,{to:"/impressum",className:"silver sans-serif f5 tracked pv1 db mh1"},"IMPRESSUM"),r.a.createElement("span",{className:"mh1"},"|"),r.a.createElement(d.Link,{to:"/datenschutz",className:"silver sans-serif f5 tracked pv1 db mh1"},"DATENSCHUTZ"))))},data:v})};t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("body",{className:"bg-near-white mid-gray-darker"})),r.a.createElement(E,null),e.children,r.a.createElement(k,null))}}}]);
//# sourceMappingURL=component---src-pages-impressum-js-7678c8251c2292406ecf.js.map