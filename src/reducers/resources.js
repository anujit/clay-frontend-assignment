const user = (state = {users: [], doors: []}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'FETCH_PEOPLE_SUCCESS':
            return {
                ...state,
                users: payload
            };
        case 'FETCH_DOORS_SUCCESS':
            return {
                ...state,
                doors: payload
            };
        case 'ADD_NEW_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, payload]
            }
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                users: state.users.filter(user => user !== payload)
            }
        case 'DELETE_DOOR_SUCCESS':
            return {
                ...state,
                doors: state.doors.filter(door => door !== payload)
            }            
        case 'OPEN_DOORS_SUCCESS':
        case 'MODIFY_PERMISSION_SUCCESS':
        default:
            return state;
    }
}
export default user;
