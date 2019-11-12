import {
    RECEIVE_PHOTOS, RECEIVE_SEARCH_PHOTOS, RECEIVE_COLLECTIONS, RECEIVE_SEARCH_COLLECTIONS
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_PHOTOS:
            console.log("PHOTOOOOS");
            return { ...state, ...action.payload };
        case RECEIVE_SEARCH_PHOTOS:
            console.log("SEARCH PHOTOOOOS");
            return { ...state, ...action.payload };
        case RECEIVE_COLLECTIONS:
            console.log("COLLECTIONS");
            return { ...state, ...action.payload };
        case RECEIVE_SEARCH_COLLECTIONS:
            return { ...state, ...action.payload };
        // case NEW_STREAM:
        //     return { ...state, [action.payload.id]: action.payload };
        // case RECEIVE_STREAM:
        //     return { ...state, [action.payload.id]: action.payload };
        // case UPDATE_STREAM:
        //     return { ...state, [action.payload.id]: action.payload };
        // case REQUEST_DELETE_STREAM:
        //     return _.omit(state, action.payload);
        default:
            return state;
    }
}

