import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Portofolio from './Portofolio';
import Contact from './Contact';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/portofolio" component={Portofolio} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;