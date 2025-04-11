import { Router } from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

import { validate } from '../middlewares/validate.js';
import { taskSchema } from '../validations/taskValidation.js';

const router = Router();

router.post('/tasks', validate(taskSchema), createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', validate(taskSchema), updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
