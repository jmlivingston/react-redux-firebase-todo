import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import { todoConstants } from '../config/constants'
import store from '../config/store'

const App = () => <div className='App'>
  <TodoContainer />
  App
</div>

store.dispatch({ type: todoConstants.GET })

export default App
