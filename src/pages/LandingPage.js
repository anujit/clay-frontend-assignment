import React from 'react';
import IsAuthenticated from '../containers/IsAuthenticated';

export default class LandingPage extends React.Component {
    render() {
        return (
            <IsAuthenticated>
                <div>Landing Page Authenticated!!!</div>
            </IsAuthenticated>
        );
    }
}
