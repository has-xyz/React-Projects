import Todo from '../models/todo.js'
import mongoose from 'mongoose';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (err) {
        res.status(404).json({ message: err.message})
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new Todo(todo);
    try {
        await newTodo.save();
        res.status(201).json(newTodo)
    } catch (err) {
        res.status(409).json({ message: err.message})
    }
}

export const updateTodo = async (req, res) => {
    const {id: _id} = req.params;
    const todo = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No todo with that ID');

    const updatedTodo = await Todo.findByIdAndUpdate(_id, {...todo, _id}, {new: true})
    res.json(updatedTodo)
}

export const deleteTodo = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No todo with that ID');

    // Delete
    await Todo.findByIdAndRemove(_id)
    res.json({message: 'Todo deleted successfully.'})
}
