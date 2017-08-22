import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/switchMap'

import { APP } from '../config/constants'

const logEpicHelper = {
  log: (action$, prefix) => {
    return action$.ofType(APP.LOG_ERROR).switchMap(action => {
      console.error(prefix + ' Error: ' + action.error)
      return Observable.empty()
    })
  }
}

export default logEpicHelper
