import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { todoAdd, todoChange } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  newValue: state.todo.newValue,
  todos: state.todo.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd (newValue) {
    dispatch(todoAdd(newValue))
  },
  onChange (newValue) {
    dispatch(todoChange(newValue))
  }
})

const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Todo
