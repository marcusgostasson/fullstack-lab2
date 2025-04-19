import express from 'express';
import { postEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/', postEmployee);

export const employeeRoutes = router;
