import { RECEIVE_PHOTOS , REQUEST_PHOTOS } from './types';

export const requestPhotos = () => {
    return {
        type: REQUEST_PHOTOS
    }
};

export const receivePhotos = (data) => {
    return {
        type: RECEIVE_PHOTOS, 
        payload: data
    }
};