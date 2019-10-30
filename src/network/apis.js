import axios from 'axios';

const galleryURL = axios.create({
    baseURL: `http://localhost:3001`
});


galleryURL.interceptors.request.use(request => requestHandler(request));

galleryURL.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

export default galleryURL;