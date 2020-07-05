import React from 'react';
import firebase from '../Firebase/firebase';
import './CompendiumList.css';

const CompendiumList = ({ name, courseCode, color }) => {
  const getURL = async (courseCode) => {
    firebase.storage
      .ref(`/compendiums/${courseCode}.pdf`)
      .getDownloadURL()
      .then((url) => {
        window.open(url, '_blank');
      });
  };

  const openCoursePageURL = () => {
    window.open(`https://www.ntnu.no/studier/emner/${courseCode}`, '_blank');
  };

  return (
    <div className={'list-element'} style={{ backgroundColor: `${color}` }}>
      <div className={'list-info'}>
        <div className={'list-name'}>{name}</div>
        <div className={'list-code'}>{courseCode}</div>
        <div className={'link-text'} onClick={() => openCoursePageURL()}>
          Visit course homepage
        </div>
      </div>
      <div
        className={'download-button'}
        onClick={async () => getURL(courseCode)}
      >
        Download
      </div>
    </div>
  );
};

export default CompendiumList;
