(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[7],{104:function(e,t,a){"use strict";var n=a(90),r=a(91),o=a(94),c=a(92),l=a(95),s=a(0),i=a.n(s),u=a(105),d=a(97),m=(a(99),a(31)),p=a(93),h=a(24),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState({keyword:e.target.value}),""===e.target.value&&a.setState({keyword:""})},a.onSubmit=function(e){a.setState({keyword:e.target.value}),a.state.keyword&&(console.log("/gallery-react-app"),h.a.push("".concat("/gallery-react-app","/search/").concat(a.state.keyword)))},a.onKeypress=function(e){"Enter"==e.key&&(console.log("/gallery-react-app"),h.a.push("".concat("/gallery-react-app","/search/").concat(a.state.keyword)))},a.renderSearchButton=function(){return"/"==h.a.location.pathname?i.a.createElement(d.a,{variant:"warning",onClick:function(e){return a.onSubmit(e)},className:"border-raduis-3 text-white font-weight-bold px-5 searchBtn"},"Search"):i.a.createElement(d.a,{variant:"outline-warning",className:"border-raduis-3",onClick:function(e){return a.onSubmit(e)}},i.a.createElement("i",{className:"fa fa-search"}))},a.state={keyword:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.pagingType!==this.props.pagingType&&this.setState({keyword:""})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"d-flex "+("/"==h.a.location.pathname?"search-input":"")},i.a.createElement(u.a,{value:this.state.keyword||"",onChange:function(t){return e.handleChange(t)},onKeyPress:function(t){return e.onKeypress(t)},placeholder:"Search in Gallery",className:"mr-2 border-0 shadow border-raduis-3"}),this.renderSearchButton()))}}]),t}(i.a.Component);t.a=Object(m.b)((function(e){return{currentPage:e.currentPage,pagingType:e.pagingType,searchKeyword:e.searchKeyword}}),{requestSearchPhotos:p.j,requestCollection:p.a,requestPhotos:p.g,requestSearchCollections:p.i,requestPagination:p.e})(g)},115:function(e,t,a){"use strict";var n=a(90),r=a(91),o=a(94),c=a(92),l=a(95),s=a(0),i=a.n(s),u=(a(129),a(31)),d=a(93),m=a(52),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).getCollections=function(){var e=a.props,t=e.requestCollection,n=e.requestPagination;t(1),n(1)},a.getPhotos=function(){var e=a.props,t=e.requestPhotos,n=e.requestPagination;t(1),n(1)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.props.pagingType;return i.a.createElement("div",{className:"text-white"},i.a.createElement(m.a,{to:"/photos",onClick:this.getPhotos,className:"navLink "+("photos"==this.props.pagingType?"text-warning":"text-white mx-2")},"Photos"),i.a.createElement(m.a,{to:"/collections",onClick:this.getCollections,className:"navLink "+("collections"==this.props.pagingType?"text-warning mx-2":"text-white mx-2")},"Collections"))}}]),t}(i.a.Component);t.a=Object(u.b)((function(e){return{pagingType:e.pagingType}}),{requestPhotos:d.g,requestCollection:d.a,requestPagination:d.e,requestSearchCollections:d.i,requestSearchPhotos:d.j})(p)},123:function(e,t,a){"use strict";var n=a(168),r=a(0),o=a.n(r),c=a(121),l=a(147),s=a(135),i=a(148),u=a(22),d=a(137),m=a.n(d),p=(a(32),a(206));a(124);t.a=function(e){var t=o.a.useState(!1),a=Object(n.a)(t,2),r=a[0],d=a[1],h=Object(u.d)();return o.a.createElement("div",null,o.a.createElement(c.a,{className:"border-0 shadow mb-3",onClick:function(){return d(!0)}},o.a.createElement("div",{className:"zoom-in-image"},o.a.createElement(m.a,{placeholder:"https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif",src:e.url},(function(e,t,a){return o.a.createElement(c.a.Img,{variant:"top",src:e})}))),o.a.createElement(c.a.Body,null,o.a.createElement(c.a.Title,{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"userData"},o.a.createElement(l.a,{src:e.user.profile_image.small,roundedCircle:!0}),o.a.createElement("small",{className:"mx-2"},e.user.name)),o.a.createElement(s.a,{onClick:function(){e.downloadImageId(e.id),h.show("Thanks , Wait Downloading")},icon:i.b,className:"text-warning downloadIcon"})),o.a.createElement(c.a.Text,null,e.description)),o.a.createElement(c.a.Footer,{className:"d-flex justify-content-between"},o.a.createElement("small",{className:"text-muted"},e.created_at),o.a.createElement("small",{className:"text-muted"},o.a.createElement(s.a,{icon:i.a,className:"mr-1"}),e.likes))),o.a.createElement((function(e){return o.a.createElement(p.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(p.a.Header,{closeButton:!0},o.a.createElement(p.a.Title,{id:"contained-modal-title-vcenter"})),o.a.createElement(p.a.Body,{className:"p-0"},o.a.createElement("div",{className:"backgroundImg",style:{backgroundImage:"url("+e.imageurl+")"}}," ")))}),{show:r,onHide:function(){return d(!1)},imageurl:e.url}))}},124:function(e,t,a){},125:function(e,t,a){"use strict";var n=a(90),r=a(91),o=a(94),c=a(92),l=a(95),s=a(0),i=a.n(s),u=a(97),d=a(31),m=a(93),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).getNext=function(){var e=a.props,t=e.collectionsId,n=e.searchKeyword,r=e.requestPagination,o=e.requestPhotos,c=e.requestSearchCollections,l=e.requestSearchPhotos,s=e.currentPage,i=e.pagingType,u=e.requestCollection,d=e.requestCollectionPhotos,m=s+1;r(m),"photos"===i?o(m):"search_photos"===i?l(m,n.keyword):"collections"===i?u(m):"search_collections"===i?c(m,n.keyword):"collection-photos"===i&&d(m,t)},a.getPrev=function(){var e=a.props,t=e.collectionsId,n=e.searchKeyword,r=e.requestPagination,o=e.requestPhotos,c=e.requestSearchCollections,l=e.requestSearchPhotos,s=e.currentPage,i=e.pagingType,u=e.requestCollectionPhotos;if(s>1){var d=s-1;r(d),"photos"===i?o(d):"search_photos"===i?l(d,n.keyword):"collections"===i?Object(m.a)(d):"search_collections"===i?c(d,n.keyword):"collection-photos"===i&&u(d,t)}},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement(u.a,{variant:"outline-warning",onClick:this.getPrev,className:"border-raduis-3 text-white px-5",disabled:1===this.props.currentPage},"Prev"),i.a.createElement("h6",{className:"text-white mb-0"},"Page ",this.props.currentPage),i.a.createElement(u.a,{variant:"outline-warning",onClick:this.getNext,className:"border-raduis-3 text-white px-5",rel:"last"},"Next"))}}]),t}(i.a.Component);t.a=Object(d.b)((function(e){return{currentPage:e.currentPage,pagingType:e.pagingType,searchKeyword:e.searchKeyword,collectionsId:e.collectionsId}}),{requestPagination:m.e,requestPhotos:m.g,requestSearchPhotos:m.j,requestCollection:m.a,requestSearchCollections:m.i,requestCollectionPhotos:m.c})(p)},126:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(121),c=a(122),l=a(128),s=a(149),i=(a(127),a(114)),u=a(52);t.a=function(e){if(void 0!==e.previewPhotos)var t=e.previewPhotos.map((function(e){return r.a.createElement(l.a,{xs:6,key:e.urls.thumb}," ",r.a.createElement("div",{className:"backgroundImg",style:{backgroundImage:"url("+e.urls.thumb+")"}}," "))})),a=e.tags.map((function(e){return r.a.createElement(i.a,{pill:!0,variant:"warning",className:"mr-2",key:e.title},e.title)}));return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/collections/".concat(e.id)},r.a.createElement(o.a,{className:"border-0 shadow mb-3"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,t)),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,r.a.createElement("small",{className:"text-secondary"},"Collection"),r.a.createElement("strong",{className:"d-block"},e.title)),r.a.createElement(o.a.Text,null,e.description),a),r.a.createElement(o.a.Footer,{className:"d-flex justify-content-between"},r.a.createElement("small",{className:"text-muted"},"Total Photos : ",e.totalPhotos)))))}},127:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(208),c=a(202),l=a(207),s=(a(131),a(115)),i=a(104);t.a=function(){return r.a.createElement(o.a,{sticky:"top",bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md"},r.a.createElement(o.a.Brand,{href:"/"},"Gallery"),r.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(c.a,{className:"mr-auto"},r.a.createElement(s.a,null)),r.a.createElement(l.a,{inline:!0},r.a.createElement(i.a,null))))}},131:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a(91),o=a(94),c=a(92),l=a(95),s=a(0),i=a.n(s),u=a(31),d=a(93),m=a(123),p=a(128),h=a(149),g=a(153),f=a(125),y=a(126),v=(a(115),a(130)),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).downloadImage=function(e){(0,a.props.requestDownloadPhoto)(e)},a.renderPhotosList=function(){var e=a.props.collectionPhotos;return e?e.map((function(e){return e.created_at=a.convertTime(e.created_at),i.a.createElement(m.a,{id:e.id,key:e.id,url:e.urls.full,name:e.id,created_at:e.created_at,description:e.description,likes:e.likes,user:e.user,downloadImageId:a.downloadImage})})):i.a.createElement("div",null,"Loading ...")},a.renderRelatedCollections=function(){var e=a.props.relatedCollections;return e?e.map((function(e){return i.a.createElement(p.a,{xs:12,key:e.id},i.a.createElement(y.a,{id:e.id,key:e.id,previewPhotos:e.preview_photos,tags:e.tags,title:e.title,totalPhotos:e.total_photos,description:e.description}))})):i.a.createElement("div",{className:"text-white"}," Still Loading ... ")},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.requestCollectionPhotos,a=e.requestCollectionId,n=e.requestRelatedCollections,r=e.requestPagination;t(1,this.props.computedMatch.params.id),a(this.props.computedMatch.params.id),n(1,this.props.computedMatch.params.id),r(1)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.requestCollectionPhotos,n=t.requestCollectionId,r=t.requestRelatedCollections,o=t.requestPagination;e.computedMatch.params.id!==this.props.computedMatch.params.id&&(a(1,this.props.computedMatch.params.id),o(1),n(this.props.computedMatch.params.id),r(1,this.props.computedMatch.params.id))}},{key:"convertTime",value:function(e){return new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v.a,null),i.a.createElement("div",{className:"photosContainer my-5"},i.a.createElement(h.a,null,i.a.createElement(p.a,{md:3},i.a.createElement("h5",{className:"text-warning mb-4"},"Related Collections"),i.a.createElement(h.a,null,this.renderRelatedCollections())),i.a.createElement(p.a,{md:9},i.a.createElement("h2",{className:"text-white"},"Collection's Photos"),i.a.createElement("blockquote",{className:"blockquote mb-0 text-white"},i.a.createElement("small",null," ","The picture that you took with your camera is the imagination you want to create with reality."," "),i.a.createElement("footer",{className:"blockquote-footer text-left"},"Scott Lorenzo")),i.a.createElement(g.a,{className:"my-5"},this.renderPhotosList()),i.a.createElement(f.a,null)))))}}]),t}(i.a.Component);t.default=Object(u.b)((function(e){return{collectionPhotos:Object.values(e.collectionPhotos),relatedCollections:Object.values(e.relatedCollections)}}),{requestPagination:d.e,requestCollectionPhotos:d.c,requestCollectionId:d.b,requestDownloadPhoto:d.d,requestRelatedCollections:d.h})(b)},93:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"j",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"i",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(4),r=function(e){return{type:n.n,payload:e}},o=function(e,t){return{type:n.q,payload:{page:e,keyword:t}}},c=function(e){return{type:n.h,payload:e}},l=function(e,t){return{type:n.p,payload:{page:e,keyword:t}}},s=function(e,t){return{type:n.j,payload:{page:e,id:t}}},i=function(e,t){return{type:n.o,payload:{page:e,id:t}}},u=function(e){return{type:n.k,payload:e}},d=function(e){return{type:n.l,payload:e}},m=function(e){return{type:n.m,payload:e}},p=function(e){return{type:n.i,payload:e}}},99:function(e,t,a){}}]);
//# sourceMappingURL=7.46cc163b.chunk.js.map