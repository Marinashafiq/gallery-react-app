import {
    RECEIVE_COLLECTIONS, 
    RECEIVE_SEARCH_COLLECTIONS
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_COLLECTIONS:
            console.log("COLLECTIONS");
            return { ...state, ...action.payload };
        case RECEIVE_SEARCH_COLLECTIONS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

