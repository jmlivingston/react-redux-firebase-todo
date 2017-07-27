import PropTypes from 'prop-types'
import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, onChange, onDelete, onUpdate }) => <ul>
  {
    todos && Object.keys(todos).map(key => <Todo key={key} itemKey={key} value={todos[key]}
      onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />)
  }
</ul>

TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default TodoList
