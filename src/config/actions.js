import { TODO } from '../config/constants'
import uuidv4 from 'uuid/v4'

const todoRecordSetKey = 'todos'
const newTodoRecordSetKey = 'newTodo'
const isAsync = false

export const todoGetRecordSet = () => {
  return {
    type: TODO.GET_RECORDSET,
    completeActionType: TODO.GET_RECORDSET_COMPLETE,
    recordSetKey: todoRecordSetKey,
    isAsync
  }
}

export const todoChangeNew = recordKeyValue => {
  return {
    type: TODO.CHANGE_RECORD,
    recordSetKey: newTodoRecordSetKey,
    recordKey: 'title',
    recordKeyValue
  }
}

export const todoUpdateRecord = (recordKey, recordKeyValue) => {
  return {
    type: TODO.SAVE_RECORD_COMPLETE,
    recordSetKey: todoRecordSetKey,
    recordKey,
    recordKeyValue
  }
}

export const todoSaveRecord = (recordKey, todo, isNew) => {
  todo = { ...todo, modified: new Date().toUTCString() }
  const postActions = [
    {
      type: TODO.SAVE_RECORD_COMPLETE
    }
  ]
  if (!recordKey) {
    recordKey = uuidv4()
    todo.created = new Date().toUTCString()
    postActions.push({
      type: TODO.CHANGE_RECORD,
      recordSetKey: newTodoRecordSetKey,
      recordKey: 'title',
      recordKeyValue: ''
    })
  }
  return {
    type: TODO.SAVE_RECORD,
    recordSetKey: todoRecordSetKey,
    recordKey,
    recordKeyValue: todo,
    postActions
  }
}

export const todoRemoveRecord = todoKey => {
  const postActions = [
    {
      type: TODO.REMOVE_RECORD_COMPLETE
    }
  ]
  return {
    type: TODO.REMOVE_RECORD,
    recordSetKey: todoRecordSetKey,
    recordKey: todoKey,
    postActions
  }
}
