import {
    RECEIVE_PHOTOS,
    RECEIVE_SEARCH_PHOTOS , 
    REQUEST_SEARCH_COLLECTIONS , 
    REQUEST_COLLECTIONS ,
    REQUEST_COLLECTION_PHOTOS
} from '../actions/types';

export default (pagingType = 'photos', action) => {
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return  'photos';
        case RECEIVE_SEARCH_PHOTOS:
            return 'search_photos';
        case REQUEST_SEARCH_COLLECTIONS : 
            return 'search_collections';
        case REQUEST_COLLECTIONS : 
            return 'collections';
        case REQUEST_COLLECTION_PHOTOS : 
            return 'collection-photos';
        default:
            return pagingType;
    }
}
