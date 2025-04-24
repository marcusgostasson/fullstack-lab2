// Imports
import express from 'express';
import { postEmployee } from '../controllers/employeeController.js';

// Routes for employee
const router = express.Router();

// POSTS
router.post('/', postEmployee);

export const employeeRoutes = router;
