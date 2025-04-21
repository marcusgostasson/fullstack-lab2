import './App.css';
import { useEffect, useState } from 'react';
import TableHeader from './components/TableHeader.jsx';
import TableBody from './components/TableBody.jsx';
import axios from 'axios';

function App() {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchProjectAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/project_assignments');
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchProjectAssignments();
  }, []);

  return (
    <>    
    <h1>Table Of Project Assignments</h1>
      <table className='table-container'>
        <TableHeader/>
        <TableBody assignments={assignments} />
      </table>
    </>
  )
}

export default App;
