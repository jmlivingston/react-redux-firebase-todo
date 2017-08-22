const firebaseReducerHelper = {
  getRecordSetComplete: (state, action) => {
    return {
      ...state,
      [action.recordSetKey]: action[action.recordSetKey]
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
  },
  saveRecordComplete: (state, action) => {
    return {
      ...state,
      [action.recordSetKey]: {
        ...state[action.recordSetKey],
        [action.recordKey]: action.recordKeyValue
      }
    }
  }
}

export default firebaseReducerHelper
