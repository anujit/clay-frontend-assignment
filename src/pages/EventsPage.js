import React from 'react';

export default class EventsPage extends React.Component {

    constructor(props) {
        super(props);
        this.events = [{
            id: '1',
            type: 'success',
            time: '23 April 2019',
            door: 'Door 1',
            message: 'Successfully Opened'
        },{
            id: '2',
            type: 'success',
            time: '13 June 2019',
            door: 'Door 1',
            message: 'Successfully Opened'
        },{
            id: '3',
            type: 'failure',
            time: '22 September 2020',
            door: 'Door 2',
            message: 'Failed to open'
        }];

        this.audit = [{
            user: 'Anujit',
            events: []
        },{
            user: 'Nene',
            events: []
        }]
    }

    renderEvents = (events) => {
        if(events.events) {
            this.renderEvents(events.events);
        }
        return events.map((event) => {
            return (
                <div className="event-box" key={event.id}>
                    <div className={event.type} />
                    <p>{event.message} - {event.door}</p>
                    <p>{event.time}</p>
                </div>
            );            
        });
    }

    render() {
        return (
            <div className="events-wrap">
                <h1>View Events</h1>
                <div className="events-list">
                    {
                        this.renderEvents(this.events)
                    }
                </div>
            </div>
        );
    }
}

