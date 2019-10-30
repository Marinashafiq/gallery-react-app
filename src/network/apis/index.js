import galleryURL from './base';


let handlerEnabled = true;

const getPhotos = async () => await galleryURL.get('/photos', { handlerEnabled });

export default { getPhotos };