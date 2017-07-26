import React from 'react'

const TodoList = ({ todos = [] }) => <div>
  <ul>
    {
      Object.keys(todos).map((key, id) => (
        <li key={id}>
          {todos[key].name}
        </li>))
    }
  </ul>
</div>

export default TodoList
