import ProjectAssignment from '../models/projectAssignment.js';
import Employee from '../models/employee.js';
import Project from '../models/project.js';

export const postProjectAssignments = async (req, res) => {
  try {
    const { employee_id, project_code, start_date } = req.body;

    const employee = await Employee.findOne({ employee_id });
    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found',
      });
    }

    const project = await Project.findOne({ project_code });
    if (!project) {
      return res.status(404).json({
        message: 'Project not found',
      });
    }

    const newProjectAssignment = new ProjectAssignment({
      employee_id: employee._id,
      project_code: project._id,
      start_date,
    });
    
    const savedAssignment = await newProjectAssignment.save();
    res.status(201).json(savedAssignment);

  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
  }
};

export const getAllProjectAssignment = async (req, res) => {
  try {
    const projectAssignments = await ProjectAssignment.find()
      .populate('employee_id')
      .populate('project_code');
    res.status(200).json(projectAssignments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
  }
};
