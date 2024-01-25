import React from 'react';

const Table = ({ headings, rows }) => {
  return (
    <table className="sm:w-[644px] grid grid-flow-col border border-solid border-[#f0f0f0]">
      <thead>
        <tr className="font-dm font-bold text-base text-primary grid grid-flow-row ">
          {headings.map((heading, index) => (
            <th key={index} className="p-5 border-b border-r border-[#f0f0f0] text-left last:border-b-0">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, rowIndex) => (
          <tr key={rowIndex} className="font-dm font-normal text-base text-[#767676] grid grid-flow-row">
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex} className="p-5 border-b border-[#f0f0f0] last:border-b-0">
                {cellData}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
