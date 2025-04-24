// Imports
import React from 'react'

const TableHeader = ({ onSort }) => {
  return (
    <thead className='table-header-container'>
      <tr>
        <th onClick={() => onSort('employee_id')} className='table-header'>Employee ID</th>
        <th onClick={() => onSort('full_name')} className='table-header'>Employee Name</th>
        <th onClick={() => onSort('project_name')} className='table-header'>Project Name</th>
        <th onClick={() => onSort('start_date')} className='table-header'>Start Date</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
