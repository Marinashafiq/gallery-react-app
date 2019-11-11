import { 
    RECEIVE_PHOTOS , 
    REQUEST_PHOTOS  , 
    REQUEST_PAGINATION , 
    REQUEST_SEARCH_PHOTOS , 
    RECEIVE_SEARCH_PHOTOS , 
    REQUEST_PAGINATION_TYPE} 
    from './types';

export const requestPhotos = (page) => {
    console.log(page);
    return {
        type: REQUEST_PHOTOS,
        payload : page ,
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

export const requestSearchPhotos = (page , keyword) => {
    return {
        type: REQUEST_SEARCH_PHOTOS,
        payload : {
            page , 
            keyword , 
        }
    }
};


export const requestPagingType = (pageType) => {
    return {
        type: REQUEST_PAGINATION_TYPE,
        payload : pageType
    }
};



// export const receiveSearchPhotos = (data) => {
//     console.log(data)
//     return {
//         type: RECEIVE_SEARCH_PHOTOS,
//         payload: { data :  data.result , isKeyword : true  } ,   
//     }
// };


