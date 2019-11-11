import {
    REQUEST_SEARCH_PHOTOS,
    REQUEST_SEARCH_COLLECTIONS
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case REQUEST_SEARCH_PHOTOS || REQUEST_SEARCH_COLLECTIONS :
            return { ...action.payload };
        default:
            return state;
    }
}

