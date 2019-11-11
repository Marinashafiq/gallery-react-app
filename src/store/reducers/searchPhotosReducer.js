import {
    REQUEST_SEARCH_PHOTOS,
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case REQUEST_SEARCH_PHOTOS:
            return { ...action.payload };
        default:
            return state;
    }
}

