import express from 'express';
import { postProject } from '../controllers/projectController.js';

const router = express.Router();

router.post('/', postProject);

export const projectRoutes = router;
