import { Visitor } from "handlebars";

const people = (state = {role: 'visitor'}, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                ...payload
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                role: 'visitor',
                isLoggedIn: false,
                userId: ''
            }
        default:
            return state;
    }
}
export default people;
