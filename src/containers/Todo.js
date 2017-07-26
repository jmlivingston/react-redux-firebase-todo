import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todo.todos
})

const mapDispatchToProps = dispatch => ({

})

const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Todo
