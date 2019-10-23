import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LandingPage, ManageAccessPage, AccessDoorsPage, EventsPage, ResourcesPage} from '../pages';
import '../styles/App.scss';

const App = () => {
    return (
        <div className="main-wrap">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/manage-resources" component={ResourcesPage} />
                <Route path="/manage-access" component={ManageAccessPage} />
                <Route path="/access-doors" component={AccessDoorsPage} />
                <Route path="/events" component={EventsPage} />
            </Switch>
        </div>
    );
}

export default App;
