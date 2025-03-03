import React, { useState } from "react";
import "./App.css";

const CustomTable = ({
  data,
  headers,
  inputColumns = [],
  fixedColumns = [],
}) => {
  const [tableData, setTableData] = useState(data);
  const columns = headers.map((header) => header.key);

  const fixedStartColumns = fixedColumns.slice(0, 4);
  const fixedEndColumns = fixedColumns.slice(-1);
  const scrollableColumns = columns.filter(
    (col) => !fixedStartColumns.includes(col) && !fixedEndColumns.includes(col)
  );

  const handleInputChange = (rowIndex, col, value) => {
    const newData = [...tableData];
    newData[rowIndex][col] = value;
    setTableData(newData);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {fixedStartColumns.map((col) => (
              <th key={col} className="fixed-col start-fixed">
                {headers.find((header) => header.key === col)?.label}
              </th>
            ))}
            {scrollableColumns.map((col) => (
              <th key={col} className="scrollable-col">
                {headers.find((header) => header.key === col)?.label}
              </th>
            ))}
            {fixedEndColumns.map((col) => (
              <th key={col} className="fixed-col end-fixed">
                {headers.find((header) => header.key === col)?.label}
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
                      type="number"
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
