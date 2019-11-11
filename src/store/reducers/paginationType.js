import {
    RECEIVE_PHOTOS,RECEIVE_SEARCH_PHOTOS
} from '../actions/types';

export default (pagingType = 'photos', action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_PHOTOS:
            console.log("PHOTOOOOS");
            return  'photos';
        case RECEIVE_SEARCH_PHOTOS:
            console.log("SEARCH PHOTOOOOS");
            return 'search_photos';
        default:
            return pagingType;
    }
}
