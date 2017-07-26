import { combineEpics } from 'redux-observable'

import todoEpic from './TodoEpic'

const epics = combineEpics(todoEpic)

export default epics
