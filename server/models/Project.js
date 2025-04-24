// Imports
import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    project_code: {
      type: String,
      required: true,
      unique: true,
    },
    project_name: {
      type: String,
      required: true,
    },
    project_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
