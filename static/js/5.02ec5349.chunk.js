(this["webpackJsonpgallery-react-app"]=this["webpackJsonpgallery-react-app"]||[]).push([[5],{100:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({controlId:void 0});t.a=r},102:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(29),i=n.n(o),c=n(0),u=n.n(c),s=n(30),l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.pill,l=e.className,f=e.as,p=void 0===f?"span":f,d=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),y=Object(s.b)(n,"badge");return u.a.createElement(p,Object(a.a)({ref:t},d,{className:i()(l,y,c&&y+"-pill",o&&y+"-"+o)}))}));l.displayName="Badge",l.defaultProps={pill:!1},t.a=l},106:function(e,t,n){"use strict";var a=n(90),r=n(91),o=n(94),i=n(92),c=n(95),u=n(0),s=n.n(u),l=n(107),f=n(99),p=(n(97),n(31)),d=n(93),y=n(24),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){n.setState({keyword:e.target.value}),""===e.target.value&&n.setState({keyword:""})},n.onSubmit=function(e){n.setState({keyword:e.target.value}),n.state.keyword&&y.a.push("/search/".concat(n.state.keyword))},n.onKeypress=function(e){"Enter"==e.key&&y.a.push("/search/".concat(n.state.keyword))},n.renderSearchButton=function(){return"/"==y.a.location.pathname?s.a.createElement(f.a,{variant:"warning",onClick:function(e){return n.onSubmit(e)},className:"border-raduis-3 text-white font-weight-bold px-5 searchBtn"},"Search"):s.a.createElement(f.a,{variant:"outline-warning",className:"border-raduis-3",onClick:function(e){return n.onSubmit(e)}},s.a.createElement("i",{className:"fa fa-search"}))},n.state={keyword:""},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.pagingType!==this.props.pagingType&&this.setState({keyword:""})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"w-100"},s.a.createElement("div",{className:"d-flex "+("/"==y.a.location.pathname?"search-input":"")},s.a.createElement(l.a,{value:this.state.keyword||"",onChange:function(t){return e.handleChange(t)},onKeyPress:function(t){return e.onKeypress(t)},placeholder:"Search in Gallery",className:"mr-2 border-0 shadow border-raduis-3"}),this.renderSearchButton()))}}]),t}(s.a.Component);t.a=Object(p.b)((function(e){return{currentPage:e.currentPage,pagingType:e.pagingType,searchKeyword:e.searchKeyword}}),{requestSearchPhotos:d.j,requestCollection:d.a,requestPhotos:d.g,requestSearchCollections:d.i,requestPagination:d.e})(b)},107:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(29),i=n.n(o),c=n(0),u=n.n(c),s=(n(118),n(119)),l=n(100),f=n(30),p=u.a.forwardRef((function(e,t){var n,o,s=e.bsPrefix,p=e.type,d=e.size,y=e.id,b=e.className,m=e.isValid,h=e.isInvalid,v=e.plaintext,w=e.readOnly,g=e.as,O=void 0===g?"input":g,j=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),N=Object(c.useContext)(l.a).controlId;if(s=Object(f.b)(s,"form-control"),v)(o={})[s+"-plaintext"]=!0,n=o;else if("file"===p){var k;(k={})[s+"-file"]=!0,n=k}else{var E;(E={})[s]=!0,E[s+"-"+d]=d,n=E}return u.a.createElement(O,Object(a.a)({},j,{type:p,ref:t,readOnly:w,id:y||N,className:i()(b,n,m&&"is-valid",h&&"is-invalid")}))}));p.displayName="FormControl",p.Feedback=s.a,t.a=p},108:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(29),i=n.n(o),c=n(0),u=n.n(c),s=n(30),l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,c=e.as,l=void 0===c?"div":c,f=e.className,p=Object(r.a)(e,["bsPrefix","fluid","as","className"]),d=Object(s.b)(n,"container");return u.a.createElement(l,Object(a.a)({ref:t},p,{className:i()(f,o?d+"-fluid":d)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},116:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(0),i=n.n(o),c=n(117);function u(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,s=e.disabled,l=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=f.href,n=f.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(a.a)({ref:t},f,{onClick:p,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),l)}))}));s.displayName="SafeAnchor",t.a=s},117:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},118:function(e,t,n){"use strict";var a=function(){};e.exports=a},119:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(29),i=n.n(o),c=n(0),u=n.n(c),s=n(7),l=n.n(s),f={type:l.a.string.isRequired,as:l.a.elementType},p=u.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.className,s=e.type,l=Object(r.a)(e,["as","className","type"]);return u.a.createElement(o,Object(a.a)({},l,{ref:t,className:i()(c,s&&s+"-feedback")}))}));p.displayName="Feedback",p.propTypes=f,p.defaultProps={type:"valid"},t.a=p},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(90),r=n(91),o=n(94),i=n(92),c=n(95),u=n(0),s=n.n(u),l=n(31),f=n(108),p=n(106),d=(n(171),function(){return s.a.createElement("div",{className:"w-100"},s.a.createElement("h1",{className:"header-text-color"},"Gallery React App"),s.a.createElement("p",{className:"header-text-color"},"Gallery app integrated with unsplash api unsing React"),s.a.createElement("p",{className:"header-text-color"},"You Can Search & Download images Easily"),s.a.createElement(p.a,null))}),y=n(102),b=(n(172),function(e){return s.a.createElement(y.a,{pill:!0,onClick:function(){return t=e.name,void e.searchWithChips(t);var t},variant:"warning",className:"keywordsChip mt-5 mx-4 px-4 py-3"},e.name," +")}),m=(n(97),n(173),n(24)),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).searchWithChips=function(e){m.a.push("/search/".concat(e))},n.renderChips=function(){return["love","wallpaper","Nature","Current Events","Film","Dark","Black & White","Travel","fashion","Kids"].map((function(e){return s.a.createElement(b,{key:e,name:e,searchWithChips:n.searchWithChips})}))},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"homeBg"},s.a.createElement(f.a,{className:"text-center d-flex h-100 align-items-center"},s.a.createElement("div",{className:"w-100"},s.a.createElement(d,null),this.renderChips())))}}]),t}(s.a.Component);t.default=Object(l.b)(null)(h)},90:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},91:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},93:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"j",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(4),r=function(e){return{type:a.n,payload:e}},o=function(e,t){return{type:a.q,payload:{page:e,keyword:t}}},i=function(e){return{type:a.h,payload:e}},c=function(e,t){return{type:a.p,payload:{page:e,keyword:t}}},u=function(e,t){return{type:a.j,payload:{page:e,id:t}}},s=function(e,t){return{type:a.o,payload:{page:e,id:t}}},l=function(e){return{type:a.k,payload:e}},f=function(e){return{type:a.l,payload:e}},p=function(e){return{type:a.m,payload:e}},d=function(e){return{type:a.i,payload:e}}},94:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return o}))},95:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},97:function(e,t,n){},99:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(29),i=n.n(o),c=n(0),u=n.n(c),s=n(30),l=n(116),f=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.size,f=e.active,p=e.className,d=e.block,y=e.type,b=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(s.b)(n,"btn"),v=i()(p,h,f&&"active",h+"-"+o,d&&h+"-block",c&&h+"-"+c);if(m.href)return u.a.createElement(l.a,Object(a.a)({},m,{as:b,ref:t,className:i()(v,m.disabled&&"disabled")}));t&&(m.ref=t),b||(m.type=y);var w=b||"button";return u.a.createElement(w,Object(a.a)({},m,{className:v}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f}}]);
//# sourceMappingURL=5.02ec5349.chunk.js.map