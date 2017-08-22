import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/concat'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { APP } from '../config/constants'
import firebaseApp from '../config/firebase'

const concatActions = action => {
  const { postActions, ...noActions } = action
  return Observable.concat(
    postActions ? postActions.map(postAction => {
      return {
        ...action,
        noActions,
        ...postAction
      }
    }) : Observable.of({ type: APP.LOG_ERROR, error: 'Missing postActions for ' + action.type })
  )
}

const firebaseEpicHelper = {
  getRecordSet: (action$, actionStart, isAsync) => {
    return action$
      .ofType(actionStart)
      .switchMap(action => {
        if (action.isAsync) {
          return Observable.create(obs => {
            firebaseApp
              .database()
              .ref(action.recordSetKey)
              .on('value', snapshot => {
                obs.next(snapshot.val())
              })
          }).map(results => {
            return {
              ...action,
              type: action.completeActionType,
              [action.recordSetKey]: results
            }
          })
        } else {
          return Observable.fromPromise(
            firebaseApp.database().ref(action.recordSetKey).once('value')
          ).map(results => {
            return {
              ...action,
              type: action.completeActionType,
              [action.recordSetKey]: results.toJSON()
            }
          })
        }
      })
      .catch(error => {
        return Observable.of({ type: APP.LOG_ERROR, error: error })
      })
  },
  log: (action$, prefix) => {
    return action$.ofType(APP.LOG_ERROR).switchMap(action => {
      console.error(prefix + ' Error: ' + action.error)
      return Observable.empty()
    })
  },
  removeRecord: (action$, actionStart) => {
    return action$
      .ofType(actionStart)
      .switchMap(action => {
        return Observable.fromPromise(
          firebaseApp
            .database()
            .ref(action.recordSetKey + '/' + action.recordKey)
            .remove()
        ).switchMap(() => {
          return concatActions(action)
        })
      })
      .catch(error => {
        return Observable.of({ type: APP.LOG_ERROR, error: error })
      })
  },
  setRecord: (action$, actionStart) => {
    return action$
      .ofType(actionStart)
      .switchMap((action) => {
        return Observable.fromPromise(
          firebaseApp
            .database()
            .ref(action.recordSetKey + '/' + action.recordKey)
            .set(action.recordKeyValue)
        ).switchMap(() => {
          return concatActions(action)
        })
      })
      .catch(error => {
        return Observable.of({ type: APP.LOG_ERROR, error: error })
      })
  }
}

export default firebaseEpicHelper
