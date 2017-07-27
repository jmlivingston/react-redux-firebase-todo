import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos = [], onChange, onDelete, onUpdate }) => <ul>
  {
    todos && Object.keys(todos).map(key => <Todo key={key} itemKey={key} value={todos[key]}
      onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />)
  }
</ul>

export default TodoList
