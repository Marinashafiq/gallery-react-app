import galleryURL from './base';


let handlerEnabled = true;

const getPhotos = async (page_number = 1) => await galleryURL.get(`/photos?per_page=20&page=${page_number}`, { handlerEnabled });
const getSearchPhotos = async (page_number = 1 , keyword) => await galleryURL.get(`/search/photos?per_page=20&page=${page_number}&query=${keyword}`, { handlerEnabled });



export default { getPhotos , getSearchPhotos};