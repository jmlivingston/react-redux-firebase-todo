import { todoTypes } from '../types'

const todo = (state = { todos: [] }, action) => {
  switch (action.type) {
    case todoTypes.GET_COMPLETE:
      return {
        ...state,
        todos: action.todos
      }
    case todoTypes.ADD_COMPLETE:
      return {
        ...state,
        todos: { ...state.todos, ...action.value }
      }
    default:
      return state
  }
}

export default todo
