import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Compendium from './Compendiums/Compendium';
import Navigation from './Navigation/Navigation';
import * as ROUTES from '../constants/routes';
import LandingPage from './LandingPage/LandingPage';

const App = () => (
  <Router>
    <Navigation />
    <div>
      <Switch>
        <Route path={ROUTES.COMPENDIUMS} component={Compendium} />
        <Route path={ROUTES.LANDING} component={LandingPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
