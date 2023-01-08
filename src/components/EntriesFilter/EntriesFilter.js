import React from 'react';
import PropTypes from 'prop-types';
import './EntriesFilter.css';

const entriesArr = [10, 25, 50, 100];
const EntriesFilter = ({ updateEntries }) => {

  const handleChange = (event) => {
    updateEntries(Number(event.target.value));
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
