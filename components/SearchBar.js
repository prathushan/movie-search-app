import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search movies..."
      className="input"
    />
    <button onClick={onSearch} className="search-button">
      Search
    </button>
  </div>
);

export default SearchBar;
