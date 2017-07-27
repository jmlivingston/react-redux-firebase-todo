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
  onChange (id, value) {
    dispatch(todoChange(id, value))
  },
  onNewChange (value) {
    dispatch(todoNewChange(value))
  },
  onDelete (id) {
    dispatch(todoDelete(id))
  },
  onUpdate (id, value) {
    dispatch(todoUpdate(id, value))
  }
})

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoView)

export default TodoContainer
