import { model, Schema, } from "mongoose";
import TodoModel from "../models";

const schema : Schema = new Schema<TodoModel>({
    name: { type: String, required: true },
    id: { type: Number, required: true, default: Date.now()},
    complete: { type: Boolean, required: true }
})

const Todos = model<TodoModel>('Todos', schema)

export default Todos
