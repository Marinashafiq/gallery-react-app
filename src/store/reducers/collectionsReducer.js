import {
    RECEIVE_COLLECTION_PHOTOS
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case RECEIVE_COLLECTION_PHOTOS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

