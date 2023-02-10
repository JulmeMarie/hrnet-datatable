import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearch, compute } from '../../redux/reducer';

import './SearchFilter.css';

/**
 * This component allows to display a search input field
 * @param {*} param0 
 * @returns 
 */
const SearchFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.datatable.search);

  /**
   * Allows to handle search on value change
   * @param {*} event 
   */
  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
    dispatch(compute());
  }

  return (
    <div className="SearchFilter" data-testid="SearchFilter">
      <label htmlFor="search">Search: </label>
      <input type="text" onChange={handleChange} id="search" value={value} />
    </div>
  );
}

export default SearchFilter;
