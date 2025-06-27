import { Router } from "express";
import TodoController from "../controllers/todo.controller.js";

const TodoRouter = Router();
const controller = new TodoController();

TodoRouter.get('/', (req, res) => controller.getAll(req, res));
TodoRouter.post('/', (req, res) => controller.create(req, res));
TodoRouter.put('/:id', (req, res) => controller.update(req, res));
TodoRouter.delete('/:id', (req, res) => controller.delete(req, res));

export default TodoRouter;
