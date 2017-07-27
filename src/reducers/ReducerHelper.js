const reducerHelper = {
  addComplete: (state, action, objectName, valueName) => ({
    ...state,
    [objectName]: {
      ...state[objectName],
      ...action[valueName]
    },
    [valueName]: ''
  }),
  change: (state, action, objectName, valueName, keyName) => ({
    ...state,
    [objectName]: {
      ...state[objectName],
      ...{ [action[keyName]]: action[valueName] }
    }
  }),
  newChange: (state, action, valueName) => ({
    ...state,
    [valueName]: action[valueName]
  }),
  getComplete: (state, action, objectName) => ({
    ...state,
    [objectName]: action[objectName]
  }),
  updateComplete: (state) => (state),
  deleteComplete: (state, action, objectName, keyName) => {
    const {
      [action.key]: filteredValue,
      ...filteredTodos
    } = state[objectName]
    return {
      ...state,
      [objectName]: filteredTodos
    }
  }
}

export default reducerHelper
