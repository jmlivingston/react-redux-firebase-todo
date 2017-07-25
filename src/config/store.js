import { compose, createStore } from 'redux'

import reducers from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancer()
const store = createStore(reducers, enhancer)

export default store
