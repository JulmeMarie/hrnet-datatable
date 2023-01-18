import React from 'react';
import { useDispatch } from "react-redux";
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
      <label for="search">Search: </label>
      <input type="text" onChange={handleChange} id="search" />
    </div>
  );
}

export default SearchFilter;
