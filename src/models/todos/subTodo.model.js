import mongoose from 'mongoose';

const subTodoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);