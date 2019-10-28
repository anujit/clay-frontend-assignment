import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';

export default class ManageAccessPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:manage-access">
                <Resources type="manage-access" />
            </IsAuthorised>
        )
    }
}

