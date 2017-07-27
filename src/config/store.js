import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { epics, reducers } from '../reducers'

const epicMiddleware = createEpicMiddleware(epics)
const storeEnhancer = applyMiddleware(epicMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(storeEnhancer)
const store = createStore(reducers, enhancer)

export default store
