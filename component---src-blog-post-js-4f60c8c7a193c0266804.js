(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(202),i=a(192),s=(a(193),function(e){return A.a.createElement("div",{className:"bg-light-blue ph2 pv5 flex flex-column justify-center items-center"},A.a.createElement(i.a,{to:"/"+e.category,className:"sans-serif ttu dark-gray tracked f5"},e.category),A.a.createElement("h1",{className:"near-black display fw4 f1-l f2 tc"},e.title),A.a.createElement("span",{className:"sans-serif tracked ttu f5 mb2"},"von ",e.author),A.a.createElement("span",{className:"sans-serif tracked ttu f5"},e.date))}),l=a(218),c=a(205),d=a(204),m=function(e){var t=e.desc,a=e.img,n=e.location;return n=encodeURIComponent(n.pathname),t=encodeURIComponent(t),a=encodeURIComponent(a),A.a.createElement(i.b,{query:"3595446222",render:function(e){var t=encodeURIComponent(e.site.siteMetadata.siteUrl);return A.a.createElement("div",{className:"dn db-l",style:{gridArea:"sidebar"}},A.a.createElement("div",{className:"w3 bg-dark-gray flex flex-wrap",style:{position:"sticky",top:"4rem"}},A.a.createElement("a",{href:"https://www.xing.com/spi/shares/new?url="+(t+n),target:"_blank",rel:"noopener noreferrer",className:"w-100 h3 flex items-center justify-center b near-white"},A.a.createElement(c.e,null)),A.a.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&url="+(t+n),target:"_blank",rel:"noopener noreferrer",className:"w-100 h3 flex items-center justify-center b near-white"},A.a.createElement(c.b,null)),A.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+(t+n),target:"_blank",rel:"noopener noreferrer",className:"w-100 h3 flex items-center justify-center b near-white"},A.a.createElement(c.a,null)),A.a.createElement("a",{href:"mailto:?&body="+(t+n),className:"w-100 h3 flex items-center justify-center b near-white"},A.a.createElement(d.a,null))))},data:l})},o=a(219),u=a(203),f=a.n(u),E=function(e){return A.a.createElement("div",{className:"flex flex-column justify-end items-center pa2",style:{gridArea:"suggested"}},A.a.createElement("span",{className:"sans-serif tracked ttu tc db pv3"},"Zum Weiterlesen"),A.a.createElement(i.b,{query:"10770140",render:function(e){return e.allMarkdownRemark.edges.map(function(e){var t=e.node;return A.a.createElement("div",{className:"w-100 mw6 tc mb4"},A.a.createElement(i.a,{to:t.frontmatter.slug},A.a.createElement(f.a,{className:"h5",fluid:t.frontmatter.postImage.childImageSharp.fluid,alt:t.frontmatter.metaDescription})),A.a.createElement(i.a,{className:"f4 serif tc dib pv2 ph3 display near-black no-underline",to:t.frontmatter.slug},t.frontmatter.title))})},data:o}))},g=(a(195),a(220),function(e){return A.a.createElement("div",{className:"min-vh-100 blog__grid"},A.a.createElement("div",{style:{gridArea:"header"}}),A.a.createElement("div",{className:"mw8 serif f4 lh-copy center pa2 article__container",style:{gridArea:"content"},dangerouslySetInnerHTML:{__html:e.content}}),A.a.createElement(m,{img:e.image,desc:e.description,location:e.location}),A.a.createElement(E,null))}),p=a(221),h=a(196),b=a.n(h),w=function(e){return A.a.createElement(i.b,{query:"2497598063",render:function(t){return A.a.createElement(b.a,null,A.a.createElement("script",{type:"application/ld+json"},'\n        {\n          "@context": "http://schema.org",\n            "@type": "Article",\n            "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+t.site.siteMetadata.siteUrl+e.slug+'"\n            },\n            "headline": "'+e.title+'",\n            "image": ["'+t.site.siteMetadata.siteUrl+e.image+'"],\n            "datePublished": "'+e.date+'",\n            "dateModified": "'+e.date+'",\n            "author": {\n              "@type": "Person",\n              "name": "'+e.author+'"\n            },\n            "publisher": {\n              "@type": "Organization",\n              "name": "'+t.site.siteMetadata.siteTitle+'",\n              "logo": {\n                "@type": "ImageObject",\n                "url": "'+t.site.siteMetadata.siteUrl+'/logo.png"\n              }\n            },\n            "description": "'+e.description+'"\n        }\n      '))},data:p})},N=a(200);a.d(t,"query",function(){return j});t.default=function(e){var t=e.location,a=e.data,n=a.post.frontmatter,i=n.category,l=n.date,c=n.dateOriginal,d=n.author,m=n.title,o=n.slug,u=n.metaDescription,f=a.post.html;return A.a.createElement(r.a,null,A.a.createElement(w,{slug:o,title:m,date:c,description:u,author:d,image:a.post.frontmatter.postImage.childImageSharp.original.src}),A.a.createElement(N.a,{title:m,description:u}),A.a.createElement(s,{author:d,date:l,category:i,title:m}),A.a.createElement(g,{content:f,description:u,image:a.post.frontmatter.postImage.childImageSharp.original.src,location:t}))};var j="96331794"},192:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(194);var c=A.a.createContext({}),d=function(e){return A.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},194:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{navbarLinks:[{to:"/blog",name:"Blog"}],siteTitle:"Lara Pietzsch"}}}}},198:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),s=a(59),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?A.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},199:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",xing:"https://www.xing.com/profile/Lara_Pietzsch",twitter:"https://twitter.com/lara_pietzsch",linkedIn:"https://www.linkedin.com/in/lara-pietzsch-15a96394/"}}}}},200:function(e,t,a){"use strict";var n=a(201),A=a(0),r=a.n(A),i=a(196),s=a.n(i),l=a(192);t.a=function(e){return r.a.createElement(l.b,{query:"4262317136",render:function(t){return r.a.createElement(s.a,null,r.a.createElement("title",null,(a=e.title).charAt(0).toUpperCase()+a.slice(1)+" - "+t.site.siteMetadata.title),r.a.createElement("meta",{name:"description",content:e.description}));var a},data:n})}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Lara Pietzsch"}}}}},202:function(e,t,a){"use strict";var n=a(0),A=a.n(n),r=a(196),i=a.n(r),s=a(35),l=a.n(s),c=a(7),d=a.n(c),m=(a(206),a(197)),o=a(192),u=a(204),f=(a(195),function(e){return/^\/(?!\/)/.test(e.to)?A.a.createElement(o.a,{to:e.to,className:e.className},e.children):A.a.createElement("a",{href:e.to,className:e.className},e.children)}),E=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",A.a.createElement("div",{className:"flex flex-column justify-center items-center bg-light-blue fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},A.a.createElement(o.a,{to:"/",className:"display ttu tracked near-black f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map(function(e){return A.a.createElement(f,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)}),A.a.createElement(o.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},g=function(e){function t(t){var a;return(a=e.call(this)||this).state={menuToggle:null},a.toggleMenu=a.toggleMenu.bind(l()(a)),a}d()(t,e);var a=t.prototype;return a.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},a.render=function(){var e=this;return A.a.createElement(o.b,{query:"136301617",render:function(t){return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},A.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},A.a.createElement("button",{className:"ttu tracked near-black f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},A.a.createElement(u.b,null)),A.a.createElement(o.a,{to:"/",className:"display ttu tracked near-black f4 no-underline"},t.site.siteMetadata.siteTitle),t.site.siteMetadata.navbarLinks.map(function(e){return A.a.createElement(f,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)})),A.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},A.a.createElement(o.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ÜBER MICH"))),A.a.createElement(E,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:m})},t}(A.a.Component),p=a(199),h=a(205),b=(a(193),a(34),a(84)),w=a.n(b),N=function(e){var t=e.href,a=e.external,n=e.children,r=w()(e,["href","external","children"]);return A.a.createElement("a",Object.assign({href:t,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0},r),n)},j=function(){return A.a.createElement(o.b,{query:"518595770",render:function(e){return A.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},A.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},A.a.createElement("div",{className:"w-100 mw5 mb4"},A.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),A.a.createElement("hr",null),A.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},A.a.createElement(N,{className:"near-white",href:e.site.siteMetadata.xing,external:!0},A.a.createElement(h.e,null)),A.a.createElement(N,{className:"near-white",href:e.site.siteMetadata.twitter,external:!0},A.a.createElement(h.d,null)),A.a.createElement(N,{className:"near-white",href:e.site.siteMetadata.linkedIn,external:!0},A.a.createElement(h.c,null)))),A.a.createElement("div",{className:"flex flex-column"},A.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Artikel von ",e.site.siteMetadata.siteTitle),A.a.createElement(o.a,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALLE ARTIKEL"),A.a.createElement(o.a,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),A.a.createElement("div",{className:"flex flex-column"},A.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"Mehr"),A.a.createElement(o.a,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ÜBER MICH"))),A.a.createElement("div",{className:"w-100 mw9 center silver mb3"},A.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),A.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},A.a.createElement(o.a,{to:"/impressum",className:"silver sans-serif f5 tracked pv1 db mh1"},"IMPRESSUM"),A.a.createElement("span",{className:"mh1"},"|"),A.a.createElement(o.a,{to:"/datenschutz",className:"silver sans-serif f5 tracked pv1 db mh1"},"DATENSCHUTZ"))))},data:p})};t.a=function(e){return A.a.createElement(A.a.Fragment,null,A.a.createElement(i.a,null,A.a.createElement("body",{className:"bg-near-white mid-gray-darker"})),A.a.createElement(g,null),e.children,A.a.createElement(j,null))}},218:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://www.lara-pietzsch.de"}}}}},219:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Fingerpointing meets Fehlerkultur: Verbesserungen für das Marketing",slug:"/fehlerkultur-im-marketing",metaDescription:"Fehler passieren? Aber bitte nicht im Marketing! Gründe für Fehler im Marketing und spannende Lösungsansätze",postImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHk6xsUCB//xAAYEAEAAwEAAAAAAAAAAAAAAAABAAIDEf/aAAgBAQABBQKhEOON4M7Kb6UP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxABAAICAwAAAAAAAAAAAAAAARARAAISIUH/2gAIAQEABj8Cgo5CeTWr1n//xAAYEAEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAQABPyEHNtGNruA9SEu4O+r/2gAMAwEAAgADAAAAEHAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAITFBcVH/2gAIAQEAAT8QMMomxuOoJYDHnJVYVWvXZgIQIxNhRNGf/9k=",aspectRatio:1.5,src:"/static/7ee1ddbcbb5521f97a7ed54e361a0a72/d9b0f/falsch-kreide-mathe.jpg",srcSet:"/static/7ee1ddbcbb5521f97a7ed54e361a0a72/293fb/falsch-kreide-mathe.jpg 180w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/87612/falsch-kreide-mathe.jpg 360w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/d9b0f/falsch-kreide-mathe.jpg 720w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/487eb/falsch-kreide-mathe.jpg 1080w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/addbf/falsch-kreide-mathe.jpg 1440w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/2457c/falsch-kreide-mathe.jpg 2160w,\n/static/7ee1ddbcbb5521f97a7ed54e361a0a72/0cf89/falsch-kreide-mathe.jpg 6000w",sizes:"(max-width: 720px) 100vw, 720px"}}}}}},{node:{frontmatter:{title:"Wenn du den Wald vor lauter Marketing-Blogs nicht mehr sehen kannst...",slug:"/warum-neuer-marketing-blog",metaDescription:"Oh nein, denkt sich der geneigte Leser, bitte nicht noch son Marketing-Blog. Ich sage: Oh doch und ob!",postImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABzm2mSAD/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDETES/9oACAEBAAEFAvDLUZXGJQ3Hr3//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIQESEy/9oACAEBAAY/Aht5h1Qs/wD/xAAcEAACAQUBAAAAAAAAAAAAAAABEQAhMUFRgWH/2gAIAQEAAT8huulVACCgRryMRDwoFmoGWsRbGOz/2gAMAwEAAgADAAAAEJAP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EGx//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EKuv/8QAHhABAAMAAQUBAAAAAAAAAAAAAQARITFBUZGhsdH/2gAIAQEAAT8QdAOQPTD9I7CM2zs+S99urJ+EyADVbvuEl46qg+dhtajtR//Z",aspectRatio:1.5009380863039399,src:"/static/5061ec7d07b412bed6839bc98b5d3cfe/d9b0f/pfad-im-wald.jpg",srcSet:"/static/5061ec7d07b412bed6839bc98b5d3cfe/293fb/pfad-im-wald.jpg 180w,\n/static/5061ec7d07b412bed6839bc98b5d3cfe/87612/pfad-im-wald.jpg 360w,\n/static/5061ec7d07b412bed6839bc98b5d3cfe/d9b0f/pfad-im-wald.jpg 720w,\n/static/5061ec7d07b412bed6839bc98b5d3cfe/487eb/pfad-im-wald.jpg 1080w,\n/static/5061ec7d07b412bed6839bc98b5d3cfe/addbf/pfad-im-wald.jpg 1440w,\n/static/5061ec7d07b412bed6839bc98b5d3cfe/9f4ef/pfad-im-wald.jpg 1600w",sizes:"(max-width: 720px) 100vw, 720px"}}}}}}]}}}},221:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Lara Pietzsch",siteUrl:"https://www.lara-pietzsch.de"}}}}}}]);
//# sourceMappingURL=component---src-blog-post-js-4f60c8c7a193c0266804.js.map