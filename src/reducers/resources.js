const user = (state = {users: [], doors: []}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'FETCH_PEOPLE_SUCCESS':
            console.log(action);
            return {
                ...state,
                users: payload
            };
        case 'FETCH_DOORS_SUCCESS':
            console.log(action);
            return {
                ...state,
                doors: payload
            };            
        default:
            return state;
    }
}
export default user;
