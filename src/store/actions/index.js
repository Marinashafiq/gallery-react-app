import { 
    RECEIVE_PHOTOS , 
    REQUEST_PHOTOS  , 
    REQUEST_PAGINATION , 
    RECEIVE_PAGINATION } 
    from './types';

export const requestPhotos = () => {
    return {
        type: REQUEST_PHOTOS,
    }
};

export const receivePhotos = (data) => {
    return {
        type: RECEIVE_PHOTOS, 
        payload: data       
    }
};

export const requestPagination = () => {
    return {
        type: REQUEST_PAGINATION,
    }
};

export const receivePagination = (page) => {
    console.log("action receive" ,page);
    return {
        type: RECEIVE_PAGINATION, 
        payload: page
    }
};