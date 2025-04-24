// Imports
import express from 'express';
import { postProject } from '../controllers/projectController.js';

// Routes for project
const router = express.Router();

// POSTS 
router.post('/', postProject);

export const projectRoutes = router;
