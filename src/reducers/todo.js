import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/switchMap'

import { TODO, TODO_PREFIX } from '../config/constants'
import firebaseEpicHelper from './firebaseEpicHelper'
import firebaseReducerHelper from './firebaseReducerHelper'
import logEpicHelper from './logEpicHelper'

export const todoEpic = action$ =>
  Observable.merge(
    firebaseEpicHelper.getRecordSet(action$, TODO.GET_RECORDSET),
    logEpicHelper.log(action$, TODO_PREFIX),
    firebaseEpicHelper.removeRecord(action$, TODO.REMOVE_RECORD),
    firebaseEpicHelper.saveRecord(action$, TODO.SAVE_RECORD),
  )

export const todo = (state = { todos: {}, newTodo: { title: '' } }, action) => {
  switch (action.type) {
    case TODO.CHANGE_RECORD:
      return firebaseReducerHelper.saveRecordComplete(state, action)
    case TODO.SAVE_RECORD_COMPLETE:
      return firebaseReducerHelper.saveRecordComplete(state, action)
    case TODO.GET_RECORDSET_COMPLETE:
      return firebaseReducerHelper.getRecordSetComplete(state, action)
    case TODO.REMOVE_RECORD_COMPLETE:
      return firebaseReducerHelper.removeRecordComplete(state, action)
    default:
      return state
  }
}
