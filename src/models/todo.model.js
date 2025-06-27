import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    isDone: {type: Boolean, default: false}
}, {timestamps: true, versionKey: false});

export const TodoModel = new mongoose.model('Todo', TodoSchema);