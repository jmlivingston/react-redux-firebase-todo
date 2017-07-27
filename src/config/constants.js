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

export const firebaseConfig = {
  apiKey: 'AIzaSyAG7e5fVEm1Y8TxbJ41w4kzHApyvfHik5s',
  authDomain: 'johnlivingston-qa-11485.firebaseapp.com',
  databaseURL: 'https://johnlivingston-qa-11485.firebaseio.com',
  projectId: 'johnlivingston-qa-11485',
  storageBucket: 'johnlivingston-qa-11485.appspot.com',
  messagingSenderId: '470191318511'
}
