(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(199),s=a(201),l=a.n(s),c=a(189),m=(a(191),a(190),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"w-100 vh-50 mw9 center",fluid:e.image,alt:e.description}),r.a.createElement("div",{className:"h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center"},r.a.createElement("span",{className:"fw1 display near-black db tc w-100 mw7 f3 f2-ns"},e.title),r.a.createElement("p",{className:"serif mw6 tc f5 dn dib-l mb4 db"},e.description),r.a.createElement(c.Link,{className:"db pv3 ph5 tracked ttu b bg-light-blue near-black sans-serif no-underline hover-mid-gray",to:e.to},"Mehr lesen")))}),o=function(e){return r.a.createElement("div",{className:"w-100 mw6 pa2"},r.a.createElement(c.Link,{to:e.to},r.a.createElement(l.a,{fluid:e.image,alt:"",className:"w-100 h5"})),r.a.createElement("div",{className:"pa2 display near-black f3 tc mb3 h3"},e.title),r.a.createElement("div",{className:"pa2 lh-copy serif tc mb3 h3"},e.description),r.a.createElement("div",{className:"pa2 flex justify-end serif h3"},r.a.createElement(c.Link,{to:e.to,className:"near-black tracked ttu sans-serif f5"},"Mehr lesen »")))},A=a(221),u=function(){return r.a.createElement(c.StaticQuery,{query:"3256229257",render:function(e){return r.a.createElement("div",{className:"bg-light-blue flex flex-column justify-center items-center pa2 pv5"},r.a.createElement("h1",{className:"fw1 display db near-black f2 tc"},e.site.siteMetadata.homepageHeader),r.a.createElement("p",{className:"f4 serif mw7 tc lh-copy"},e.site.siteMetadata.homepageAbout),r.a.createElement(c.Link,{to:"/about",className:"mt3 db no-underline ph5 pv3 sans-serif near-white bg-near-black ttu tracked b hover-bg-mid-gray"},"Über mich"))},data:A})},d=a(222),f=function(){return r.a.createElement("div",{className:"pv5 pa2 flex flex-wrap mw9 center justify-around items-center"},r.a.createElement(c.StaticQuery,{query:"3445643013",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{fluid:e.image.childImageSharp.fluid,alt:"The Author",className:"w-100 mw6"}),r.a.createElement("div",{class:"w-100 pa2 mw6 mv4"},r.a.createElement("span",{className:"db f2 display near-black"},e.copy.frontmatter.title),r.a.createElement("div",{className:"lh-copy f5 serif mt4",dangerouslySetInnerHTML:{__html:e.copy.html}})))},data:d}))},p=a(197);a.d(t,"query",function(){return h});t.default=function(e){var t=e.data,a=t.featuredPost.edges[0].node;return r.a.createElement(i.a,null,r.a.createElement(p.a,{title:"Startseite",description:t.site.siteMetadata.description}),r.a.createElement(m,{title:a.frontmatter.title,image:a.frontmatter.postImage.childImageSharp.fluid,to:a.frontmatter.slug,description:a.frontmatter.description}),r.a.createElement("div",{className:"flex flex-wrap center mw9 justify-around pb3"},t.cards.edges.map(function(e){var t=e.node;return r.a.createElement(o,{title:t.frontmatter.title,image:t.frontmatter.postImage.childImageSharp.fluid,to:t.frontmatter.slug,description:t.frontmatter.description})})),r.a.createElement(u,null),r.a.createElement(f,null))};var h="565431820"},189:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(188),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(192),o=a.n(m);a.d(t,"PageRenderer",function(){return o.a});var A=a(33);a.d(t,"parsePath",function(){return A.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},191:function(e,t,a){},192:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},194:function(e){e.exports={data:{site:{siteMetadata:{navbarLinks:[{to:"/blog",name:"Blog"},{to:"/kommunikation",name:"Kommunikation"},{to:"/marketing",name:"Marketing"}],siteTitle:"Lara Pietzsch"}}}}},195:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(57),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},196:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",xing:"https://www.xing.com/profile/Lara_Pietzsch",twitter:"https://twitter.com/lara_pietzsch",linkedIn:"https://www.google.com"}}}}},197:function(e,t,a){"use strict";a(34);var n=a(198),r=a(0),i=a.n(r),s=a(193),l=a.n(s),c=a(189);t.a=function(e){return i.a.createElement(c.StaticQuery,{query:"4262317136",render:function(t){return i.a.createElement(l.a,null,i.a.createElement("title",null,e.title.replace(/\b\w/g,function(e){return e.toUpperCase()})+" - "+t.site.siteMetadata.title),i.a.createElement("meta",{name:"description",content:e.description}))},data:n})}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Lara Pietzsch"}}}}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(193),s=a.n(i),l=a(7),c=a.n(l),m=a(56),o=a.n(m),A=(a(204),a(194)),u=a(189),d=a(202),f=(a(191),function(e){return/^\/(?!\/)/.test(e.to)?r.a.createElement(u.Link,{to:e.to,className:e.className},e.children):r.a.createElement("a",{href:e.to,className:e.className},e.children)}),p=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",r.a.createElement("div",{className:"flex flex-column justify-center items-center bg-light-blue fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},r.a.createElement(u.Link,{to:"/",className:"display ttu tracked near-black f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map(function(e){return r.a.createElement(f,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)}),r.a.createElement(u.Link,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},h=function(e){function t(t){var a;return(a=e.call(this)||this).state={menuToggle:null},a.toggleMenu=a.toggleMenu.bind(o()(o()(a))),a}c()(t,e);var a=t.prototype;return a.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},a.render=function(){var e=this;return r.a.createElement(u.StaticQuery,{query:"136301617",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},r.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},r.a.createElement("button",{className:"ttu tracked near-black f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},r.a.createElement(d.b,null)),r.a.createElement(u.Link,{to:"/",className:"display ttu tracked near-black f4 no-underline"},t.site.siteMetadata.siteTitle),t.site.siteMetadata.navbarLinks.map(function(e){return r.a.createElement(f,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)})),r.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},r.a.createElement(u.Link,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ÜBER MICH"))),r.a.createElement(p,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:A})},t}(r.a.Component),E=a(196),g=a(203),b=(a(190),a(32),a(200)),w=a.n(b),v=function(e){var t=e.href,a=e.external,n=e.children,i=w()(e,["href","external","children"]);return r.a.createElement("a",Object.assign({href:t,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0},i),n)},y=function(){return r.a.createElement(u.StaticQuery,{query:"518595770",render:function(e){return r.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},r.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},r.a.createElement("div",{className:"w-100 mw5 mb4"},r.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),r.a.createElement("hr",null),r.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},r.a.createElement(v,{className:"near-white",href:e.site.siteMetadata.xing,external:!0},r.a.createElement(g.e,null)),r.a.createElement(v,{className:"near-white",href:e.site.siteMetadata.twitter,external:!0},r.a.createElement(g.d,null)),r.a.createElement(v,{className:"near-white",href:e.site.siteMetadata.linkedIn,external:!0},r.a.createElement(g.c,null)))),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Artikel von ",e.site.siteMetadata.siteTitle),r.a.createElement(u.Link,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALLE ARTIKEL"),r.a.createElement(u.Link,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Mehr"),r.a.createElement(u.Link,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ÜBER MICH"))),r.a.createElement("div",{className:"w-100 mw9 center silver mb3"},r.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),r.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},r.a.createElement(u.Link,{to:"/impressum",className:"silver sans-serif f5 tracked pv1 db mh1"},"IMPRESSUM"),r.a.createElement("span",{className:"mh1"},"|"),r.a.createElement(u.Link,{to:"/datenschutz",className:"silver sans-serif f5 tracked pv1 db mh1"},"DATENSCHUTZ"))))},data:E})};t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("body",{className:"bg-near-white mid-gray-darker"})),r.a.createElement(h,null),e.children,r.a.createElement(y,null))}},221:function(e){e.exports={data:{site:{siteMetadata:{homepageHeader:"Willkommen in meinem Blog",homepageAbout:"Ich bin Kommunikatorin aus Leidenschaft"}}}}},222:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABm3WmF0Jz/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQMAEgIEESL/2gAIAQEAAQUCYGSmQFWxp68edif/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BEX//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAgEAACAQEJAAAAAAAAAAAAAAAAAQISEBEhMTNBUYGh/9oACAEBAAY/AsYXdCpVXJpeDTySRBLez//EABsQAQEAAgMBAAAAAAAAAAAAAAERABAhMUFh/9oACAEBAAE/IS0h+YYts8WaVOWKBkDHtVdf/9oADAMBAAIAAwAAABCjL//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QSsaf/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAECAQE/EF0n/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIUExUXGR0f/aAAgBAQABPxAEO8poXw7g8/ZS59YlHD9/sZ60nu3MTkNmgRwEZ//Z",aspectRatio:1.5,src:"/static/23f3143a9568e941fa51ce9831d05300/62d5a/author.jpg",srcSet:"/static/23f3143a9568e941fa51ce9831d05300/e8b45/author.jpg 270w,\n/static/23f3143a9568e941fa51ce9831d05300/48494/author.jpg 540w,\n/static/23f3143a9568e941fa51ce9831d05300/62d5a/author.jpg 1080w,\n/static/23f3143a9568e941fa51ce9831d05300/f4018/author.jpg 1620w,\n/static/23f3143a9568e941fa51ce9831d05300/a257a/author.jpg 2160w,\n/static/23f3143a9568e941fa51ce9831d05300/4e2be/author.jpg 3240w,\n/static/23f3143a9568e941fa51ce9831d05300/5529c/author.jpg 5472w",sizes:"(max-width: 1080px) 100vw, 1080px"}}},copy:{html:"<p>Your incredible content deserves an incredible home. Tyra leverages your brilliant blog posts, builds rich SEO data, and makes publishing easy! Fast, dynamic websites are here, powered by Gatsby.js and React.</p>\n<p>This section of the site would be great to feature an author's biography, or maybe a bit about what makes your business special! It's featured towards the end of the homepage, after other descriptive sections.</p>",frontmatter:{title:"Showcase Your Personality."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-87d51b4bd2e63fc68951.js.map