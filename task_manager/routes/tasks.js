import express from "express";
import tasks from '../controllers/tasks.js';
const router = express.Router()

router.route('/').get(tasks.getAllTasks).post(tasks.postTask)
router.route('/:id').get(tasks.getSingleTask).patch(tasks.updateTask).delete(tasks.deleteTask)

export default router