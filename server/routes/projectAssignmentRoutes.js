// imports 
import express from 'express';
import {
  postProjectAssignments,
  getAllProjectAssignment,
} from '../controllers/projectAssignmentController.js';

// Routes for employee
const router = express.Router();

// POSTS 
router.post('/', postProjectAssignments);

// GETS
router.get('/', getAllProjectAssignment);

export const projectAssignmentRoutes = router;
