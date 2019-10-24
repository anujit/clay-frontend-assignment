const people = (state = {role: 'admin'}, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}
export default people;
