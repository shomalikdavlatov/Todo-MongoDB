import { TodoModel } from "../models/todo.model.js";

export default class TodoService {
    constructor() {
        this.todoModel = TodoModel;
    }
    async getAll() {
        return await this.todoModel.find();
    }
    async create(body) {
        return await this.todoModel.create(body);
    }
    async update(id, body) {
        return await this.todoModel.findOneAndUpdate({"_id": id}, body, {new: true});
    }
    async delete(id) {
        return await this.todoModel.findOneAndDelete({"_id": id});
    }
}