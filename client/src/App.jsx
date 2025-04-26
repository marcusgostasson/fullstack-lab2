// Imports
import './App.css';
import { useEffect, useState } from 'react';
import TableHeader from './components/TableHeader.jsx';
import TableBody from './components/TableBody.jsx';
import axios from 'axios';


const PORT = import.meta.env.VITE_PORT;


function App() {
  const [assignments, setAssignments] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch data from API
  useEffect(() => {
    const fetchProjectAssignments = async () => {
      try {

        const response = await axios.get(
          `http://localhost:${PORT}/api/project_assignments`
        );
        setAssignments(response.data.slice(-5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Set auto update to 6 sec
    fetchProjectAssignments();
    const intervalId = setInterval(fetchProjectAssignments, 6000);

    return () => clearInterval(intervalId);
  }, []);

  // Sort function for table
  const sortAssignments = (headerName) => {
    const isSame = sortField === headerName;
    const order = isSame && sortOrder === 'asc' ? 'desc' : 'asc';

    const getValue = (assignment) => {
      if (headerName === 'full_name') return assignment.employee_id.full_name;
      if (headerName === 'employee_id')
        return assignment.employee_id.employee_id;
      if (headerName === 'project_name')
        return assignment.project_code.project_name;
      return assignment[headerName];
    };

    const sorted = [...assignments].sort((a, b) => {
      const aVal = getValue(a);
      const bVal = getValue(b);

      if (headerName === 'start_date') {
        return order === 'asc'
          ? new Date(aVal) - new Date(bVal)
          : new Date(bVal) - new Date(aVal);
      }

      return order === 'asc'
        ? aVal.toString().localeCompare(bVal.toString())
        : bVal.toString().localeCompare(aVal.toString());
    });

    setAssignments(sorted);
    setSortField(headerName);
    setSortOrder(order);
  };

  // Table
  return (
    <>
      <h1>Project Assignments</h1>
      <table className="table">
        <TableHeader onSort={sortAssignments} />
        <TableBody assignments={assignments} />
      </table>
    </>
  );
}

export default App;
