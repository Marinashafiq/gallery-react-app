const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        console.log("REQUEEST IS ON");
    }
    return request
}

export const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        console.log("Error request");
    }
    return Promise.reject({ ...error })
}

export const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        console.log("request is end");

    }
    return response
}
