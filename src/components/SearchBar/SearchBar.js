import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onChangeFunction }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      onChange={(e) => onChangeFunction(e)}
    />
  );
};

export default SearchBar;
