import React from 'react';
import PropTypes, { element } from 'prop-types';
import './SearchFilter.css';

const SearchFilter = ({ updateSearch }) => {

  const handleChange = (event) => {
    updateSearch(event.target.value);
  }

  return (
    <div className="SearchFilter" data-testid="SearchFilter">
      <label>Search: </label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

SearchFilter.propTypes = {};

SearchFilter.defaultProps = {};

export default SearchFilter;
