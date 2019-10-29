import React, {Component} from 'react';

export default class Events extends Component {
    componentDidMount() {
        const {fetchEvents} = this.props;
        fetchEvents();
    }

    render() {
        const {events} = this.props;
        return (
            <div className="events-wrap">
                {
                    events.length === 0 && 'No Events to show..'
                }
                {
                    events.map((event) => {
                        return 'Events...'
                    })
                }
            </div>
        )
    }
}