import { 
    RECEIVE_PHOTOS , 
    REQUEST_PHOTOS  , 
    REQUEST_PAGINATION , 
    REQUEST_SEARCH_PHOTOS , 
    RECEIVE_SEARCH_PHOTOS} 
    from './types';

export const requestPhotos = (page) => {
    console.log(page);
    return {
        type: REQUEST_PHOTOS,
        payload : page
    }
};

export const receivePhotos = (data) => {
    return {
        type: RECEIVE_PHOTOS, 
        payload: data       
    }
};

export const requestPagination = (page) => {
    return {
        type: REQUEST_PAGINATION,
        payload : page
    }
};

export const requestSearchPhotos = (keyword) => {
    return {
        type: REQUEST_SEARCH_PHOTOS,
        payload : keyword
    }
};


export const receiveSearchPhotos = (keyword) => {
    return {
        type: RECEIVE_SEARCH_PHOTOS,
        payload : keyword
    }
};


