import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';
import { useHistory } from 'react-router-dom';
import CompendiumList from './CompendiumList';
import { colors } from '../../constants/colors';
import { getColor } from '../../utils/functions';
import './Compendium.css';

const Compendium = () => {
  const [compendiums, setCompendiums] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getCompendiums();
  }, []);

  const getCompendiums = () => {
    firebase.db
      .collection('compendiums')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setCompendiums((previous) => [...previous, doc.data()]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={'compendium-container'}>
      <h1>Compendiums</h1>
      <div className={'list-container'}>
        {compendiums &&
          compendiums.map((compendium, index) => (
            <CompendiumList
              name={compendium.name}
              courseCode={compendium.courseCode}
              color={getColor(index, colors)}
            />
          ))}
      </div>
      <button onClick={() => history.push('/')}>Tilback</button>
    </div>
  );
};

export default Compendium;
