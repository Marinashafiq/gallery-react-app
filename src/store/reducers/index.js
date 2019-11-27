import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import currentPageReducer   from './currentPageReducer';
import pagingTypeReducer   from './pagingTypeReducer';
import searchKeywordReducer   from './searchReducer';
import collectionPhotosReducer from './collectionsReducer';
import collectionsReducer from './collectionListReducer' ;
import collectionsIdReducer from './collectionIdReducer' ;


export default combineReducers({
    photos: photosReducer,
    collections : collectionsReducer,
    currentPage : currentPageReducer,
    pagingType : pagingTypeReducer , 
    searchKeyword : searchKeywordReducer,
    collectionPhotos : collectionPhotosReducer ,
    collectionsId :collectionsIdReducer ,
})