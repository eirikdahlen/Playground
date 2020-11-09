import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Compendium from './Compendiums/Compendium';
import { ROUTES } from '../constants/routes';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

const App = () => (
  <Router>
    <div className={'appcontainer'}>
      <Switch>
        {/* <Route path={ROUTES.COMPENDIUMS} component={Compendium} /> */}
        <Route path={ROUTES.LANDING} component={Compendium} />
      </Switch>
    </div>
  </Router>
);

export default App;
