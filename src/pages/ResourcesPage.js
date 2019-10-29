import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';
import Navigation from '../components/Navigation';

export default class ManageResourcesPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:manage-resources">
                <Navigation />
                <Resources type="manage-resources" />
            </IsAuthorised>
        )
    }
}

