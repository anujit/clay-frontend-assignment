const events = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case 'FETCH_EVENTS_SUCCESS':
            return [
                ...state,
                ...payload
            ]
        default:
            return state;
    }
}
export default events;
