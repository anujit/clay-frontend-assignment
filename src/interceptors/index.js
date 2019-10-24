const requestHandler = (request) => {
    // request.headers['X-Secret-Token'] = window.sessionStorage.secretToken;
    request.headers['X-Secret-Token'] = 'admin-secret-token';
    return request;
}

export {requestHandler};
