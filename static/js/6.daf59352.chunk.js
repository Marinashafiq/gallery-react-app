(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[6],{107:function(e,t,a){"use strict";var n=a(91),r=a(92),o=a(95),c=a(93),l=a(96),s=a(0),i=a.n(s),u=a(108),p=a(100),m=(a(98),a(30)),h=a(94),d=a(31),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState({keyword:e.target.value}),""===e.target.value&&a.setState({keyword:""})},a.onSubmit=function(e){a.setState({keyword:e.target.value}),a.state.keyword&&d.a.push("/search/".concat(a.state.keyword))},a.onKeypress=function(e){"Enter"==e.key&&d.a.push("/search/".concat(a.state.keyword))},a.renderSearchButton=function(){return"/"==d.a.location.pathname?i.a.createElement(p.a,{variant:"warning",onClick:function(e){return a.onSubmit(e)},className:"border-raduis-3 text-white font-weight-bold px-5 searchBtn"},"Search"):i.a.createElement(p.a,{variant:"outline-warning",className:"border-raduis-3",onClick:function(e){return a.onSubmit(e)}},i.a.createElement("i",{className:"fa fa-search"}))},a.state={keyword:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.pagingType!==this.props.pagingType&&this.setState({keyword:""})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"d-flex "+("/"==d.a.location.pathname?"search-input":"")},i.a.createElement(u.a,{value:this.state.keyword||"",onChange:function(t){return e.handleChange(t)},onKeyPress:function(t){return e.onKeypress(t)},placeholder:"Search in Gallery",className:"mr-2 border-0 shadow border-raduis-3"}),this.renderSearchButton()))}}]),t}(i.a.Component);t.a=Object(m.b)((function(e){return{currentPage:e.currentPage,pagingType:e.pagingType,searchKeyword:e.searchKeyword}}),{requestSearchPhotos:h.j,requestCollection:h.a,requestPhotos:h.g,requestSearchCollections:h.i,requestPagination:h.e})(g)},111:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(106),c=a(109),l=a(113),s=a(123),i=(a(112),a(103)),u=a(85);t.a=function(e){if(void 0!==e.previewPhotos)var t=e.previewPhotos.map((function(e){return r.a.createElement(l.a,{xs:6,key:e.urls.thumb}," ",r.a.createElement("div",{className:"backgroundImg",style:{backgroundImage:"url("+e.urls.thumb+")"}}," "))})),a=e.tags.map((function(e){return r.a.createElement(i.a,{pill:!0,variant:"warning",className:"mr-2",key:e.title},e.title)}));return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/collections/".concat(e.id)},r.a.createElement(o.a,{className:"border-0 shadow mb-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,t)),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,r.a.createElement("small",{className:"text-secondary"},"Collection"),r.a.createElement("strong",{className:"d-block"},e.title)),r.a.createElement(o.a.Text,null,e.description),a),r.a.createElement(o.a.Footer,{className:"d-flex justify-content-between"},r.a.createElement("small",{className:"text-muted"},"Total Photos : ",e.totalPhotos)))))}},112:function(e,t,a){},124:function(e,t,a){"use strict";var n=a(91),r=a(92),o=a(95),c=a(93),l=a(96),s=a(0),i=a.n(s),u=(a(133),a(30)),p=a(94),m=a(85),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).getCollections=function(){var e=a.props,t=e.requestCollection,n=e.requestPagination;t(1),n(1)},a.getPhotos=function(){var e=a.props,t=e.requestPhotos,n=e.requestPagination;t(1),n(1)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.props.pagingType;return i.a.createElement("div",{className:"text-white"},i.a.createElement(m.a,{to:"/photos",onClick:this.getPhotos,className:"navLink "+("photos"==this.props.pagingType?"text-warning":"text-white mx-2")},"Photos"),i.a.createElement(m.a,{to:"/collections",onClick:this.getCollections,className:"navLink "+("collections"==this.props.pagingType?"text-warning mx-2":"text-white mx-2")},"Collections"))}}]),t}(i.a.Component);t.a=Object(u.b)((function(e){return{pagingType:e.pagingType}}),{requestPhotos:p.g,requestCollection:p.a,requestPagination:p.e,requestSearchCollections:p.i,requestSearchPhotos:p.j})(h)},130:function(e,t,a){"use strict";var n=a(170),r=a(0),o=a.n(r),c=a(106),l=a(149),s=a(139),i=a(150),u=a(22),p=a(141),m=a.n(p),h=(a(32),a(208));a(131);t.a=function(e){var t=o.a.useState(!1),a=Object(n.a)(t,2),r=a[0],p=a[1],d=Object(u.d)();return o.a.createElement("div",null,o.a.createElement(c.a,{className:"border-0 shadow mb-3",onClick:function(){return p(!0)}},o.a.createElement("div",{className:"zoom-in-image"},o.a.createElement(m.a,{placeholder:"https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif",src:e.url},(function(e,t,a){return o.a.createElement(c.a.Img,{variant:"top",src:e})}))),o.a.createElement(c.a.Body,null,o.a.createElement(c.a.Title,{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"userData"},o.a.createElement(l.a,{src:e.user.profile_image.small,roundedCircle:!0}),o.a.createElement("small",{className:"mx-2"},e.user.name)),o.a.createElement(s.a,{onClick:function(){e.downloadImageId(e.id),d.show("Thanks , Wait Downloading")},icon:i.b,className:"text-warning downloadIcon"})),o.a.createElement(c.a.Text,null,e.description)),o.a.createElement(c.a.Footer,{className:"d-flex justify-content-between"},o.a.createElement("small",{className:"text-muted"},e.created_at),o.a.createElement("small",{className:"text-muted"},o.a.createElement(s.a,{icon:i.a,className:"mr-1"}),e.likes))),o.a.createElement((function(e){return o.a.createElement(h.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(h.a.Header,{closeButton:!0},o.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"})),o.a.createElement(h.a.Body,{className:"p-0"},o.a.createElement("div",{className:"backgroundImg",style:{backgroundImage:"url("+e.imageurl+")"}}," ")))}),{show:r,onHide:function(){return p(!1)},imageurl:e.url}))}},131:function(e,t,a){},132:function(e,t,a){"use strict";var n=a(91),r=a(92),o=a(95),c=a(93),l=a(96),s=a(0),i=a.n(s),u=a(100),p=a(30),m=a(94),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).getNext=function(){var e=a.props,t=e.collectionsId,n=e.searchKeyword,r=e.requestPagination,o=e.requestPhotos,c=e.requestSearchCollections,l=e.requestSearchPhotos,s=e.currentPage,i=e.pagingType,u=e.requestCollection,p=e.requestCollectionPhotos,m=s+1;r(m),"photos"===i?o(m):"search_photos"===i?l(m,n.keyword):"collections"===i?u(m):"search_collections"===i?c(m,n.keyword):"collection-photos"===i&&p(m,t)},a.getPrev=function(){var e=a.props,t=e.collectionsId,n=e.searchKeyword,r=e.requestPagination,o=e.requestPhotos,c=e.requestSearchCollections,l=e.requestSearchPhotos,s=e.currentPage,i=e.pagingType,u=e.requestCollectionPhotos;if(s>1){var p=s-1;r(p),"photos"===i?o(p):"search_photos"===i?l(p,n.keyword):"collections"===i?Object(m.a)(p):"search_collections"===i?c(p,n.keyword):"collection-photos"===i&&u(p,t)}},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement(u.a,{variant:"outline-warning",onClick:this.getPrev,className:"border-raduis-3 text-white px-5",disabled:1===this.props.currentPage},"Prev"),i.a.createElement("h6",{className:"text-white mb-0"},"Page ",this.props.currentPage),i.a.createElement(u.a,{variant:"outline-warning",onClick:this.getNext,className:"border-raduis-3 text-white px-5",rel:"last"},"Next"))}}]),t}(i.a.Component);t.a=Object(p.b)((function(e){return{currentPage:e.currentPage,pagingType:e.pagingType,searchKeyword:e.searchKeyword,collectionsId:e.collectionsId}}),{requestPagination:m.e,requestPhotos:m.g,requestSearchPhotos:m.j,requestCollection:m.a,requestSearchCollections:m.i,requestCollectionPhotos:m.c})(h)},133:function(e,t,a){},134:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(210),c=a(204),l=a(209),s=(a(135),a(124)),i=a(107);t.a=function(){return r.a.createElement(o.a,{sticky:"top",bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md"},r.a.createElement(o.a.Brand,{href:"/"},"Gallery"),r.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(c.a,{className:"mr-auto"},r.a.createElement(s.a,null)),r.a.createElement(l.a,{inline:!0},r.a.createElement(i.a,null))))}},135:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(91),r=a(92),o=a(95),c=a(93),l=a(96),s=a(0),i=a.n(s),u=a(30),p=a(94),m=a(111),h=(a(98),a(31)),d=a(32),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).renderCollectionList=function(){var e=a.props.collections;return e?e.map((function(e){var t=e.id,a=e.preview_photos,n=e.tags,r=e.title,o=e.total_photos,c=e.description;return i.a.createElement(m.a,{id:t,key:t,previewPhotos:a,tags:n,title:r,totalPhotos:o,description:c})})):i.a.createElement(d.a,null)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if("/collections"==h.a.location.pathname){var e=this.props;e.requestCollection;(0,e.requestPagingType)("collections")}}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderCollectionList())}}]),t}(i.a.Component);t.default=Object(u.b)((function(e){return{collections:Object.values(e.collections)}}),{requestCollection:p.a,requestPagingType:p.f})(g)},183:function(e,t,a){},188:function(e,t){},190:function(e,t){},212:function(e,t,a){"use strict";a.r(t);var n=a(91),r=a(92),o=a(95),c=a(93),l=a(96),s=a(0),i=a.n(s),u=a(30),p=a(94),m=a(130),h=a(31),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).downloadImage=function(e){(0,a.props.requestDownloadPhoto)(e)},a.renderPhotosList=function(){return a.props.photos.map((function(e){var t=e.id,n=e.urls,r=e.description,o=e.likes,c=e.user,l=e.created_at;return l=a.convertTime(e.created_at),i.a.createElement(m.a,{id:t,key:t,url:n.full,name:t,created_at:l,description:r,likes:o,user:c,downloadImageId:a.downloadImage})}))},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if("/photos"==h.a.location.pathname){var e=this.props,t=e.requestPhotos,a=e.requestPagingType;t(1),a("photos")}}},{key:"convertTime",value:function(e){return new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderPhotosList())}}]),t}(i.a.Component),g=Object(u.b)((function(e){return{photos:Object.values(e.photos)}}),{requestPhotos:p.g,requestDownloadPhoto:p.d,requestPagingType:p.f})(d),f=a(155),y=a(154),E=a(109),v=a(132),b=a(134),w=a(213),k=a(207),P=(a(183),a(184),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).renderSearchHeader=function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:"text-white mb-0"},"Search Results"),i.a.createElement("p",{className:"text-warning mb-0"},a.props.searchKeyword.keyword))},a.handleSelect=function(e){a.props.requestPagination(1),"photos"===e?(console.log("FROM TABSSS"),a.props.requestSearchPhotos(a.props.currentPage,a.props.computedMatch.params.keyword),a.props.requestPagingType("search_photos")):(a.props.requestSearchCollections(a.props.currentPage,a.props.computedMatch.params.keyword),a.props.requestPagingType("search_collections"))},a.renderSearchResults=function(){return i.a.createElement("div",null,a.renderSearchHeader(),i.a.createElement(w.a,{className:"mt-4",defaultActiveKey:"photos",onSelect:a.handleSelect,id:"uncontrolled-tab-example"},i.a.createElement(k.a,{eventKey:"photos",title:"Photos"},i.a.createElement(y.a,{className:"my-5"},i.a.createElement(g,null))),i.a.createElement(k.a,{eventKey:"collections",title:"Collections"},i.a.createElement(y.a,{className:"my-5"},i.a.createElement(f.default,null)))))},a.renderContent=function(){switch(a.props.pagingType){case"search_photos":case"search_collections":return a.renderSearchResults();case"photos":return i.a.createElement("div",null,i.a.createElement("h2",{className:"text-white font-weight-bold"},"Photos"),i.a.createElement("small",{className:"text-warning"},"Check latest photos in Gallery"),i.a.createElement("blockquote",{className:"blockquote mb-0 text-secondary w-75"},i.a.createElement("small",null," ","Photography is a kind of virtual reality, and it helps if you can create the illusion of being in an interesting world."," "),i.a.createElement("footer",{className:"blockquote-footer text-left"},"Steven Pinker")),i.a.createElement(y.a,{className:"my-5"},i.a.createElement(g,null)));case"collections":return i.a.createElement("div",null,i.a.createElement("h2",{className:"text-white font-weight-bold"},"Collections"),i.a.createElement("small",{className:"text-warning"},"Check latest collections in Gallery"),i.a.createElement("blockquote",{className:"blockquote mb-0 text-secondary w-75"},i.a.createElement("small",null," ","Life is like a camera. Just focus on what\u2019s important and capture the good times, develop from the negatives and if things don\u2019t work out, just take another shot."," ")),i.a.createElement(y.a,{className:"my-5"},i.a.createElement(f.default,null)));default:return null}},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.pagingType),"/photos"!==h.a.location.pathname&&"/collections"!==h.a.location.pathname?(console.log("HEREEEEEE"),this.props.requestSearchPhotos(this.props.currentPage,this.props.computedMatch.params.keyword),this.props.requestPagingType("search_photos")):"/collections"==h.a.location.pathname&&this.props.requestCollection(this.props.currentPage)}},{key:"componentDidUpdate",value:function(e){e.computedMatch.params.keyword!==this.props.computedMatch.params.keyword&&"/photos"!==h.a.location.pathname&&"/collections"!==h.a.location.pathname&&(console.log("FROM UPDATEEE"),this.props.requestPagination(1),this.props.requestSearchPhotos(this.props.currentPage,this.props.computedMatch.params.keyword),this.props.requestPagingType("search_photos"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b.a,null),i.a.createElement(E.a,{className:"my-4"},this.renderContent(),i.a.createElement(v.a,null)))}}]),t}(i.a.Component));t.default=Object(u.b)((function(e){return{currentPage:e.currentPage,searchKeyword:e.searchKeyword,pagingType:e.pagingType}}),{requestCollection:p.a,requestSearchCollections:p.i,requestSearchPhotos:p.j,requestPagingType:p.f,requestPagination:p.e})(P)},94:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"j",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"i",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(4),r=function(e){return{type:n.n,payload:e}},o=function(e,t){return{type:n.q,payload:{page:e,keyword:t}}},c=function(e){return{type:n.h,payload:e}},l=function(e,t){return{type:n.p,payload:{page:e,keyword:t}}},s=function(e,t){return{type:n.j,payload:{page:e,id:t}}},i=function(e,t){return{type:n.o,payload:{page:e,id:t}}},u=function(e){return{type:n.k,payload:e}},p=function(e){return{type:n.l,payload:e}},m=function(e){return{type:n.m,payload:e}},h=function(e){return{type:n.i,payload:e}}},98:function(e,t,a){}}]);
//# sourceMappingURL=6.daf59352.chunk.js.map