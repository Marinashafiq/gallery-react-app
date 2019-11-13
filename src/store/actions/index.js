import { 
    RECEIVE_PHOTOS , 
    REQUEST_PHOTOS  , 
    REQUEST_SEARCH_PHOTOS , 
    REQUEST_PAGINATION , 
    REQUEST_PAGINATION_TYPE , 
    RECEIVE_COLLECTIONS ,
    REQUEST_COLLECTIONS , 
    REQUEST_SEARCH_COLLECTIONS,
    RECEIVE_COLLECTION_PHOTOS ,
    REQUEST_COLLECTION_PHOTOS,
    REQUEST_COLLECTION_ID
} 
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


export const requestSearchPhotos = (page , keyword) => {
    return {
        type: REQUEST_SEARCH_PHOTOS,
        payload : {
            page , 
            keyword , 
        }
    }
};



export const requestCollection = (page) => {
    console.log(page);
    return {
        type: REQUEST_COLLECTIONS,
        payload : page ,
    }
};

export const receiveCollections = (data) => {
    return {
        type: RECEIVE_COLLECTIONS, 
        payload: data       
    }
};

export const requestSearchCollections = (page , keyword) => {
    return {
        type: REQUEST_SEARCH_COLLECTIONS,
        payload : {
            page , 
            keyword 
        }
    }
};

export const requestCollectionPhotos = (page , id) => {
    console.log(id);
    return {
        type: REQUEST_COLLECTION_PHOTOS,
        payload :{
            page , 
            id 
        }
    }
};

export const receiveCollectionsPhotos = (data) => {
    return {
        type: RECEIVE_COLLECTION_PHOTOS, 
        payload: data       
    }
};

// GENERAL ACTIONS

export const requestPagination = (page) => {
    return {
        type: REQUEST_PAGINATION,
        payload : page
    }
};


export const requestPagingType = (pageType) => {
    return {
        type: REQUEST_PAGINATION_TYPE,
        payload : pageType
    }
};

export const requestCollectionId = (id) => {
    return {
        type: REQUEST_COLLECTION_ID,
        payload : id
    }
};

