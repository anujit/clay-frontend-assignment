const requestHandler = (request) => {
    request.headers['X-Secret-Token'] = window.sessionStorage.secretToken;
    return request;
}

const logRequest = (request) => {
    console.log('Starting Request...', request)
    return request
}

export {requestHandler, logRequest};
