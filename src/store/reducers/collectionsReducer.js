import {
    RECEIVE_COLLECTION_PHOTOS
} from '../actions/types';

export default function collectionsReducer (state = {}, action) {
    switch (action.type) {
        case RECEIVE_COLLECTION_PHOTOS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

