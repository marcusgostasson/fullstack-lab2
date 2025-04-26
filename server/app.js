//Imports
import express from 'express';
import { employeeRoutes } from './routes/employeeRoutes.js';
import { projectRoutes } from './routes/projectRoutes.js';
import { projectAssignmentRoutes } from './routes/projectAssignmentRoutes.js';
import { connectDB } from './config/db.js'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';

// Express & Json
const app = express();
app.use(express.json());

// Cors
app.use(cors({
    origin: '*'
  }));

//Routes
app.use('/api/employee', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/project_assignments', projectAssignmentRoutes);

// Connect to database
connectDB();

// Serve static files from the React build folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reactBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(reactBuildPath));

// Serve React's index.html
app.use((req, res, next) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

export default app;
