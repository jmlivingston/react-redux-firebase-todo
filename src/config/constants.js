const todoPrefix = 'TODO_'
const completeSuffix = '_COMPLETE'

export const todoConstants = {
  ADD: todoPrefix + 'ADD',
  ADD_COMPLETE: todoPrefix + 'ADD' + completeSuffix,
  CHANGE: todoPrefix + 'CHANGE',
  NEW_CHANGE: todoPrefix + 'NEW_CHANGE',
  GET: todoPrefix + 'GET',
  GET_COMPLETE: todoPrefix + 'GET' + completeSuffix,
  UPDATE: todoPrefix + 'UPDATE',
  UPDATE_COMPLETE: todoPrefix + 'UPDATE' + completeSuffix,
  DELETE: todoPrefix + 'DELETE',
  DELETE_COMPLETE: todoPrefix + 'DELETE' + completeSuffix
}
