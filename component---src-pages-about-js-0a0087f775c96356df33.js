(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"dataQuery",function(){return u});var n=a(0),r=a.n(n),s=a(202),l=a(203),i=a.n(l),c=a(192),m=a(200);t.default=function(e){e.props;var t=e.data;return r.a.createElement(s.a,null,r.a.createElement(m.a,{title:"Über mich",description:t.markdownRemark.frontmatter.title}),r.a.createElement("div",{className:"relative"},r.a.createElement(i.a,{fluid:t.banner.childImageSharp.fluid}),r.a.createElement("h1",{className:"white tracked tc f2 display absolute dn dib-ns",style:{bottom:"50%",left:"50%",transform:"translate(-50%, -50%)"}},"Über mich")),r.a.createElement("div",{className:"pv5 pa2 flex flex-wrap center justify-around items-center"},r.a.createElement("div",{className:"w-100 mw6 self-start"},r.a.createElement("h1",{className:"display fw1 db lh-copy",dangerouslySetInnerHTML:{__html:t.markdownRemark.frontmatter.title}}),r.a.createElement(c.a,{to:"/blog",className:"dib bg-near-black b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2"},"Zu meinem Blog")),r.a.createElement("div",{className:"w-100 mw7 lh-copy serif pa2 flex flex-column justify-center f4",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}})))};var u="2485692296"},192:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),s=a(4),l=a.n(s),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(194);var m=r.a.createContext({}),u=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},194:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{navbarLinks:[{to:"/blog",name:"Blog"}],siteTitle:"Lara Pietzsch"}}}}},198:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),i=a(59),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},199:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",xing:"https://www.xing.com/profile/Lara_Pietzsch",twitter:"https://twitter.com/lara_pietzsch",linkedIn:"https://www.linkedin.com/in/lara-pietzsch-15a96394/"}}}}},200:function(e,t,a){"use strict";var n=a(201),r=a(0),s=a.n(r),l=a(196),i=a.n(l),c=a(192);t.a=function(e){return s.a.createElement(c.b,{query:"4262317136",render:function(t){return s.a.createElement(i.a,null,s.a.createElement("title",null,(a=e.title).charAt(0).toUpperCase()+a.slice(1)+" - "+t.site.siteMetadata.title),s.a.createElement("meta",{name:"description",content:e.description}));var a},data:n})}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Lara Pietzsch"}}}}},202:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(196),l=a.n(s),i=a(35),c=a.n(i),m=a(7),u=a.n(m),o=(a(206),a(197)),d=a(192),f=a(204),p=(a(195),function(e){return/^\/(?!\/)/.test(e.to)?r.a.createElement(d.a,{to:e.to,className:e.className},e.children):r.a.createElement("a",{href:e.to,className:e.className},e.children)}),E=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",r.a.createElement("div",{className:"flex flex-column justify-center items-center bg-light-blue fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},r.a.createElement(d.a,{to:"/",className:"display ttu tracked near-black f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)}),r.a.createElement(d.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},h=function(e){function t(t){var a;return(a=e.call(this)||this).state={menuToggle:null},a.toggleMenu=a.toggleMenu.bind(c()(a)),a}u()(t,e);var a=t.prototype;return a.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},a.render=function(){var e=this;return r.a.createElement(d.b,{query:"136301617",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},r.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},r.a.createElement("button",{className:"ttu tracked near-black f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},r.a.createElement(f.b,null)),r.a.createElement(d.a,{to:"/",className:"display ttu tracked near-black f4 no-underline"},t.site.siteMetadata.siteTitle),t.site.siteMetadata.navbarLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)})),r.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},r.a.createElement(d.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ÜBER MICH"))),r.a.createElement(E,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:o})},t}(r.a.Component),b=a(199),v=a(205),w=(a(193),a(34),a(84)),g=a.n(w),y=function(e){var t=e.href,a=e.external,n=e.children,s=g()(e,["href","external","children"]);return r.a.createElement("a",Object.assign({href:t,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0},s),n)},N=function(){return r.a.createElement(d.b,{query:"518595770",render:function(e){return r.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},r.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},r.a.createElement("div",{className:"w-100 mw5 mb4"},r.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),r.a.createElement("hr",null),r.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},r.a.createElement(y,{className:"near-white",href:e.site.siteMetadata.xing,external:!0},r.a.createElement(v.e,null)),r.a.createElement(y,{className:"near-white",href:e.site.siteMetadata.twitter,external:!0},r.a.createElement(v.d,null)),r.a.createElement(y,{className:"near-white",href:e.site.siteMetadata.linkedIn,external:!0},r.a.createElement(v.c,null)))),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Artikel von ",e.site.siteMetadata.siteTitle),r.a.createElement(d.a,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALLE ARTIKEL"),r.a.createElement(d.a,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Mehr"),r.a.createElement(d.a,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ÜBER MICH"))),r.a.createElement("div",{className:"w-100 mw9 center silver mb3"},r.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),r.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},r.a.createElement(d.a,{to:"/impressum",className:"silver sans-serif f5 tracked pv1 db mh1"},"IMPRESSUM"),r.a.createElement("span",{className:"mh1"},"|"),r.a.createElement(d.a,{to:"/datenschutz",className:"silver sans-serif f5 tracked pv1 db mh1"},"DATENSCHUTZ"))))},data:b})};t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("body",{className:"bg-near-white mid-gray-darker"})),r.a.createElement(h,null),e.children,r.a.createElement(N,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-0a0087f775c96356df33.js.map