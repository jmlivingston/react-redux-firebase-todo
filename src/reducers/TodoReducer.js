import { todoConstants } from '../config/constants'

const todo = (state = { todos: [], newValue: '' }, action) => {
  switch (action.type) {
    case todoConstants.ADD_COMPLETE:
      return {
        ...state,
        todos: { ...state.todos, ...action.value },
        newValue: ''
      }
    case todoConstants.CHANGE:
      let test = {
        ...state,
        todos: { ...state.todos, ...{ [action.id]: action.value } }
      }
      return test
    case todoConstants.NEW_CHANGE:
      return {
        ...state,
        newValue: action.newValue
      }
    case todoConstants.GET_COMPLETE:
      return {
        ...state,
        todos: action.todos
      }
    case todoConstants.UPDATE_COMPLETE:
      return state
    case todoConstants.DELETE_COMPLETE:
      const { [action.id]: filteredValue, ...filteredTodos } = state.todos
      return {
        ...state,
        todos: filteredTodos
      }
    default:
      return state
  }
}

export default todo
