import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';
import { useHistory } from 'react-router-dom';
import CompendiumList from './CompendiumList';

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
    <div>
      <h1>Compendiums</h1>
      {compendiums &&
        compendiums.map((compendium) => (
          <CompendiumList
            name={compendium.name}
            courseCode={compendium.courseCode}
          />
        ))}
      <button onClick={() => history.push('/')}>Tilback</button>
    </div>
  );
};

export default Compendium;
