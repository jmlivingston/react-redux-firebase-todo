import React from 'react'
import Todo from '../containers/Todo'
import { todoTypes } from '../types'
import store from '../config/store'

const App = () => <div className='App'>
  <Todo />
  App
</div>

store.dispatch({ type: todoTypes.GET })

setTimeout(() => {
  store.dispatch({ type: todoTypes.ADD })
}, 2000)

export default App
