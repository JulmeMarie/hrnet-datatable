import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEntries } from '../../redux/reducer';
import { display } from '../../redux/reducer';
import PropTypes from 'prop-types';
import './EntriesFilter.css';

//An array of entries by default
const entriesArr = [10, 25, 50, 100];

/**
 * This component allows to display a select option field for entries
 * @param {*} param0 
 * @returns 
 */
const EntriesFilter = () => {
  const entries = useSelector(state => state.datatable.entries.selected);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setEntries(Number(event.target.value)));
    dispatch(display());
  }

  return (
    <div className="EntriesFilter" data-testid="EntriesFilter">
      <div>Show</div>
      <select onChange={handleChange}>
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

EntriesFilter.propTypes = {};

EntriesFilter.defaultProps = {};

export default EntriesFilter;
