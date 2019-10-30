import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {eventsApi} from '../api/EventsApi';
import Events from '../components/Events';

const {fetchEvents} = eventsApi;

export const mapStateToProps = (state) => {
    const {events, userInfo} = state;
    const {userId} = userInfo;
    return {
        events,
        userId
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEvents
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);