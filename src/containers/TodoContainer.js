import { connect } from 'react-redux'

import TodoView from '../components/TodoView'
import { todoAdd, todoChange, todoDelete, todoNewChange, todoUpdate } from '../config/actions'

const mapStateToProps = (state, ownProps) => ({
  newValue: state.todo.newValue,
  todos: state.todo.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd (newValue) {
    dispatch(todoAdd(newValue))
  },
  onChange (id, value) {
    dispatch(todoChange(id, value))
  },
  onNewChange (newValue) {
    dispatch(todoNewChange(newValue))
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
