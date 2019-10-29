import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';
import Navigation from '../components/Navigation';

export default class AccessDoorsPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:access-doors">
                <Navigation />
                <Resources type="open-doors" />
            </IsAuthorised>
        )
    }
}

