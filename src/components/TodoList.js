import PropTypes from 'prop-types'
import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, update, remove, set }) => {
  return (
    <div>
      {todos &&
        Object.keys(todos).map(key =>
          <Todo
            key={key}
            itemKey={key}
            todo={todos[key]}
            update={update}
            remove={remove}
            set={set}
          />
        )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ),
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  set: PropTypes.func.isRequired
}

export default TodoList
