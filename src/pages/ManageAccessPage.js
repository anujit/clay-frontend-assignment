import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';
import Navigation from '../components/Navigation';

export default class ManageAccessPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:manage-access">
                <Navigation />
                <Resources type="manage-access" />
            </IsAuthorised>
        )
    }
}

