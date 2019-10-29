import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {eventsApi} from '../api/EventsApi';
import Events from '../components/Events';

const {fetchEvents} = eventsApi;

export const mapStateToProps = (state) => {
    const {events} = state;
    return {
        events
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEvents
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);