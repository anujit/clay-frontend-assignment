import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthenticated from '../containers/IsAuthenticated';

export default class ManageAccessPage extends React.Component {
    render() {
        return (
            <IsAuthenticated action="visit:manage-access">
                <Resources type="manage-access" />
            </IsAuthenticated>
        )
    }
}

