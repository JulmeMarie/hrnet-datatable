/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSort, display } from '../../redux/reducer';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
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

  const computeColumnWidth = () => {
    let columnWidth = 100 / displayData.columns.length;
    setColumn_width({ width: columnWidth + "%" });
  }

  const getIcons = (column) => {
    if (column === sort.column) {
      return sort.order === "ASC" ? <FaCaretUp className='up sort' /> : <FaCaretDown className='down sort' />
    }
    return <><FaCaretUp className='up' /><FaCaretDown className='down' /></>
  }

  const handleSort = (column) => {
    let newSort = { ...sort };

    if (column === sort.column) {
      newSort.order = sort.order === "ASC" ? "DESC" : "ASC";
    }
    else {
      newSort.column = column;
      newSort.order = "ASC";
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
