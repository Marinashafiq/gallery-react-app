import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import currentPage   from './currentPage';
import pagingType   from './paginationType';
import searchKeyword   from './searchPhotosReducer';
import collectionPhotos from './collectionsReducer';
import collections from './collectionListReducer' ;
import collectionsId from './collectionIdReducer' ;




export default combineReducers({
    photos: photosReducer,
    collections : collections,
    currentPage : currentPage,
    pagingType : pagingType , 
    searchKeyword : searchKeyword,
    collectionPhotos : collectionPhotos ,
    collectionsId :collectionsId
})