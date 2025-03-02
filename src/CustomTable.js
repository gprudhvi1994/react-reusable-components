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

// // Example rendering in App.js
// import React from "react";
// import CustomTable from "./CustomTable";

// function App() {
//   const data = [
//     {
//       userId: 1,
//       id: 1,
//       title: "delectus aut autem",
//       completed: false,
//       priority: "High",
//       assignedTo: "John",
//       createdAt: "2024-02-28",
//       updatedAt: "2024-02-29",
//       status: "Pending",
//       category: "Work",
//       dueDate: "2024-03-05",
//       progress: "50%",
//       notes: "Requires review",
//       tags: "urgent, important",
//       estimatedTime: "4h",
//       actualTime: "2h",
//       client: "ABC Corp",
//       location: "Remote",
//       reviewer: "Alice",
//       feedback: "Needs changes",
//       priorityLevel: 3
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "quis ut nam facilis et officia qui",
//       completed: false,
//       priority: "Medium",
//       assignedTo: "Jane",
//       createdAt: "2024-02-25",
//       updatedAt: "2024-02-27",
//       status: "In Progress",
//       category: "Personal",
//       dueDate: "2024-03-10",
//       progress: "30%",
//       notes: "Follow up needed",
//       tags: "important",
//       estimatedTime: "2h",
//       actualTime: "1h",
//       client: "XYZ Ltd",
//       location: "Office",
//       reviewer: "Bob",
//       feedback: "Looks good",
//       priorityLevel: 2
//     }
//   ];

//   const inputColumns = ["title", "priority", "notes"];
//   const fixedColumns = ["userId", "id", "priorityLevel", "feedback"];

//   return (
//     <div className="App">
//       <h1>Custom Table with Fixed Columns</h1>
//       <CustomTable data={data} inputColumns={inputColumns} fixedColumns={fixedColumns} />
//     </div>
//   );
// }

// export default App;
