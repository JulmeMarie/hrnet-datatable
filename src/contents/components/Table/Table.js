/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSort, display } from '../../redux/reducer';
import './Table.css';

/**
 * This component allows to display the data in an html table
 * @param {*} param0 
 * @returns 
 */
const Table = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState(null);
  const [columns, setColums] = useState(null);
  const [column_width, setColumn_width] = useState({ width: 0 });
  const displayData = useSelector(state => state.datatable.data.display);
  const sort = useSelector(state => state.datatable.sort);

  useEffect(() => {
    if (displayData) {
      setColums(displayData.columns);
      setRows(displayData.data);
      computeColumnWidth();
    }
  }, [displayData]);

  /**
   * This method allows us to calculate the width of each column
   */
  const computeColumnWidth = () => {
    let columnWidth = 100 / displayData.columns.length;
    setColumn_width({ width: columnWidth + "%" });
  }

  /**
   * This method allows to compute arrows up/down
   * @param {*} column 
   * @returns 
   */
  const getIcons = (column) => {
    if (column === sort.column) {
      return sort.order === "ASC" ? <div className='arrow-up sort' /> : <div className='arrow-down sort' />
    }
    return <><div className='arrow-up' /><div className='arrow-down' /></>
  }

  /**
   * This method allows to handle click when user want to sort
   * @param {*} column 
   */
  const handleSort = (column) => {
    let newSort = { ...sort };

    if (column === sort.column) {//check if column is the same as current sorted column
      newSort.order = sort.order === "ASC" ? "DESC" : "ASC";
    }
    else {
      newSort.column = column;
      newSort.order = "ASC"; //Par default
    }
    dispatch(setSort(newSort));
    dispatch(display());
  }

  return (
    <div className="Table" data-testid="Table">
      <table>
        <thead>
          <tr>
            {
              columns && columns.map((column, index) => {
                return <th key={index} style={column_width} onClick={() => handleSort(column.data)}>
                  <span className='th-text'>{column.title} </span>
                  <span className='th-icons'>{getIcons(column.data)}</span>
                </th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rows && rows.map((row, indexRow) =>
              <tr key={indexRow}>
                {columns && columns.map((column, indexColumn) => <td key={indexColumn} style={column_width}> {row[column.data] && row[column.data]} </td>)}
              </tr>)
          }
          {
            rows && rows.length === 0 && <tr><td className='td-no-result'>No matching records found</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
