import express from 'express';
const router = express.Router();
import {getTodos, createTodo, updateTodo, deleteTodo} from '../controllers/todos.js'

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo);

export default router;