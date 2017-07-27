import PropTypes from 'prop-types'
import React from 'react'

import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

const TodoView = ({ todos, value, onAdd, onChange, onNewChange, onDelete, onUpdate }) => <div>
  <TodoList todos={todos} onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />
  <TodoAdd value={value} onAdd={onAdd} onNewChange={onNewChange} />
</div>

TodoView.propTypes = {
  todos: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  value: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onNewChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default TodoView
