import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/concat'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { APP } from '../config/constants'
import { firebaseRef } from '../config/firebase'

const concatPostActions = action => {
  const { postActions, ...noActions } = action
  return Observable.concat(
    postActions.map(postAction => ({
      ...action,
      noActions,
      ...postAction
    }))
  )
}

const firebaseEpicHelper = {
  getRecordSet: (action$, actionType, isAsync) => {
    return action$
      .ofType(actionType)
      .switchMap(action => {
        let observable = null
        if (action.isAsync) {
          observable = Observable.create(observer => {
            firebaseRef(action.recordSetKey).on('value', snapshot => {
              observer.next(snapshot.val())
            })
          })
        } else {
          observable = Observable.fromPromise(
            firebaseRef(action.recordSetKey).once('value')
          ).map(results => results.toJSON())
        }
        return observable.switchMap(results => {
          action.recordSetKeyValue = results
          return concatPostActions(action)
        })
      })
      .catch(error => Observable.of({ type: APP.LOG_ERROR, error: error }))
  },
  removeRecord: (action$, actionType) => {
    return action$
      .ofType(actionType)
      .switchMap(action => {
        return Observable.fromPromise(
          firebaseRef(action.recordSetKey + '/' + action.recordKey).remove()
        ).switchMap(() => concatPostActions(action))
      })
      .catch(error => Observable.of({ type: APP.LOG_ERROR, error: error }))
  },
  saveRecord: (action$, actionType) => {
    return action$
      .ofType(actionType)
      .switchMap(action => {
        return Observable.fromPromise(
          firebaseRef(action.recordSetKey + '/' + action.recordKey).set(
            action.recordKeyValue
          )
        ).switchMap(() => concatPostActions(action))
      })
      .catch(error => Observable.of({ type: APP.LOG_ERROR, error: error }))
  }
}

export default firebaseEpicHelper
