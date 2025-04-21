import React from 'react';

const TableBody = ({ assignments }) => {

  return (
    <tbody  className='table-body'>
      {assignments.map((assignment, index) => (
        <tr key={index}>
          <td>{assignment.employee_id.employee_id}</td>
          <td>{assignment.employee_id.full_name}</td>
          <td>{assignment.project_code.project_name}</td>
          <td>{assignment.start_date}</td>
        </tr>
      ))}
    </tbody>
  );
};


export default TableBody;
