import React from "react";
import "./App.css";

const DynamicTable = ({ fixedColumns }) => {
  const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);
  const data = Array.from({ length: 10 }, () =>
    Object.fromEntries(columns.map((col, i) => [col, `Data ${i + 1}`]))
  );

  const fixedStartColumns = fixedColumns.slice(0, 3);
  const fixedEndColumns = fixedColumns.slice(-1);
  const scrollableColumns = columns.filter(
    (col) => !fixedStartColumns.includes(col) && !fixedEndColumns.includes(col)
  );

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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {fixedStartColumns.map((col) => (
                <td key={col} className="fixed-col start-fixed">
                  {row[col]}
                </td>
              ))}
              {scrollableColumns.map((col) => (
                <td key={col} className="scrollable-col">
                  {row[col]}
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

export default DynamicTable;
