import express from 'express';
import { employeeRoutes } from './routes/employeeRoutes.js';
import { projectRoutes } from './routes/projectRoutes.js';
import { projectAssignmentRoutes } from './routes/projectAssignmentRoutes.js';
import { connectDB } from './config/db.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
  }));

//Routes
app.use('/api/employee', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/project_assignments', projectAssignmentRoutes);

connectDB();

export default app;
