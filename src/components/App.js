import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LandingPage, PeoplePage, DoorsPage, AccessDoorsPage} from '../pages';

const App = () => {
    return (
        <div className="main-wrap">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/manage-people" component={PeoplePage} />
                <Route path="/manage-doors" component={DoorsPage} />
                <Route path="/access-doors" component={AccessDoorsPage} />
            </Switch>
        </div>
    );
}

export default App;
