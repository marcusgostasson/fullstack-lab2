// Imports
import mongoose from 'mongoose';

const ProjectAssignmentSchema = mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
    unique: true
  },
  project_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
    unique: true
  },
  start_date: {
    type: Date,
    required: true,
  },
});

const ProjectAssignment = mongoose.model(
  'ProjectAssignment',
  ProjectAssignmentSchema
);

export default ProjectAssignment;
