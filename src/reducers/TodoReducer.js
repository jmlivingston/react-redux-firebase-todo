import { todoTypes } from '../types'

const todo = (state = { todos: [], newValue: '' }, action) => {
  switch (action.type) {
    case todoTypes.ADD_COMPLETE:
      return {
        ...state,
        todos: { ...state.todos, ...action.value },
        newValue: ''
      }
    case todoTypes.CHANGE:
      return {
        ...state,
        newValue: action.newValue
      }
    case todoTypes.GET_COMPLETE:
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state
  }
}

export default todo
