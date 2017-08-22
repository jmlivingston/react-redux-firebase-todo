import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import { todo, todoEpic } from './todo'

export const reducers = combineReducers({ todo })
export const epics = combineEpics(todoEpic)
