
import {
    RECEIVE_PHOTOS,
} from '../actions/types';

export default  (currentPage = 1, action) => {
    console.log(action)
  return action.type == 'REQUEST_PHOTOS' ? action.payload.page : currentPage
}