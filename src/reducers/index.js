import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import todoEpic from './TodoEpic'
import todo from './TodoReducer'

export const reducers = combineReducers({ todo })
export const epics = combineEpics(todoEpic)
