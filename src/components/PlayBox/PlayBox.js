import React from 'react';
import './PlayBox.css';

const PlayBox = ({ name, color }) => {
  return (
    <div
      className={'playbox-container'}
      style={{ backgroundColor: `${color}` }}
    >
      {name}
    </div>
  );
};

export default PlayBox;
