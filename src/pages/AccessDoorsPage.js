import React from 'react';
import Resources from '../containers/ResourcesContainer';
import IsAuthenticated from '../containers/IsAuthenticated';

export default class AccessDoorsPage extends React.Component {
    render() {
        return (
            <IsAuthenticated action="visit:access-doors">
                <Resources type="open-doors" />
            </IsAuthenticated>
        )
    }
}

