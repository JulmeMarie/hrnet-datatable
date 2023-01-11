import React from 'react';
import PropTypes, { element } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setSearch, display } from '../../redux/reducer';

import './SearchFilter.css';

/**
 * This component allows to display a search input field
 * @param {*} param0 
 * @returns 
 */
const SearchFilter = () => {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
    dispatch(display());
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
