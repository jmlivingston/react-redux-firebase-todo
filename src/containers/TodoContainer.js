import { connect } from 'react-redux'

import TodoView from '../components/TodoView'
import {
  todoChangeNew,
  todoGetRecordSet,
  todoSaveRecord,
  todoRemoveRecord,
  todoUpdateRecord
} from '../config/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    newTodo: state.todo.newTodo,
    todos: state.todo.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get() {
      dispatch(todoGetRecordSet())
    },
    set(key, todo) {
      dispatch(todoSaveRecord(key, todo))
    },
    setNew(value) {
      dispatch(todoChangeNew(value))
    },
    remove(key) {
      dispatch(todoRemoveRecord(key))
    },
    update(key, todo) {
      dispatch(todoUpdateRecord(key, todo))
    }
  }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoView)

export default TodoContainer
