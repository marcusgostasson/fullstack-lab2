import Project from '../models/project.js';

export const postProject = async (req, res) => {
  try {
    const { project_code, project_name, project_description } = req.body;

    const existingProject = await Project.findOne({ project_name });
    if (existingProject) {
      return res
        .status(409)
        .json({ message: 'A Project with that project name already exists' });
    }

    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
  }
};
