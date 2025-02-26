import mongoose from 'mongoose';

const subTodoSchema = mongoose.Schema({});

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);