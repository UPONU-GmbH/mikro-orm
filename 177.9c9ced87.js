/*! For license information please see 177.9c9ced87.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{126:function(e,t,a){"use strict";a.r(t);a(326),a(350),a(351),a(23),a(17),a(18),a(52);var n=a(0),r=a.n(n),c=a(307),l=a(305);t.default=function(e){var t=e.tags,a={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)}));var n=Object.entries(a).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],n=e[1];return r.a.createElement("div",{key:a},r.a.createElement("h3",null,a),n.map((function(e){return r.a.createElement(l.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(c.a,{title:"Blog Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}},303:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},307:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(316),l=a(304),i=a(306),o=a(1),s=a(9),u=a(305),d=(a(49),a(23),a(17),a(18),a(68),a(303)),h=a.n(d),f=a(309),m=!1,v=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(l.a)().siteConfig,o=(void 0===i?{}:i).themeConfig.algolia,s=Object(f.b)(),u=function(){t.current||(window.docsearch({appId:o.appId,apiKey:o.apiKey,indexName:o.indexName,inputSelector:"#search_input_react",algoliaOptions:o.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;s.push(r)}}),t.current=!0)},d=function(){m?u():Promise.all([a.e(176).then(a.t.bind(null,404,7)),a.e(119).then(a.t.bind(null,405,7))]).then((function(e){var t=e[0].default;m=!0,window.docsearch=t,u()}))},v=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:v,onBlur:v,ref:c}))},p=a(310),b=a.n(p),g=a(121),k=a.n(g),E=function(){return r.a.createElement("span",{className:h()(k.a.toggle,k.a.moon)})},y=function(){return r.a.createElement("span",{className:h()(k.a.toggle,k.a.sun)})},_=function(e){var t=Object(l.a)().isClient;return r.a.createElement(b.a,Object(o.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}},e))},O=function(){var e=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):""),t=e[0],a=e[1];n.useEffect((function(){document.documentElement.setAttribute("data-theme",t)}),[t]),n.useEffect((function(){try{var e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}}),[a]);var r=n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a]);return[t,r]},w=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(0),l=c[0],i=c[1],o=Object(n.useState)(0),s=o[0],u=o[1],d=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]),h=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-s,a=window.innerHeight;e<s||(l&&e>l?r(!1):e+a<t&&r(!0),i(e))};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[l,s]),{navbarRef:d,isNavbarVisible:a}},j=a(122),C=a.n(j);function N(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(s.a)(e,["to","href","label","position"])),l=Object(i.a)(t);return r.a.createElement(u.a,Object(o.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var x=function(){var e,t=Object(l.a)().siteConfig,a=void 0===t?{}:t,c=a.baseUrl,s=a.themeConfig,d=void 0===s?{}:s,f=d.navbar,m=void 0===f?{}:f,p=d.disableDarkMode,b=void 0!==p&&p,g=m.title,k=m.logo,E=void 0===k?{}:k,y=m.links,j=void 0===y?[]:y,x=m.hideOnScroll,S=void 0!==x&&x,T=Object(n.useState)(!1),B=T[0],M=T[1],P=Object(n.useState)(!1),F=P[0],X=P[1],I=O(),L=I[0],D=I[1],R=w(S),A=R.navbarRef,H=R.isNavbarVisible,K=Object(n.useCallback)((function(){document.body.style.overflow="hidden",M(!0)}),[M]),U=Object(n.useCallback)((function(){document.body.style.overflow="visible",M(!1)}),[M]),V=Object(n.useCallback)((function(e){return D(e.target.checked?"dark":"")}),[D]),Y=Object(i.a)(E.src);return r.a.createElement("nav",{ref:A,className:h()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":B},e[C.a.navbarHideable]=S,e[C.a.navbarHidden]=!H,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:K,onKeyDown:K},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:c},null!=E&&r.a.createElement("img",{className:"navbar__logo",src:Y,alt:E.alt}),null!=g&&r.a.createElement("strong",{className:F?C.a.hideLogoText:""},g)),j.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(N,Object(o.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(N,Object(o.a)({},e,{key:t}))})),!b&&r.a.createElement(_,{className:C.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===L,onChange:V}),r.a.createElement(v,{handleSearchBarToggle:X,isSearchBarExpanded:F}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:U}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:U,to:c},null!=E&&r.a.createElement("img",{className:"navbar__logo",src:Y,alt:E.alt}),null!=g&&r.a.createElement("strong",null,g)),!b&&B&&r.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===L,onChange:V})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},j.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(N,Object(o.a)({className:"menu__link"},e,{onClick:U})))})))))))},S=a(308);a(123);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,o=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,m=e.noFooter,v=e.description,p=e.image,b=e.keywords,g=e.permalink,k=e.version,E=f||s+" \xb7 "+o,y=p||u,_=d+Object(i.a)(y),O=Object(i.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(x,null),r.a.createElement("div",{className:"main-wrapper"},h),!m&&r.a.createElement(S.a,null))}},309:function(e,t,a){"use strict";var n=a(35);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},310:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),i=h(a(303)),o=h(a(11)),s=h(a(311)),u=h(a(312)),d=a(313);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},311:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},312:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},313:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},326:function(e,t,a){var n=a(24).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(12)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},350:function(e,t,a){var n=a(19),r=a(76)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},351:function(e,t,a){"use strict";var n=a(19),r=a(25),c=a(50),l=a(20),i=[].sort,o=[1,2,3];n(n.P+n.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!a(352)(i)),"Array",{sort:function(e){return void 0===e?i.call(c(this)):i.call(c(this),r(e))}})},352:function(e,t,a){"use strict";var n=a(20);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}}}]);