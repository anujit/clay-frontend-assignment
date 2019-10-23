const people = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case 'ADD_PEOPLE':
            return [
                ...state,
                ...payload
            ]
        default:
            return state;
    }
}
export default people;
