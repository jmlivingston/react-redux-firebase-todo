import React from 'react'

const TodoList = ({ todos = [], newValue = '', onAdd, onChange }) => {
  const inputChange = e => {
    onChange(e.target.value)
  }
  const submit = e => {
    e.preventDefault()
    onAdd(newValue)
  }
  return <div>
    <ul>
      {
        Object.keys(todos).map((key, id) => (
          <li key={id}>
            {todos[key].name}
          </li>))
      }
    </ul>
    <form onSubmit={submit}>
      <input type='textbox' value={newValue} onChange={inputChange} />
      <button type='submit'>Add</button>
    </form>
  </div>
}

export default TodoList
