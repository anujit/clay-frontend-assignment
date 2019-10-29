import axiosInstance from './BaseApi';

export default class EventsApi {
    constructor() {
        this.axiosInstance = axiosInstance
    }

    fetchEvents = () => {
        return (dispatch) => {
            const fetchEventsURI = `/events`;
            this.axiosInstance.get(fetchEventsURI)
            .then((res) => {
                const events = res.data;
                dispatch({
                    type: 'FETCH_EVENTS_SUCCESS',
                    payload: events
                })
            });
        }
    }    
}

const eventsApi = new EventsApi();
export {eventsApi};