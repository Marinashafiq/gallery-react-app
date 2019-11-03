import { RECEIVE_PHOTOS , REQUEST_PHOTOS } from './types';

export const requestPhotos = (page) => {
    console.log("action request" , page);
    return {
        type: REQUEST_PHOTOS,
        payload : {
            page
        }
    }
};

export const receivePhotos = (data , page) => {
    console.log(data);
    console.log("action receive" ,page);
    return {
        type: RECEIVE_PHOTOS, 
        payload: {
            data ,
            page
        },
        
    }
};