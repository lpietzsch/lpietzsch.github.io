(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{197:function(t,e,r){e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=f(r(0)),a=f(r(4)),s=f(r(212)),c=f(r(215)),u=r(218),l=r(210);function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}var p,T,h,E=(0,s.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)(function(){return null}),y=(p=E,h=T=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return n({},o,((e={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,o=t.child,i=t.newProps,a=t.newChildProps,s=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return n({},i,((e={})[o.type]=s,e.titleAttributes=n({},a),e));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=n({},e);return Object.keys(t).forEach(function(e){var o;r=n({},r,((o={})[e]=t[e],o))}),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return i.default.Children.forEach(t,function(t){if(t&&t.props){var o=t.props,i=o.children,a=d(o,["children"]),s=(0,u.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=d(t,["children"]),o=n({},r);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(p,o)},o(e,null,[{key:"canUseDOM",set:function(t){p.canUseDOM=t}}]),e}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var t=p.rewind();return t||(t=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},204:function(t,e,r){"use strict";var n=r(8);e.__esModule=!0,e.default=void 0;var o,i=n(r(7)),a=n(r(35)),s=n(r(84)),c=n(r(86)),u=n(r(0)),l=n(r(4)),f=function(t){var e=(0,c.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d={},p=function(t){var e=f(t),r=e.fluid?e.fluid.src:e.fixed.src;return d[r]||!1},T=[];var h=function(t,e){(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(t){t.forEach(function(t){T.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),o).observe(t),T.push([t,e])},E=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+r+"/>":"",o=t.srcSet?'<source srcSet="'+t.srcSet+'" '+r+"/>":"",i=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",c=t.height?'height="'+t.height+'" ':"",u=t.opacity?t.opacity:"1";return"<picture>"+n+o+"<img "+s+c+e+a+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=u.default.forwardRef(function(t,e){var r=t.style,n=t.onLoad,o=t.onError,i=(0,s.default)(t,["style","onLoad","onError"]);return u.default.createElement("img",(0,c.default)({},i,{onLoad:n,onError:o,ref:e,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var A=function(t){function e(e){var r;r=t.call(this,e)||this;var n=!0,o=!1,i=e.fadeIn,s=p(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!0),"undefined"==typeof window&&(n=!1),e.critical&&(n=!0,o=!1);var c=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:!1,IOSupported:o,fadeIn:i,hasNoScript:c,seenBefore:s},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.handleRef=function(t){var e=this;this.state.IOSupported&&t&&h(t,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:p(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=e.fluid?e.fluid.src:e.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,n=t.className,o=t.style,i=void 0===o?{}:o,a=t.imgStyle,s=void 0===a?{}:a,l=t.placeholderStyle,d=void 0===l?{}:l,p=t.placeholderClassName,T=t.fluid,h=t.fixed,A=t.backgroundColor,b=t.Tag,m="boolean"==typeof A?"lightgray":A,S=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),g=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),v={title:e,alt:this.state.isVisible?"":r,style:S,className:p};if(T){var _=T;return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),_.base64&&u.default.createElement(y,(0,c.default)({src:_.base64},v)),_.tracedSVG&&u.default.createElement(y,(0,c.default)({src:_.tracedSVG},v)),m&&u.default.createElement(b,{title:e,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,_.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),u.default.createElement("source",{srcSet:_.srcSet,sizes:_.sizes}),u.default.createElement(y,{alt:r,title:e,src:_.src,style:g,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,c.default)({alt:r,title:e},_))}}))}if(h){var O=h,R=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},i);return"inherit"===i.display&&delete R.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},O.base64&&u.default.createElement(y,(0,c.default)({src:O.base64},v)),O.tracedSVG&&u.default.createElement(y,(0,c.default)({src:O.tracedSVG},v)),m&&u.default.createElement(b,{title:e,style:{backgroundColor:m,width:O.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:O.height}}),this.state.isVisible&&u.default.createElement("picture",null,O.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),u.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),u.default.createElement(y,{alt:r,title:e,width:O.width,height:O.height,src:O.src,style:g,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,c.default)({alt:r,title:e,width:O.width,height:O.height},O))}}))}return null},e}(u.default.Component);A.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),m=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});A.propTypes={resolutions:b,sizes:m,fixed:b,fluid:m,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string};var S=A;e.default=S},205:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i});var n=r(211),o=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)};o.displayName="FiMail";var i=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)};i.displayName="FiMenu"},206:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"c",function(){return i}),r.d(e,"b",function(){return a}),r.d(e,"d",function(){return s}),r.d(e,"e",function(){return c});var n=r(211),o=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 264 512"},child:[{tag:"path",attr:{d:"M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"}}]})(t)};o.displayName="FaFacebookF";var i=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"}}]})(t)};i.displayName="FaLinkedinIn";var a=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)};a.displayName="FaLinkedin";var s=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)};s.displayName="FaTwitter";var c=function(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"}}]})(t)};c.displayName="FaXing"},207:function(t,e,r){var n=r(24).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||r(18)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},210:function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(e.VALID_TAG_NAMES=Object.keys(r).map(function(t){return r[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(n).reduce(function(t,e){return t[n[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},211:function(t,e,r){"use strict";var n=r(0),o=r.n(n),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i);r.d(e,"a",function(){return u});var s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r};function u(t){return function(e){return o.a.createElement(l,s({attr:s({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return o.a.createElement(e.tag,s({key:r},e.attr),t(e.child))})}(t.child))}}function l(t){var e=function(e){var r,n=t.size||e.size||"1em";e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className);var i=t.attr,a=c(t,["attr"]);return o.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,a,{className:r,style:s({color:t.color||e.color},e.style,t.style),height:n,width:n}),t.children)};return void 0!==a?o.a.createElement(a.Consumer,null,function(t){return e(t)}):e(i)}},212:function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=r(0),i=n(o),a=n(r(213)),s=n(r(214));t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c=[],u=void 0;function l(){u=t(c.map(function(t){return t.props})),f.canUseDOM?e(u):r&&(u=r(u))}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.peek=function(){return u},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,c=[],t},e.prototype.shouldComponentUpdate=function(t){return!s(t,this.props)},e.prototype.componentWillMount=function(){c.push(this),l()},e.prototype.componentDidUpdate=function(){l()},e.prototype.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),l()},e.prototype.render=function(){return i.createElement(n,this.props)},e}(o.Component);return f.displayName="SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")",f.canUseDOM=a.canUseDOM,f}}},213:function(t,e,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return i}.call(e,r,e,t))||(t.exports=n)}()},214:function(t,e){t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var u=i[c];if(!s(u))return!1;var l=t[u],f=e[u];if(!1===(o=r?r.call(n,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},215:function(t,e,r){var n=Array.prototype.slice,o=r(216),i=r(217),a=t.exports=function(t,e,r){return r||(r={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?r.strict?t===e:t==e:function(t,e,r){var u,l;if(s(t)||s(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t))return!!i(e)&&(t=n.call(t),e=n.call(e),a(t,e,r));if(c(t)){if(!c(e))return!1;if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}try{var f=o(t),d=o(e)}catch(p){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),u=f.length-1;u>=0;u--)if(f[u]!=d[u])return!1;for(u=f.length-1;u>=0;u--)if(l=f[u],!a(t[l],e[l],r))return!1;return typeof t==typeof e}(t,e,r))};function s(t){return null==t}function c(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}},216:function(t,e){function r(t){var e=[];for(var r in t)e.push(r);return e}(t.exports="function"==typeof Object.keys?Object.keys:r).shim=r},217:function(t,e){var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=r?n:o).supported=n,e.unsupported=o},218:function(t,e,r){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=c(r(0)),a=c(r(60)),s=r(210);function c(t){return t&&t.__esModule?t:{default:t}}var u,l=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=E(t,s.TAG_NAMES.TITLE),r=E(t,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&e)return r.replace(/%s/g,function(){return e});var n=E(t,s.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},d=function(t){return E(t,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return o({},t,e)},{})},T=function(t,e){return e.filter(function(t){return void 0!==t[s.TAG_NAMES.BASE]}).map(function(t){return t[s.TAG_NAMES.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e},[])},h=function(t,e,r){var o={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&S("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var n={};r.filter(function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||r===s.TAG_PROPERTIES.REL&&"canonical"===t[r].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||c!==s.TAG_PROPERTIES.INNER_HTML&&c!==s.TAG_PROPERTIES.CSS_TEXT&&c!==s.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!t[r])return!1;var l=t[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][l]&&(n[r][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(n),c=0;c<i.length;c++){var u=i[c],l=(0,a.default)({},o[u],n[u]);o[u]=l}return t},[]).reverse()},E=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},y=(u=Date.now(),function(t){var e=Date.now();e-u>16?(u=e,t(e)):setTimeout(function(){y(t)},0)}),A=function(t){return clearTimeout(t)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:t.cancelAnimationFrame||A,S=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,v=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,d=t.title,p=t.titleAttributes;R(s.TAG_NAMES.BODY,n),R(s.TAG_NAMES.HTML,o),O(d,p);var T={baseTag:w(s.TAG_NAMES.BASE,r),linkTags:w(s.TAG_NAMES.LINK,i),metaTags:w(s.TAG_NAMES.META,a),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,c),scriptTags:w(s.TAG_NAMES.SCRIPT,l),styleTags:w(s.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach(function(t){var e=T[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(E[t]=T[t].oldTags)}),e&&e(),u(t,h,E)},_=function(t){return Array.isArray(t)?t.join(""):t},O=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),R(s.TAG_NAMES.TITLE,e)},R=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],l=e[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},w=function(t,e){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(t+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=e.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,r.isEqualNode(t)})?o.splice(a,1):i.push(r)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return r.appendChild(t)}),{oldTags:o,newTags:i}},M=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},P=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[s.REACT_TAG_MAP[r]||r]=t[r],e},e)},L=function(t,e,r){switch(t){case s.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[s.HELMET_ATTRIBUTE]=!0,o=P(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=M(r),i=_(e);return o?"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,n)+"</"+t+">":"<"+t+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(e)},toString:function(){return M(e)}};default:return{toComponent:function(){return function(t,e){return e.map(function(e,r){var n,o=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach(function(t){var r=s.REACT_TAG_MAP[t]||t;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]}),i.default.createElement(t,o)})}(t,e)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var o=Object.keys(n).filter(function(t){return!(t===s.TAG_PROPERTIES.INNER_HTML||t===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o=void 0===n[e]?e:e+'="'+l(n[e],r)+'"';return t?t+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")}(t,e,r)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[s.HTML_TAG_MAP[r]||r]=t[r],e},e)},e.handleClientStateChange=function(t){g&&m(g),t.defer?g=b(function(){v(t,function(){g=null})}):(v(t),g=null)},e.mapStateOnServer=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,l=t.styleTags,f=t.title,d=void 0===f?"":f,p=t.titleAttributes;return{base:L(s.TAG_NAMES.BASE,e,n),bodyAttributes:L(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:L(s.ATTRIBUTE_NAMES.HTML,o,n),link:L(s.TAG_NAMES.LINK,i,n),meta:L(s.TAG_NAMES.META,a,n),noscript:L(s.TAG_NAMES.NOSCRIPT,c,n),script:L(s.TAG_NAMES.SCRIPT,u,n),style:L(s.TAG_NAMES.STYLE,l,n),title:L(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},e.reducePropsToState=function(t){return{baseTag:T([s.TAG_PROPERTIES.HREF],t),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,t),defer:E(t,s.HELMET_PROPS.DEFER),encode:E(t,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,t),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],t),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],t),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=b,e.warn=S}).call(this,r(85))}}]);
//# sourceMappingURL=1-c521a70943653c586b5d.js.map