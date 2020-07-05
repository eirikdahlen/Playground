import React from 'react';
import firebase from '../Firebase/firebase';

const CompendiumList = ({ name, courseCode }) => {
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
      {name}
      {courseCode}
      <div onClick={async () => getURL(courseCode)}>Last ned</div>
    </div>
  );
};

export default CompendiumList;
