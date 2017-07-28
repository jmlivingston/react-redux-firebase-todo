import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/merge'

import { todoConstants } from '../config/constants'
import firebaseEpicHelper from './FirebaseEpicHelper'

const refName = 'todos'
const todoEpic = action$ => Observable.merge(
  firebaseEpicHelper.get(action$, todoConstants.GET, todoConstants.GET_COMPLETE, refName),
  firebaseEpicHelper.add(action$, todoConstants.ADD, todoConstants.ADD_COMPLETE, refName),
  firebaseEpicHelper.update(action$, todoConstants.UPDATE, todoConstants.UPDATE_COMPLETE, refName),
  firebaseEpicHelper.remove(action$, todoConstants.DELETE, todoConstants.DELETE_COMPLETE, refName)
)

export default todoEpic
