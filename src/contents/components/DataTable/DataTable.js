/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from '../../redux/store';
import { setIncomingData } from '../../redux/reducer';
import { compute } from '../../redux/reducer';
import { useDispatch } from "react-redux";

import './DataTable.css';
import Table from '../Table/Table';
import EntriesFilter from '../EntriesFilter/EntriesFilter';
import SearchFilter from '../SearchFilter/SearchFilter';
import Pagination from '../Pagination/Pagination';

const DatatableWrapper = ({ inputData }) => {
  return (
    <Provider store={store}>
      <DataTable inputData={inputData} />
    </Provider>
  );
}

/**
 * This component allows you to create a datatable
 * It takes one props : "inputData"
 */
const DataTable = ({ inputData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIncomingData(inputData));
    dispatch(compute());
  }, [inputData]);

  return (
    <div className="DataTable" data-testid="DataTable">
      <div className='Filter'>
        <EntriesFilter />
        <SearchFilter />
      </div>
      <Table />
      <Pagination />
    </div>
  );
}

export default DatatableWrapper;
