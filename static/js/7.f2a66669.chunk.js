(this["webpackJsonpgallery-react-app"]=this["webpackJsonpgallery-react-app"]||[]).push([[7],{102:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=n(0),u=n.n(i),l=n(29),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,i=e.pill,s=e.className,f=e.as,d=void 0===f?"span":f,p=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),m=Object(l.b)(n,"badge");return u.a.createElement(d,Object(a.a)({ref:t},p,{className:c()(s,m,i&&m+"-pill",o&&m+"-"+o)}))}));s.displayName="Badge",s.defaultProps={pill:!1},t.a=s},105:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=n(0),u=n.n(i),l=n(29),s=n(98),f=n(120),d=n(121),p=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,s=e.as,f=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(l.b)(n,"card-img");return u.a.createElement(f,Object(a.a)({ref:t,className:c()(i?p+"-"+i:p,o)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var m=p,b=Object(f.a)("h5"),y=Object(f.a)("h6"),v=Object(s.a)("card-body"),j=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,f=e.text,p=e.border,m=e.body,b=e.children,y=e.as,j=void 0===y?"div":y,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(l.b)(n,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return u.a.createElement(d.a.Provider,{value:g},u.a.createElement(j,Object(a.a)({ref:t},O,{className:c()(o,h,s&&"bg-"+s,f&&"text-"+f,p&&"border-"+p)}),m?u.a.createElement(v,null,b):b))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=m,j.Title=Object(s.a)("card-title",{Component:b}),j.Subtitle=Object(s.a)("card-subtitle",{Component:y}),j.Body=v,j.Link=Object(s.a)("card-link",{Component:"a"}),j.Text=Object(s.a)("card-text",{Component:"p"}),j.Header=Object(s.a)("card-header"),j.Footer=Object(s.a)("card-footer"),j.ImgOverlay=Object(s.a)("card-img-overlay");t.a=j},108:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=n(0),u=n.n(i),l=n(29),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,s=void 0===i?"div":i,f=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.b)(n,"container");return u.a.createElement(s,Object(a.a)({ref:t},d,{className:c()(f,o?p+"-fluid":p)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s},110:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(105),c=n(108),i=n(112),u=n(122),l=(n(111),n(102)),s=n(85);t.a=function(e){if(void 0!==e.previewPhotos)var t=e.previewPhotos.map((function(e){return r.a.createElement(i.a,{xs:6,key:e.urls.thumb}," ",r.a.createElement("div",{className:"backgroundImg",style:{backgroundImage:"url("+e.urls.thumb+")"}}," "))})),n=e.tags.map((function(e){return r.a.createElement(l.a,{pill:!0,variant:"warning",className:"mr-2",key:e.title},e.title)}));return r.a.createElement("div",null,r.a.createElement(s.a,{to:"/collections/".concat(e.id)},r.a.createElement(o.a,{className:"border-0 shadow mb-3"},r.a.createElement(c.a,null,r.a.createElement(u.a,null,t)),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,r.a.createElement("small",{className:"text-secondary"},"Collection"),r.a.createElement("strong",{className:"d-block"},e.title)),r.a.createElement(o.a.Text,null,e.description),n),r.a.createElement(o.a.Footer,{className:"d-flex justify-content-between"},r.a.createElement("small",{className:"text-muted"},"Total Photos : ",e.totalPhotos)))))}},111:function(e,t,n){},112:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=n(0),u=n.n(i),l=n(29),s=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,f=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(l.b)(n,"col"),m=[],b=[];return s.forEach((function(e){var t,n,a,r=d[e];if(delete d[e],null!=r&&"object"===typeof r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+c:""+p+c+"-"+t),null!=a&&b.push("order"+c+"-"+a),null!=n&&b.push("offset"+c+"-"+n)})),m.length||m.push(p),u.a.createElement(f,Object(a.a)({},d,{ref:t,className:c.a.apply(void 0,[o].concat(m,b))}))}));f.displayName="Col",t.a=f},120:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(28),i=n.n(c);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))}},121:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=r.a.createContext(null)},122:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=n(0),u=n.n(i),l=n(29),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.noGutters,i=e.as,s=void 0===i?"div":i,f=e.className,d=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(l.b)(n,"row");return u.a.createElement(s,Object(a.a)({ref:t},d,{className:c()(f,p,o&&"no-gutters")}))}));s.defaultProps={noGutters:!1},t.a=s},154:function(e,t,n){"use strict";n.r(t);var a=n(90),r=n(91),o=n(94),c=n(92),i=n(95),u=n(0),l=n.n(u),s=n(30),f=n(93),d=n(110),p=(n(97),n(31)),m=n(32),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).renderCollectionList=function(){var e=n.props.collections;return e?e.map((function(e){var t=e.id,n=e.preview_photos,a=e.tags,r=e.title,o=e.total_photos,c=e.description;return l.a.createElement(d.a,{id:t,key:t,previewPhotos:n,tags:a,title:r,totalPhotos:o,description:c})})):l.a.createElement(m.a,null)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if("/collections"==p.a.location.pathname){var e=this.props;e.requestCollection;(0,e.requestPagingType)("collections")}}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderCollectionList())}}]),t}(l.a.Component);t.default=Object(s.b)((function(e){return{collections:Object.values(e.collections)}}),{requestCollection:f.a,requestPagingType:f.f})(b)},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(86),r=n(12),o=n(0),c=n.n(o),i=n(15),u=(n(7),n(3)),l=n(9),s=n(14);c.a.Component;c.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},d=function(e,t){return"string"===typeof e?Object(i.c)(e,null,null,t):e},p=function(e){return e},m=c.a.forwardRef;"undefined"===typeof m&&(m=p);var b=m((function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,o=Object(l.a)(e,["innerRef","navigate","onClick"]),i=o.target,s=Object(u.a)({},o,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return s.ref=p!==m&&t||n,c.a.createElement("a",s)}));var y=m((function(e,t){var n=e.component,r=void 0===n?b:n,o=e.replace,i=e.to,y=e.innerRef,v=Object(l.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(a.c.Consumer,null,(function(e){e||Object(s.a)(!1);var n=e.history,a=d(f(i,e.location),e.location),l=a?n.createHref(a):"",b=Object(u.a)({},v,{href:l,navigate:function(){var t=f(i,e.location);(o?n.replace:n.push)(t)}});return p!==m?b.ref=t||y:b.innerRef=y,c.a.createElement(r,b)}))})),v=function(e){return e},j=c.a.forwardRef;"undefined"===typeof j&&(j=v);j((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,o=e.activeClassName,i=void 0===o?"active":o,p=e.activeStyle,m=e.className,b=e.exact,O=e.isActive,h=e.location,g=e.strict,N=e.style,E=e.to,P=e.innerRef,w=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return c.a.createElement(a.c.Consumer,null,(function(e){e||Object(s.a)(!1);var n=h||e.location,o=d(f(E,n),n),l=o.pathname,x=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=x?Object(a.d)(n.pathname,{path:x,exact:b,strict:g}):null,k=!!(O?O(C,n):C),R=k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(m,i):m,S=k?Object(u.a)({},N,{},p):N,_=Object(u.a)({"aria-current":k&&r||null,className:R,style:S,to:o},w);return v!==j?_.ref=t||P:_.innerRef=P,c.a.createElement(y,_)}))}))},90:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},91:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},93:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"j",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(4),r=function(e){return{type:a.n,payload:e}},o=function(e,t){return{type:a.q,payload:{page:e,keyword:t}}},c=function(e){return{type:a.h,payload:e}},i=function(e,t){return{type:a.p,payload:{page:e,keyword:t}}},u=function(e,t){return{type:a.j,payload:{page:e,id:t}}},l=function(e,t){return{type:a.o,payload:{page:e,id:t}}},s=function(e){return{type:a.k,payload:e}},f=function(e){return{type:a.l,payload:e}},d=function(e){return{type:a.m,payload:e}},p=function(e){return{type:a.i,payload:e}}},94:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return o}))},95:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},97:function(e,t,n){},98:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(28),c=n.n(o),i=/-(.)/g;var u=n(0),l=n.n(u),s=n(29);n.d(t,"a",(function(){return d}));var f=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,o=n.displayName,i=void 0===o?f(e):o,u=n.Component,d=void 0===u?"div":u,p=n.defaultProps,m=l.a.forwardRef((function(t,n){var o=t.className,i=t.bsPrefix,u=t.as,f=void 0===u?d:u,p=Object(r.a)(t,["className","bsPrefix","as"]),m=Object(s.b)(i,e);return l.a.createElement(f,Object(a.a)({ref:n,className:c()(o,m)},p))}));return m.defaultProps=p,m.displayName=i,m}}}]);
//# sourceMappingURL=7.f2a66669.chunk.js.map