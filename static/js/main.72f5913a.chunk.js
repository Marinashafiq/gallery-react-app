(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[1],{20:function(e,t,n){"use strict";var a=n(15);t.a=Object(a.a)()},32:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(45);n(65);t.a=function(){return r.a.createElement("div",{className:"loaderContainer"},r.a.createElement(c.a,{animation:"border",variant:"warning"}))}},4:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"q",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"p",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"o",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"l",(function(){return b})),n.d(t,"m",(function(){return v})),n.d(t,"i",(function(){return O}));var a="RECEIVE_PHOTOS",r="REQUEST_PHOTOS",c="REQUEST_SEARCH_PHOTOS",o="RECEIVE_SEARCH_PHOTOS",s="RECEIVE_COLLECTIONS",u="REQUEST_COLLECTIONS",l="REQUEST_SEARCH_COLLECTIONS",i="RECEIVE_SEARCH_COLLECTIONS",p="REQUEST_COLLECTION_PHOTOS",d="RECEIVE_COLLECTION_PHOTOS",h="REQUEST_RELATED_COLLECTIONS",f="RECEIVE_RELATED_COLLECTIONS",g="REQUEST_DOWNLOAD_PHOTO",E="RECEIVE_DOWNLOAD_PHOTO",b="REQUEST_PAGINATION",v="REQUEST_PAGINATION_TYPE",O="REQUEST_COLLECTION_ID"},53:function(e,t,n){e.exports=n(85)},64:function(e,t,n){},65:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=n(31),u=(n(62),n(63),n(23)),l=n(44),i=(n(64),n(86)),p=n(20),d=n(32),h=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,209))})),f=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,204))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,210))})),E=r.a.createElement(a.Suspense,{fallback:r.a.createElement(d.a,null)},console.log("Test routes"),r.a.createElement(i.b,{history:p.a},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/gallery-react-app/",component:h,exact:!0}),r.a.createElement(i.a,{path:"/gallery-react-app/search/:keyword",component:g,exact:!0}),r.a.createElement(g,{path:"/gallery-react-app/photos",exact:!0}),r.a.createElement(g,{path:"/gallery-react-app/collections",exact:!0}),r.a.createElement(f,{path:"/gallery-react-app/collections/:id",exact:!0})))),b=function(){return console.log("ROUTES"),r.a.createElement("div",{className:"App"},r.a.createElement(i.b,{basename:"/gallery-react-app",history:p.a},E))},v=n(13),O=n(50),y=n(10),x=n(4),w=Object(v.c)({photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.d:case x.g:return Object(y.a)({},e,{},t.payload);default:return e}},collections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.a:case x.f:return Object(y.a)({},e,{},t.payload);default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return"REQUEST_PAGINATION"===t.type?t.payload:e},pagingType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"search_photos",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.d:return"photos";case x.g:return"search_photos";case x.f:return"search_collections";case x.a:return"collections";case x.b:return"collection-photos";default:return e}},searchKeyword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.q:case x.p:return Object(y.a)({},t.payload);default:return e}},collectionPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.b:return Object(y.a)({},e,{},t.payload);default:return e}},collectionsId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.i:return t.payload;default:return e}},relatedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.e:return Object(y.a)({},e,{},t.payload);default:return e}}}),_=n(6),m=n.n(_),C=n(8),T=n(48),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(e.hasOwnProperty("handlerEnabled")&&!e.handlerEnabled)},S=n.n(T).a.create({baseURL:"https://api.unsplash.com/",headers:{"Accept-Version":"v1",Authorization:"Client-ID f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017"},params:{client_id:"f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017"}});S.interceptors.request.use((function(e){return function(e){return j(e)&&document.body.classList.add("loading-indicator"),e}(e)})),S.interceptors.response.use((function(e){return function(e){return j(e.config)&&document.body.classList.remove("loading-indicator"),e}(e)}),(function(e){return function(e){return j(e.config)&&console.log("Request error"),Promise.reject(Object(y.a)({},e))}(e)}));var R=S,I={getPhotos:function(){var e,t=arguments;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,m.a.awrap(R.get("/photos?per_page=20&page=".concat(e),{handlerEnabled:!0}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},getSearchPhotos:function(){var e,t,n=arguments;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,m.a.awrap(R.get("/search/photos?per_page=20&page=".concat(e,"&query=").concat(t),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getCollections:function(){var e,t=arguments;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,m.a.awrap(R.get("/collections?per_page=20&page=".concat(e),{handlerEnabled:!0}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},getSearchCollections:function(){var e,t,n=arguments;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,m.a.awrap(R.get("/search/collections?per_page=20&page=".concat(e,"&query=").concat(t),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getCollectionPhotos:function(){var e,t,n=arguments;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,m.a.awrap(R.get("/collections/".concat(t,"/photos?per_page=20&page=").concat(e),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getRelatedCollections:function(){var e,t,n=arguments;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,m.a.awrap(R.get("/collections/".concat(t,"/related?per_page=20&page=").concat(e),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},downloadImages:function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(R.get("/photos/".concat(e,"/download"),{handlerEnabled:!0}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}},L=n(49),P=n.n(L),k=m.a.mark(q),N=m.a.mark(z),A=m.a.mark(G),U=m.a.mark(B),H=m.a.mark(J),Q=m.a.mark(M),D=m.a.mark(W),V=m.a.mark(X);function q(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.getPhotos,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)({type:x.d,payload:t.data,totalPages:t.headers["x-total"]});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),k,null,[[0,8]])}function z(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.getSearchPhotos,e.payload.page,e.payload.keyword);case 3:return t=n.sent,n.next=6,Object(C.b)({type:x.g,payload:t.data.results,totalPages:t.headers["x-total"]});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),N,null,[[0,8]])}function G(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.getCollections,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)({type:x.a,payload:t.data});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),A,null,[[0,8]])}function B(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.getSearchCollections,e.payload.page,e.payload.keyword);case 3:return t=n.sent,n.next=6,Object(C.b)({type:x.f,payload:t.data.results});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),U,null,[[0,8]])}function J(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),n.next=4,Object(C.a)(I.getCollectionPhotos,e.payload.page,e.payload.id);case 4:return t=n.sent,n.next=7,Object(C.b)({type:x.b,payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),H,null,[[0,9]])}function M(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.getRelatedCollections,e.payload.page,e.payload.id);case 3:return t=n.sent,n.next=6,Object(C.b)({type:x.e,payload:t.data});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),Q,null,[[0,8]])}function W(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(I.downloadImages,e.payload);case 3:return t=n.sent,P.a.saveAs(t.data.url,"Unsplash-".concat(e.payload,".jpg")),n.next=7,Object(C.b)({type:x.c,payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),D,null,[[0,9]])}function X(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)(x.n,q);case 2:return e.next=4,Object(C.c)(x.q,z);case 4:return e.next=6,Object(C.c)(x.h,G);case 6:return e.next=8,Object(C.c)(x.p,B);case 8:return e.next=10,Object(C.c)(x.j,J);case 10:return e.next=12,Object(C.c)(x.o,M);case 12:return e.next=14,Object(C.c)(x.k,W);case 14:case"end":return e.stop()}}),V)}var K=Object(O.a)(),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,F=Object(v.e)(w,Y(Object(v.a)(K)));K.run(X);var Z=F,$=(n(84),{position:u.b.BOTTOM_CENTER,timeout:1e4,offset:"30px",type:"success",transition:u.c.SCALE,containerStyle:{zIndex:100}});o.a.render(r.a.createElement(s.a,{store:Z},r.a.createElement(u.a,Object.assign({template:l.a},$),r.a.createElement(b,null))),document.getElementById("root"))}},[[53,2,3]]]);
//# sourceMappingURL=main.72f5913a.chunk.js.map