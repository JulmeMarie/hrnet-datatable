import React from 'react';
import { useDispatch } from "react-redux";
import { setEntries } from '../../redux/reducer';
import { display } from '../../redux/reducer';
import './EntriesFilter.css';

//An array of entries by default
const entriesArr = [10, 25, 50, 100];

/**
 * This component allows to display a select option field for entries
 * @param {*} param0 
 * @returns 
 */
const EntriesFilter = () => {
  const dispatch = useDispatch();

  /**
   * Allow to handle change entry
   * @param {*} event 
   */
  const handleChange = (event) => {
    dispatch(setEntries(Number(event.target.value)));
    dispatch(display());
  }

  return (
    <div className="EntriesFilter" data-testid="EntriesFilter">
      <label htmlFor="entries">Show</label>
      <select onChange={handleChange} id="entries">
        {
          entriesArr.map((optValue, index) => {
            return <option key={index} value={optValue}>{optValue}</option>
          })
        }
      </select>
      <div>entries</div>
    </div>
  );
}

export default EntriesFilter;
