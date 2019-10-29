import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import IsAuthorised from '../containers/IsAuthorised';
import Navigation from '../components/Navigation';

export default class EventsPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:events">
                <Navigation />
                <EventsContainer />
            </IsAuthorised>
        )
    }
}

