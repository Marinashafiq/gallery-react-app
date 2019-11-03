import galleryURL from './base';


let handlerEnabled = true;

const getPhotos = async (page_number) => await galleryURL.get(`/photos?per_page=20&page=${page_number}`, { handlerEnabled });


export default { getPhotos };