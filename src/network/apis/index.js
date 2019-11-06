import galleryURL from './base';


let handlerEnabled = true;

const getPhotos = async (page_number = 1) => await galleryURL.get(`/photos?per_page=20&page=${page_number}`, { handlerEnabled });


export default { getPhotos };