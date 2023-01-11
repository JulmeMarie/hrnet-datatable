import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import './Table.css';

/**
 * This component allows to display the data in an html table
 * @param {*} param0 
 * @returns 
 */
const Table = () => {
  const [rows, setRows] = useState(null);
  const [columns, setColums] = useState(null);
  const [columnsStyle, setColumnStyle] = useState(null);
  const data = useSelector(state => state.datatable.data.display);


  useEffect(() => {
    if (data) {
      setColums(data.columns);
      setRows(data.data);

      let columnWidth = 100 / data.columns.length;
      setColumnStyle({
        width: columnWidth + "%"
      });
    }
  }, [data]);

  return (
    <div className="Table" data-testid="Table">
      <table>
        <thead>
          <tr>
            {
              columns && columns.map((column, index) => {
                return <th key={index} style={columnsStyle}> {column.title} </th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rows && rows.map((row, indexRow) =>
              <tr key={indexRow}>
                {columns && columns.map((column, indexColumn) => <td key={indexColumn} style={columnsStyle}> {row[column.data] && row[column.data]} </td>)}
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

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
