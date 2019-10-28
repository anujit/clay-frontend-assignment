import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';

export default class ManageResourcesPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:manage-resources">
                <Resources type="manage-resources" />
            </IsAuthorised>
        )
    }
}

