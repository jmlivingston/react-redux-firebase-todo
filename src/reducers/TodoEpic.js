import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/switchMap'

import { todoConstants } from '../config/constants'
import firebaseApp from '../config/firebase'

const todoEpic = actionStream => Observable.merge(
  actionStream.ofType(todoConstants.GET)
    .switchMap(action =>
      Observable.fromPromise(firebaseApp.database().ref('todos').once('value'))
        .switchMap(results =>
          Observable.of({
            type: todoConstants.GET_COMPLETE,
            todos: results.toJSON()
          })
        )
    ),
  actionStream.ofType(todoConstants.ADD)
    .switchMap(action => {
      const newItem = { name: action.newValue }
      const newRef = firebaseApp.database().ref('todos').push()
      return Observable.fromPromise(newRef.set(newItem))
        .switchMap(results =>
          Observable.of({
            type: todoConstants.ADD_COMPLETE,
            value: { [newRef.key]: newItem }
          })
        )
    }),
  actionStream.ofType(todoConstants.UPDATE)
    .switchMap(action => {
      return Observable.fromPromise(firebaseApp.database().ref('todos/' + action.id).set(action.value))
        .switchMap(results =>
          Observable.of({
            type: todoConstants.UPDATE_COMPLETE,
            id: action.id
          })
        )
    }),
  actionStream.ofType(todoConstants.DELETE)
    .switchMap(action => {
      return Observable.fromPromise(firebaseApp.database().ref('todos/' + action.id).remove())
        .switchMap(results =>
          Observable.of({
            type: todoConstants.DELETE_COMPLETE,
            id: action.id
          })
        )
    })
)

export default todoEpic
