import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.COMPENDIUMS}>COMPENDIUMS</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
