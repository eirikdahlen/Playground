import React from 'react';
import PlayBox from '../PlayBox/PlayBox';
import { ROUTENAMES, ROUTES } from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import { colors } from '../../constants/colors';
import { getColor } from '../../utils/functions';
import './LandingPage.css';

const LandingPage = () => {
  const history = useHistory();
  const boxNames = Object.keys(ROUTENAMES);

  const getRouteURLs = () => {
    const routeList = Object.values(ROUTES);
    routeList.shift();
    return routeList;
  };

  const routes = getRouteURLs();

  return (
    <div className={'landing-container'}>
      <h2>
        Welcome to <b>Playground!</b>
      </h2>
      <div className={'boxes-container'}>
        {boxNames &&
          boxNames.map((box, index) => (
            <div
              className={'playbox-wrapper'}
              onClick={() => history.push(`${routes[index]}`)}
              key={index}
            >
              <PlayBox
                name={ROUTENAMES[box]}
                color={getColor(index, colors, true)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
