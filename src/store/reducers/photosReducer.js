import {
    RECEIVE_PHOTOS,RECEIVE_SEARCH_PHOTOS
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_PHOTOS:
            console.log("PHOTOOOOS");
            return { ...state, ...action.payload };
        case RECEIVE_SEARCH_PHOTOS :
            console.log("SEARCH PHOTOOOOS");
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

