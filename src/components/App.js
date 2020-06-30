import React from 'react';
import Compendium from './Compendiums/Compendium';
import './App.css';

const App = () => (
  <div className='appcontainer'>
    <div>
      I've access to Firebase and render something.
      <Compendium />
    </div>
  </div>
);

export default App;
