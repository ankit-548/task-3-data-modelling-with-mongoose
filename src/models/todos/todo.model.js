import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({});

export const Todo = mongoose.model('Todo', todoSchema);