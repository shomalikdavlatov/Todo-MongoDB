import TodoService from "../services/todo.service.js";

export default class TodoController {
    constructor() {
        this.service = new TodoService();
    }
    async getAll(req, res) {
        try {
            res.status(200).json(await this.service.getAll());
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    async create(req, res) {
        try {
            res.status(201).json(await this.service.create(req.body));
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
        
    }
    async changeStatus(req, res) {
        try {
            res.status(200).json(await this.service.changeStatus(req.params.id));
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
        
    }
    async delete(req, res) {
        try {
            res.status(200).json(await this.service.delete(req.params.id));
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }

    }
}