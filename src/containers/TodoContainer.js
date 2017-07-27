import { connect } from 'react-redux'

import TodoView from '../components/TodoView'
import { todoAdd, todoChange, todoDelete, todoNewChange, todoUpdate } from '../config/actions'

const mapStateToProps = (state, ownProps) => ({
  value: state.todo.value,
  todos: state.todo.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd (value) {
    dispatch(todoAdd(value))
  },
  onChange (key, value) {
    dispatch(todoChange(key, value))
  },
  onNewChange (value) {
    dispatch(todoNewChange(value))
  },
  onDelete (key) {
    dispatch(todoDelete(key))
  },
  onUpdate (key, value) {
    dispatch(todoUpdate(key, value))
  }
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoView)

export default TodoContainer
