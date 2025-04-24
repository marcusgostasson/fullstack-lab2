// Imports
import Employee from '../models/employee.js';

// PostController for employee
export const postEmployee = async (req, res) => {
  try {
    const { employee_id, full_name, email, hashed_password } = req.body;

    // Check if employee exist
    const existingEmployee = await Employee.findOne({ employee_id });
    if (existingEmployee) {
      return res
        .status(409)
        .json({ message: 'An employee with that employee id already exists' });
    }

    // Create a new employee
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
  }
};
