import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import currentPage   from './currentPage';
import pagingType   from './paginationType';
import searchKeyword   from './searchPhotosReducer';





export default combineReducers({
    photos: photosReducer,
    currentPage : currentPage,
    pagingType : pagingType , 
    searchKeyword : searchKeyword
})