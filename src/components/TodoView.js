import React, { Component } from 'react'

import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

class TodoView extends Component {
  componentDidMount() {
    this.props.get()
  }
  render() {
    return (
      <div>
        <TodoList {...this.props} />
        <TodoAdd {...this.props} />
      </div>
    )
  }
}

export default TodoView
