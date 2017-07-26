import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/switchMap'
import uuidv4 from 'uuid/v4'

import { todoTypes } from '../types'
import firebaseApp from '../config/firebase'

const todoEpic = actionStream => Observable.merge(
  actionStream.ofType(todoTypes.GET)
    .switchMap(action =>
      Observable.fromPromise(firebaseApp.database().ref('todos').once('value'))
        .switchMap(results =>
          Observable.of({
            type: todoTypes.GET_COMPLETE,
            todos: results.toJSON()
          })
        )
    ),
  actionStream.ofType(todoTypes.ADD)
    .switchMap(action => {
      let newItem = { name: action.newValue }
      let id = uuidv4()
      return Observable.fromPromise(firebaseApp.database().ref('todos/' + id).set(newItem))
        .switchMap(results =>
          Observable.of({
            type: todoTypes.ADD_COMPLETE,
            value: { [id]: newItem }
          })
        )
    })
)

export default todoEpic
