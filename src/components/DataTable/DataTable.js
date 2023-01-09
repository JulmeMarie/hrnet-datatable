import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';
import Table from '../Table/Table';
import EntriesFilter from '../EntriesFilter/EntriesFilter';
import SearchFilter from '../SearchFilter/SearchFilter';
import Pagination from '../Pagination/Pagination';

const DataTable = ({ inputData }) => {

  const [entriesValue, setEntriesValue] = useState(10);
  const [searchValue, setSearchValue] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pages, setPages] = useState(1);
  const [displayData, setDisplayData] = useState(null);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    if (inputData) {
      let filteredData = computeFilteredData();
      let dataToDisplay = filteredData.data.filter((element, index) => {
        let startElement = displayData ? pageIndex * entriesValue : 0;
        let endElement = startElement + entriesValue;

        if (index >= startElement && index < endElement) {
          return element;
        }
      });
      computePages(filteredData.data.length);
      setDisplayData({ rows: dataToDisplay, columns: inputData.columns });
    }
  }, [inputData, entriesValue, searchValue, pageIndex]);

  const computeFilteredData = () => {
    if (!searchValue || searchValue.length <= 0) {
      return inputData;
    }
    let filteredData = inputData.data.filter((element) => {
      let filteredList = inputData.columns.filter((column) => {
        return (element[column.data] && element[column.data].toLowerCase().includes(searchValue.toLowerCase()));
      });
      return filteredList.length > 0;
    });
    return { data: filteredData, columns: inputData.columns };
  }

  const computePages = (dataLength) => {
    let division = dataLength / entriesValue;
    setDataLength(dataLength);
    setPages(Math.ceil(division));
  }

  const updateEntriesValue = (entry) => {
    setEntriesValue(entry);
    setPageIndex(0);
  }

  return (
    <div className="DataTable" data-testid="DataTable">
      <div className='Filter'>
        <EntriesFilter updateEntries={updateEntriesValue} />
        <SearchFilter updateSearch={setSearchValue} />
      </div>
      <Table data={displayData} />
      <Pagination
        nbPages={pages}
        showingEntries={displayData ? displayData.rows.length : 0}
        totalEntries={inputData ? inputData.data.length : 0}
        searchValue={searchValue}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        dataLength={dataLength}
      />
    </div>
  );
}

DataTable.propTypes = {};

DataTable.defaultProps = {};

export default DataTable;
