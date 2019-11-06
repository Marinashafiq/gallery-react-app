import { call, put, takeLatest , take} from 'redux-saga/effects';
import {
    RECEIVE_PHOTOS, 
    REQUEST_PHOTOS,
    REQUEST_PAGINATION,
    RECEIVE_PAGINATION
} from '../actions/types';
import api from "../../network/apis";

// import history from '../../routes/history';

function* getPhotosList(action) {
    try {
        console.log(action)
        console.log("try request")
        const response = yield call(api.getPhotos , action.payload);
        console.log(response);
        console.log(response.headers['x-total'])
        yield put({ type: RECEIVE_PHOTOS, payload: response.data , totalPages : response.headers['x-total']});
    } catch (err) {
        console.log(err);
    }
}


// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(REQUEST_PHOTOS, getPhotosList);
}