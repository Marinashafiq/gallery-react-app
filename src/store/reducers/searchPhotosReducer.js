import _ from 'lodash';

import {
    RECEIVE_SEARCH_PHOTOS,
} from '../actions/types';

export default (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case RECEIVE_SEARCH_PHOTOS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}

