import express from 'express';
import {
  postProjectAssignments,
  getAllProjectAssignment,
} from '../controllers/projectAssignmentController.js';

const router = express.Router();

router.post('/', postProjectAssignments);

router.get('/', getAllProjectAssignment);

export const projectAssignmentRoutes = router;
