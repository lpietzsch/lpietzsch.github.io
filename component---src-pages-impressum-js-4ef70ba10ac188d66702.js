(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"dataQuery",function(){return m});var n=a(0),r=a.n(n),l=a(204),i=a(205),s=a.n(i),c=a(202);t.default=function(e){e.props;var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:t.markdownRemark.frontmatter.title,description:t.markdownRemark.frontmatter.title}),r.a.createElement("div",{className:"relative"},r.a.createElement(s.a,{fluid:t.banner.childImageSharp.fluid}),r.a.createElement("h1",{className:"white tracked tc f2 display absolute dn dib-ns",style:{bottom:"50%",left:"50%",transform:"translate(-50%, -50%)"}},t.markdownRemark.frontmatter.title)),r.a.createElement("div",{className:"mw9 center flex flex-wrap pv5-l w-100"},r.a.createElement("div",{className:"mw8 serif f4 lh-copy center",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}})))};var m="2967998194"},194:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(196);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},196:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},199:function(e){e.exports={data:{site:{siteMetadata:{navbarLinks:[{to:"/blog",name:"Blog"}],siteTitle:"Lara Pietzsch"}}}}},200:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),s=a(59),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},201:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",xing:"https://www.xing.com/profile/Lara_Pietzsch",twitter:"https://twitter.com/lara_pietzsch",linkedIn:"https://www.linkedin.com/in/lara-pietzsch-15a96394/"}}}}},202:function(e,t,a){"use strict";var n=a(203),r=a(0),l=a.n(r),i=a(198),s=a.n(i),c=a(194);t.a=function(e){return l.a.createElement(c.b,{query:"4262317136",render:function(t){return l.a.createElement(s.a,null,l.a.createElement("title",null,(a=e.title).charAt(0).toUpperCase()+a.slice(1)+" - "+t.site.siteMetadata.title),l.a.createElement("meta",{name:"description",content:e.description}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-icon-57x57.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-icon-60x60.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-icon-72x72.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-icon-76x76.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-icon-114x114.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120x120.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-icon-144x144.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),l.a.createElement("link",{rel:"manifest",href:"/manifest.json"}),l.a.createElement("meta",{name:"msapplication-TileColor",content:"#ffffff"}),l.a.createElement("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),l.a.createElement("meta",{name:"theme-color",content:"#ffffff"}));var a},data:n})}},203:function(e){e.exports={data:{site:{siteMetadata:{title:"Lara Pietzsch"}}}}},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(198),i=a.n(l),s=a(35),c=a.n(s),m=a(7),o=a.n(m),u=(a(208),a(199)),d=a(194),f=a(206),p=(a(197),function(e){return/^\/(?!\/)/.test(e.to)?r.a.createElement(d.a,{to:e.to,className:e.className},e.children):r.a.createElement("a",{href:e.to,className:e.className},e.children)}),h=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",r.a.createElement("div",{className:"flex flex-column justify-center items-center bg-light-blue fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},r.a.createElement(d.a,{to:"/",className:"display ttu tracked near-black f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)}),r.a.createElement(d.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},E=function(e){function t(t){var a;return(a=e.call(this)||this).state={menuToggle:null},a.toggleMenu=a.toggleMenu.bind(c()(a)),a}o()(t,e);var a=t.prototype;return a.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},a.render=function(){var e=this;return r.a.createElement(d.b,{query:"136301617",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},r.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},r.a.createElement("button",{className:"ttu tracked near-black f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},r.a.createElement(f.b,null)),r.a.createElement(d.a,{to:"/",className:"display ttu tracked near-black f4 no-underline"},t.site.siteMetadata.siteTitle),t.site.siteMetadata.navbarLinks.map(function(e){return r.a.createElement(p,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)})),r.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},r.a.createElement(d.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ÜBER MICH"))),r.a.createElement(h,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:u})},t}(r.a.Component),g=a(201),v=a(207),x=(a(195),a(34),a(84)),b=a.n(x),w=function(e){var t=e.href,a=e.external,n=e.children,l=b()(e,["href","external","children"]);return r.a.createElement("a",Object.assign({href:t,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0},l),n)},k=function(){return r.a.createElement(d.b,{query:"518595770",render:function(e){return r.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},r.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},r.a.createElement("div",{className:"w-100 mw5 mb4"},r.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),r.a.createElement("hr",null),r.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},r.a.createElement(w,{className:"near-white",href:e.site.siteMetadata.xing,external:!0},r.a.createElement(v.e,null)),r.a.createElement(w,{className:"near-white",href:e.site.siteMetadata.twitter,external:!0},r.a.createElement(v.d,null)),r.a.createElement(w,{className:"near-white",href:e.site.siteMetadata.linkedIn,external:!0},r.a.createElement(v.c,null)))),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Artikel von ",e.site.siteMetadata.siteTitle),r.a.createElement(d.a,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALLE ARTIKEL"),r.a.createElement(d.a,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Mehr"),r.a.createElement(d.a,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ÜBER MICH"))),r.a.createElement("div",{className:"w-100 mw9 center silver mb3"},r.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),r.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},r.a.createElement(d.a,{to:"/impressum",className:"silver sans-serif f5 tracked pv1 db mh1"},"IMPRESSUM"),r.a.createElement("span",{className:"mh1"},"|"),r.a.createElement(d.a,{to:"/datenschutz",className:"silver sans-serif f5 tracked pv1 db mh1"},"DATENSCHUTZ"))))},data:g})};t.a=function(e){var t=e.children,a=e.withFooter,n=void 0===a||a,l=e.withNavbar,s=void 0===l||l;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("body",{className:"bg-near-white mid-gray-darker"})),s?r.a.createElement(E,null):null,t,n?r.a.createElement(k,null):null)}}}]);
//# sourceMappingURL=component---src-pages-impressum-js-4ef70ba10ac188d66702.js.map