import React from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

const TodoView = ({ todos = [], newValue = '', onAdd, onChange, onNewChange, onDelete, onUpdate }) => <div>
  <TodoList todos={todos} onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />
  <TodoAdd newValue={newValue} onAdd={onAdd} onNewChange={onNewChange} />
</div>

export default TodoView
