import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';

const Compendium = () => {
  const [compendiums, setCompendiums] = useState([]);

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

  const getURL = async (filename) => {
    firebase.storage
      .ref(`/compendiums/${filename}`)
      .getDownloadURL()
      .then((url) => {
        window.open(url, '_blank');
      });
  };

  return (
    <div>
      <h1>Compendiums</h1>
      {compendiums.map((compendium) => (
        <div key={compendium.courseCode}>
          {compendium.name}
          {compendium.courseCode}
          <div onClick={async () => getURL(compendium.filename)}>Last ned</div>
        </div>
      ))}
    </div>
  );
};

export default Compendium;
