import {
    REQUEST_COLLECTION_ID
} from '../actions/types';

export default function collectionIdReducer (state = {}, action) {
    switch (action.type) {
        case REQUEST_COLLECTION_ID:
            return action.payload;
        default:
            return state;
    }
}

