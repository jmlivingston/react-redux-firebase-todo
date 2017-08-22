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
  getRecordSet: (action$, actionStart, isAsync) => {
    return action$
      .ofType(actionStart)
      .switchMap(action => {
        const postActions = action.postActions ? [...action.postActions] : []
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
          const newAction = {
            ...action,
            postActions: [
              {
                ...action,
                type: action.completeActionType,
                [action.recordSetKey]: results
              },
              ...postActions
            ]
          }
          return concatPostActions(newAction)
        })
      })
      .catch(error => Observable.of({ type: APP.LOG_ERROR, error: error }))
  },
  removeRecord: (action$, actionStart) => {
    return action$
      .ofType(actionStart)
      .switchMap(action => {
        return Observable.fromPromise(
          firebaseRef(action.recordSetKey + '/' + action.recordKey).remove()
        ).switchMap(() => concatPostActions(action))
      })
      .catch(error => Observable.of({ type: APP.LOG_ERROR, error: error }))
  },
  saveRecord: (action$, actionStart) => {
    return action$
      .ofType(actionStart)
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
