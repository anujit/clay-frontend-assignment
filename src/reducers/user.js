const user = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_USER':
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}
export default user;
