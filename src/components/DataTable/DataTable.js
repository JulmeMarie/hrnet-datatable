/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { setIncomingData } from '../../redux/reducer';
import { display } from '../../redux/reducer';
import { useDispatch } from "react-redux";

import './DataTable.css';
import Table from '../Table/Table';
import EntriesFilter from '../EntriesFilter/EntriesFilter';
import SearchFilter from '../SearchFilter/SearchFilter';
import Pagination from '../Pagination/Pagination';
/**
 * This component allows you to create a datatable
 * It takes one props : "inputData"
 */
const DataTable = ({ inputData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIncomingData(inputData));
    dispatch(display());
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

export default DataTable;
