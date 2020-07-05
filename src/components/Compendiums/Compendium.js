import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';
import { useHistory } from 'react-router-dom';

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

  const getURL = async (courseCode) => {
    firebase.storage
      .ref(`/compendiums/${courseCode}.pdf`)
      .getDownloadURL()
      .then((url) => {
        window.open(url, '_blank');
      });
  };

  return (
    <div>
      <h1>Compendiums</h1>
      {compendiums && compendiums.map((compendium) => (
        <div key={compendium.courseCode}>
          {compendium.name}
          {compendium.courseCode}
          <div onClick={async () => getURL(compendium.courseCode)}>
            Last ned
          </div>
        </div>
      ))}
      <button onClick={() => history.push('/')}>Hei</button>
    </div>
  );
};

export default Compendium;
