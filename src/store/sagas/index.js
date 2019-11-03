import { call, put, takeLatest , take} from 'redux-saga/effects';
import {
    RECEIVE_PHOTOS, REQUEST_PHOTOS
} from '../actions/types';
import api from "../../network/apis";

// import history from '../../routes/history';

function* getPhotosList(action) {
    try {
        console.log(action);
        const  page = action.payload.page;
        console.log(page);
        console.log("try request")
        const response = yield call(api.getPhotos , page);
        console.log(response);
        yield put({ type: RECEIVE_PHOTOS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}


// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(REQUEST_PHOTOS, getPhotosList);
}