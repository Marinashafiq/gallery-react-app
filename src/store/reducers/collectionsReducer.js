import {
    RECEIVE_COLLECTION_PHOTOS ,
    REQUEST_COLLECTION_ID
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_COLLECTION_PHOTOS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

