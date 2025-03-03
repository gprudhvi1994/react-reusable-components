import React, { useState } from "react";
import "./App.css";

const CustomTable = ({ data, inputColumns = [], fixedColumns = [] }) => {
  const [tableData, setTableData] = useState(data);
  const columns = Object.keys(data[0] || {});

  const fixedStartColumns = fixedColumns.slice(0, 3);
  const fixedEndColumns = fixedColumns.slice(-1);
  const scrollableColumns = columns.filter(
    (col) => !fixedStartColumns.includes(col) && !fixedEndColumns.includes(col)
  );

  const handleInputChange = (rowIndex, col, value) => {
    const newData = [...tableData];
    newData[rowIndex][col] = value;
    setTableData(newData);
  };

  console.log(fixedColumns, "fx");

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {fixedStartColumns.map((col) => (
              <th key={col} className="fixed-col start-fixed">
                {col}
              </th>
            ))}
            {scrollableColumns.map((col) => (
              <th key={col} className="scrollable-col">
                {col}
              </th>
            ))}
            {fixedEndColumns.map((col) => (
              <th key={col} className="fixed-col end-fixed">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {fixedStartColumns.map((col) => (
                <td key={col} className="fixed-col start-fixed">
                  {row[col]}
                </td>
              ))}
              {scrollableColumns.map((col) => (
                <td key={col} className="scrollable-col">
                  {inputColumns.includes(col) ? (
                    <input
                      type="text"
                      value={row[col]}
                      onChange={(e) =>
                        handleInputChange(rowIndex, col, e.target.value)
                      }
                    />
                  ) : (
                    String(row[col])
                  )}
                </td>
              ))}
              {fixedEndColumns.map((col) => (
                <td key={col} className="fixed-col end-fixed">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
