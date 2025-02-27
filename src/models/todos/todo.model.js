import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodos'
    }
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);