import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Compendium from './Compendiums/Compendium';
import Navigation from './Navigation/Navigation';
import * as ROUTES from '../constants/routes';

const App = () => (
  <Router>
    <Navigation />
    <div>
      <div>
        <Link to={ROUTES.COMPENDIUMS}>COMPENDIUMS</Link>
      </div>
      <Switch>
        <Route path={ROUTES.COMPENDIUMS} component={Compendium} />
      </Switch>
    </div>
  </Router>
);

export default App;
