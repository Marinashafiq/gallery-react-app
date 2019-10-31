import { call, put, takeLatest } from 'redux-saga/effects';
import {
    RECEIVE_PHOTOS, REQUEST_PHOTOS
} from '../actions/types';
import api from "../../network/apis";

// import history from '../../routes/history';

function* getPhotos() {
    try {
        const response = yield call(api.getPhotos);
        console.log(response);
        yield put({ type: RECEIVE_PHOTOS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}


// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(REQUEST_PHOTOS, getPhotos);
}