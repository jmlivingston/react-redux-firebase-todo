import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'

import todo from './TodoReducer'

const reducers = combineReducers({ todo, firebase: firebaseStateReducer })

export default reducers
