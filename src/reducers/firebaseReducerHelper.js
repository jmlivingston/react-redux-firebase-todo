const firebaseReducerHelper = {
  getRecordSetComplete: (state, action) => {
    return {
      ...state,
      [action.recordSetKey]: action[action.recordSetKey]
    }
  },
  saveRecordComplete: (state, action) => {
    return {
      ...state,
      [action.recordSetKey]: {
        ...state[action.recordSetKey],
        [action.recordKey]: action.recordKeyValue
      }
    }
  },
  removeRecordComplete: (state, action) => {
    const { [action.recordKey]: filteredValue, ...filteredItems } = state[
      action.recordSetKey
    ]
    return {
      ...state,
      [action.recordSetKey]: {
        ...filteredItems
      }
    }
  }
}

export default firebaseReducerHelper
