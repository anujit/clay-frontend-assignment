import React, {Component} from 'react';
import '../styles/Box.scss';
export default class Events extends Component {
    componentDidMount() {
        const {fetchEvents} = this.props;
        fetchEvents();
    }

    render() {
        const {events} = this.props;
        return (
            <div className="events-wrap row">
                {
                    events.map((event) => {
                        const {eventType, door} = event;
                        return (
                            <div className="event-box col-md-12 col-lg-12" key={event.id}>
                                <div className="event-inner-wrap">
                                    <h4>{eventType}</h4>
                                    <p>
                                        {door}
                                    </p>                                    
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}