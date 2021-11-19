import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    text: String,
    creator: {
        type: String,
        default: 'Hasan'
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;