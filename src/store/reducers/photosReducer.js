import _ from 'lodash';

import {
    RECEIVE_PHOTOS,
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
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

