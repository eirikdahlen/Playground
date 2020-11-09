import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';
import { useHistory } from 'react-router-dom';
import CompendiumList from './CompendiumList';
import { colors } from '../../constants/colors';
import { getColor } from '../../utils/functions';
import './Compendium.css';
import SearchBar from '../SearchBar/SearchBar';
import { orderBy } from 'lodash';

const Compendium = () => {
  const [compendiums, setCompendiums] = useState([]);
  const [searchText, setSearchText] = useState('');

  const history = useHistory();

  const filterOnChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

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

  const getFilteredCompendiums = (searchText, compendiums) => {
    let filteredCompendiums = orderBy(compendiums, ['name', 'courseCode']);
    if (searchText) {
      filteredCompendiums = compendiums.filter(
        (compendium) =>
          compendium.name.toLowerCase().includes(searchText) ||
          compendium.courseCode.toLowerCase().includes(searchText)
      );
    }
    return filteredCompendiums;
  };

  const filteredCompendiums = getFilteredCompendiums(searchText, compendiums);

  return (
    <div className={'compendium-container'}>
      <h1>COMPENDIUMS</h1>
      <SearchBar onChangeFunction={filterOnChange} />
      <div className={'list-container'}>
        {filteredCompendiums &&
          filteredCompendiums.map((compendium, index) => (
            <CompendiumList
              name={compendium.name}
              courseCode={compendium.courseCode}
              color={getColor(index, colors)}
            />
          ))}
      </div>
      {/* <button onClick={() => history.push('/')}>Tilback</button> */}
    </div>
  );
};

export default Compendium;
