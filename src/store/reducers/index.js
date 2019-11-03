import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import currentPage   from './currentPage';



export default combineReducers({
    photos: photosReducer,
    currentPage : currentPage
})