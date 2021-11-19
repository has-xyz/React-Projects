import React from 'react'
import './App.css'
// import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  )
}
