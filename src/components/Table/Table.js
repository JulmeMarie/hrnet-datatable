import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ data }) => {
  const [rows, setRows] = useState(null);
  const [columns, setColums] = useState(null);
  const [columnsStyle, setColumnStyle] = useState(null);

  useEffect(() => {
    console.log(data);
    if (data) {
      setColums(data.columns);
      setRows(data.rows);

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
          <tr>{
            columns && columns.map((column, index) =>
              <th key={index} style={columnsStyle}> {column.title} </th>)
          }</tr>
        </thead>
        <tbody>
          {
            rows && rows.map((row, indexRow) => <tr key={indexRow}>
              {columns.map((column, indexColumn) =>
                <td key={indexColumn} style={columnsStyle}> {row[column.data] && row[column.data]} </td>)}
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
