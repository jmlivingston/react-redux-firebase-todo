import { todoConstants } from '../config/constants'
import reducerHelper from './ReducerHelper'

const objectName = 'todos'
const keyName = 'key'
const valueName = 'value'

const todo = (state = { todos: [], value: '' }, action) => {
  switch (action.type) {
    case todoConstants.ADD_COMPLETE:
      return reducerHelper.addComplete(state, action, objectName, valueName)
    case todoConstants.CHANGE:
      return reducerHelper.change(state, action, objectName, valueName, keyName)
    case todoConstants.NEW_CHANGE:
      return reducerHelper.newChange(state, action, valueName)
    case todoConstants.GET_COMPLETE:
      return reducerHelper.getComplete(state, action, objectName)
    case todoConstants.UPDATE_COMPLETE:
      return reducerHelper.updateComplete(state)
    case todoConstants.DELETE_COMPLETE:
      return reducerHelper.deleteComplete(state, action, objectName, keyName)
    default:
      return state
  }
}

export default todo
