import React, { useRef, useEffect } from 'react';
import './StickyTable.css'; // Create this CSS file

const StickyTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const scrollLeft = tableRef.current.scrollLeft;
        const headers = tableRef.current.querySelectorAll('th');
        const rows = tableRef.current.querySelectorAll('tr');

        headers.forEach((header, index) => {
          if (index < 3) {
            header.style.transform = translateX(${scrollLeft}px);
          } else if (index >= 7) {
            header.style.transform = translateX(-${tableRef.current.scrollWidth - tableRef.current.clientWidth - scrollLeft}px);
          }
        });

        rows.forEach((row) => {
          const cells = row.querySelectorAll('td');
          cells.forEach((cell, index) => {
            if (index < 3) {
              cell.style.transform = translateX(${scrollLeft}px);
            } else if (index >= 7) {
              cell.style.transform = translateX(-${tableRef.current.scrollWidth - tableRef.current.clientWidth - scrollLeft}px);
            }
          });
        });
      }
    };

    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="table-container">
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
            <th>Column 8</th>
            <th>Column 9</th>
            <th>Column 10</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 50 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 10 }, (_, cellIndex) => (
                <td key={cellIndex}>
                  Row {rowIndex + 1}, Col {cellIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyTable;