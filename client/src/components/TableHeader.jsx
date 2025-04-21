import React from 'react'

const TableHeader = ({ onSort }) => {
  return (
    <thead className='table-header'>
      <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>Project Name</th>
        <th>Start Date</th>
      </tr>
    </thead>
  );
};

export default TableHeader;