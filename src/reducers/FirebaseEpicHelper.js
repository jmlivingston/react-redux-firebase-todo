import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/switchMap'

import firebaseApp from '../config/firebase'

const firebaseEpicHelper = {
  get: (action$, actionStart, actionComplete, refName) => (
    action$.ofType(actionStart)
      .switchMap(action =>
        Observable.fromPromise(firebaseApp.database().ref(refName).once('value'))
          .switchMap(results =>
            Observable.of({
              type: actionComplete,
              [refName]: results.toJSON()
            })
          )
      )
  ),
  add: (action$, actionStart, actionComplete, refName) => (
    action$.ofType(actionStart)
      .switchMap(action => {
        const newRef = firebaseApp.database().ref(refName).push()
        return Observable.fromPromise(newRef.set(action.value))
          .switchMap(results =>
            Observable.of({
              type: actionComplete,
              value: { [newRef.key]: action.value }
            })
          )
      })
  ),
  update: (action$, actionStart, actionComplete, refName) => (
    action$.ofType(actionStart)
      .switchMap(action => {
        return Observable.fromPromise(firebaseApp.database().ref(refName + '/' + action.key).set(action.value))
          .switchMap(results =>
            Observable.of({
              type: actionComplete,
              key: action.key
            })
          )
      })
  ),
  remove: (action$, actionStart, actionComplete, refName) => (
    action$.ofType(actionStart)
      .switchMap(action => {
        return Observable.fromPromise(firebaseApp.database().ref(refName + '/' + action.key).remove())
          .switchMap(results =>
            Observable.of({
              type: actionComplete,
              key: action.key
            })
          )
      })
  )
}

export default firebaseEpicHelper
