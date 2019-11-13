import {
    RECEIVE_PHOTOS,
    RECEIVE_SEARCH_PHOTOS , 
    REQUEST_SEARCH_COLLECTIONS , 
    REQUEST_COLLECTIONS ,
    REQUEST_COLLECTION_PHOTOS
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
        case REQUEST_SEARCH_COLLECTIONS : 
            console.log("SEARCH Collections");
            return 'search_collections';
        case REQUEST_COLLECTIONS : 
            console.log("Collections");
            return 'collections';
        case REQUEST_COLLECTION_PHOTOS : 
            console.log("Collections photos");
            return 'collection-photos';
        default:
            return pagingType;
    }
}
