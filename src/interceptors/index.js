const requestHandler = (request) => {
    request.headers['X-Secret-Token'] = window.sessionStorage.secretToken;
    return request;
}

export {requestHandler};
