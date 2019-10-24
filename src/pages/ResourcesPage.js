import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthenticated from '../containers/IsAuthenticated';

export default class ManageResourcesPage extends React.Component {
    render() {
        return (
            <IsAuthenticated action="visit:manage-resources">
                <Resources type="manage-resources" />
            </IsAuthenticated>
        )
    }
}

