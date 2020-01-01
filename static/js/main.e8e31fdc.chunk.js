(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[1],{20:function(e,t,n){"use strict";var a=n(15);t.a=Object(a.a)()},32:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(44);n(65);t.a=function(){return r.a.createElement("div",{className:"loaderContainer"},r.a.createElement(c.a,{animation:"border",variant:"warning"}))}},4:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"q",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"p",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"o",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return E})),n.d(t,"c",(function(){return g})),n.d(t,"l",(function(){return b})),n.d(t,"m",(function(){return v})),n.d(t,"i",(function(){return O}));var a="RECEIVE_PHOTOS",r="REQUEST_PHOTOS",c="REQUEST_SEARCH_PHOTOS",o="RECEIVE_SEARCH_PHOTOS",s="RECEIVE_COLLECTIONS",u="REQUEST_COLLECTIONS",l="REQUEST_SEARCH_COLLECTIONS",i="RECEIVE_SEARCH_COLLECTIONS",p="REQUEST_COLLECTION_PHOTOS",d="RECEIVE_COLLECTION_PHOTOS",h="REQUEST_RELATED_COLLECTIONS",f="RECEIVE_RELATED_COLLECTIONS",E="REQUEST_DOWNLOAD_PHOTO",g="RECEIVE_DOWNLOAD_PHOTO",b="REQUEST_PAGINATION",v="REQUEST_PAGINATION_TYPE",O="REQUEST_COLLECTION_ID"},52:function(e,t,n){e.exports=n(85)},64:function(e,t,n){},65:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=n(31),u=(n(61),n(62),n(24)),l=(n(63),n(64),n(86)),i=n(20),p=n(32),d=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,209))})),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,204))})),f=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,210))})),E=r.a.createElement(a.Suspense,{fallback:r.a.createElement(p.a,null)},console.log("Test routes"),r.a.createElement(l.b,{history:i.a},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/gallery-react-app/",component:d,exact:!0}),r.a.createElement(f,{path:"/search/:keyword",exact:!0}),r.a.createElement(f,{path:"/photos",exact:!0}),r.a.createElement(f,{path:"/collections",exact:!0}),r.a.createElement(h,{path:"/collections/:id",exact:!0})))),g=function(){return console.log("ROUTES"),r.a.createElement("div",{className:"App"},r.a.createElement(l.b,{history:i.a},E))},b=n(13),v=n(49),O=n(10),y=n(4),x=Object(b.c)({photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.d:case y.g:return Object(O.a)({},e,{},t.payload);default:return e}},collections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a:case y.f:return Object(O.a)({},e,{},t.payload);default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return"REQUEST_PAGINATION"===t.type?t.payload:e},pagingType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"search_photos",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.d:return"photos";case y.g:return"search_photos";case y.f:return"search_collections";case y.a:return"collections";case y.b:return"collection-photos";default:return e}},searchKeyword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.q:case y.p:return Object(O.a)({},t.payload);default:return e}},collectionPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.b:return Object(O.a)({},e,{},t.payload);default:return e}},collectionsId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.i:return t.payload;default:return e}},relatedCollections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.e:return Object(O.a)({},e,{},t.payload);default:return e}}}),w=n(6),_=n.n(w),C=n(8),T=n(47),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(e.hasOwnProperty("handlerEnabled")&&!e.handlerEnabled)},j=n.n(T).a.create({baseURL:"https://api.unsplash.com/",headers:{"Accept-Version":"v1",Authorization:"Client-ID f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017"},params:{client_id:"f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017"}});j.interceptors.request.use((function(e){return function(e){return m(e)&&document.body.classList.add("loading-indicator"),e}(e)})),j.interceptors.response.use((function(e){return function(e){return m(e.config)&&document.body.classList.remove("loading-indicator"),e}(e)}),(function(e){return function(e){return m(e.config)&&console.log("Request error"),Promise.reject(Object(O.a)({},e))}(e)}));var S=j,R={getPhotos:function(){var e,t=arguments;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,_.a.awrap(S.get("/photos?per_page=20&page=".concat(e),{handlerEnabled:!0}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},getSearchPhotos:function(){var e,t,n=arguments;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,_.a.awrap(S.get("/search/photos?per_page=20&page=".concat(e,"&query=").concat(t),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getCollections:function(){var e,t=arguments;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,_.a.awrap(S.get("/collections?per_page=20&page=".concat(e),{handlerEnabled:!0}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},getSearchCollections:function(){var e,t,n=arguments;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,_.a.awrap(S.get("/search/collections?per_page=20&page=".concat(e,"&query=").concat(t),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getCollectionPhotos:function(){var e,t,n=arguments;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,_.a.awrap(S.get("/collections/".concat(t,"/photos?per_page=20&page=").concat(e),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},getRelatedCollections:function(){var e,t,n=arguments;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1?n[1]:void 0,a.next=4,_.a.awrap(S.get("/collections/".concat(t,"/related?per_page=20&page=").concat(e),{handlerEnabled:!0}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))},downloadImages:function(e){return _.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.awrap(S.get("/photos/".concat(e,"/download"),{handlerEnabled:!0}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}},I=n(48),L=n.n(I),P=_.a.mark(V),k=_.a.mark(q),N=_.a.mark(z),A=_.a.mark(G),U=_.a.mark(B),H=_.a.mark(J),Q=_.a.mark(M),D=_.a.mark(W);function V(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.getPhotos,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)({type:y.d,payload:t.data,totalPages:t.headers["x-total"]});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),P,null,[[0,8]])}function q(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.getSearchPhotos,e.payload.page,e.payload.keyword);case 3:return t=n.sent,n.next=6,Object(C.b)({type:y.g,payload:t.data.results,totalPages:t.headers["x-total"]});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),k,null,[[0,8]])}function z(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.getCollections,e.payload);case 3:return t=n.sent,n.next=6,Object(C.b)({type:y.a,payload:t.data});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),N,null,[[0,8]])}function G(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.getSearchCollections,e.payload.page,e.payload.keyword);case 3:return t=n.sent,n.next=6,Object(C.b)({type:y.f,payload:t.data.results});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),A,null,[[0,8]])}function B(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),n.next=4,Object(C.a)(R.getCollectionPhotos,e.payload.page,e.payload.id);case 4:return t=n.sent,n.next=7,Object(C.b)({type:y.b,payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),U,null,[[0,9]])}function J(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.getRelatedCollections,e.payload.page,e.payload.id);case 3:return t=n.sent,n.next=6,Object(C.b)({type:y.e,payload:t.data});case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),H,null,[[0,8]])}function M(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.a)(R.downloadImages,e.payload);case 3:return t=n.sent,L.a.saveAs(t.data.url,"Unsplash-".concat(e.payload,".jpg")),n.next=7,Object(C.b)({type:y.c,payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),Q,null,[[0,9]])}function W(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)(y.n,V);case 2:return e.next=4,Object(C.c)(y.q,q);case 4:return e.next=6,Object(C.c)(y.h,z);case 6:return e.next=8,Object(C.c)(y.p,G);case 8:return e.next=10,Object(C.c)(y.j,B);case 10:return e.next=12,Object(C.c)(y.o,J);case 12:return e.next=14,Object(C.c)(y.k,M);case 14:case"end":return e.stop()}}),D)}var X=Object(v.a)(),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,Y=Object(b.e)(x,K(Object(b.a)(X)));X.run(W);var F=Y;n(84),u.a.BOTTOM_CENTER,u.b.SCALE;o.a.render(r.a.createElement(s.a,{store:F},r.a.createElement(g,null)),document.getElementById("root"))}},[[52,2,3]]]);
//# sourceMappingURL=main.e8e31fdc.chunk.js.map