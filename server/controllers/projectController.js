// Imports
import Project from '../models/project.js';

// Post a new project 
export const postProject = async (req, res) => {
  try {
    const { project_code, project_name, project_description } = req.body;

    // Check if project already exist
    const existingProject = await Project.findOne({ project_name });
    if (existingProject) {
      return res
        .status(409)
        .json({ message: 'A Project with that project name already exists' });
    }

    // Create a new project
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
  }
};
