import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthorised from '../containers/IsAuthorised';

export default class AccessDoorsPage extends React.Component {
    render() {
        return (
            <IsAuthorised action="visit:access-doors">
                <Resources type="open-doors" />
            </IsAuthorised>
        )
    }
}

