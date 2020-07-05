import React from 'react';
import PlayBox from '../PlayBox/PlayBox';
import { ROUTENAMES, ROUTES } from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const history = useHistory();
  const boxNames = Object.keys(ROUTENAMES);
  const colors = [
    'var(--pg-green)',
    'var(--pg-blue)',
    'var(--pg-pink)',
    'var(--pg-yellow)',
  ];

  const getRouteURLs = () => {
    const routeList = Object.values(ROUTES);
    routeList.shift();
    return routeList;
  };

  const getColor = (index) => {
    let colorPick;
    const length = colors.length;
    if (index < 4) {
      colorPick = index % length;
    } else {
      colorPick = (index - length / 2) % length;
    }
    return colors[colorPick];
  };

  const routes = getRouteURLs();
  console.log(routes[0]);

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
              <PlayBox name={ROUTENAMES[box]} color={getColor(index)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
