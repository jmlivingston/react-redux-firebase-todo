import React from 'react'

const TodoAdd = ({ newValue, onAdd, onNewChange }) => {
  const change = e => {
    onNewChange(e.target.value)
  }
  const submit = e => {
    e.preventDefault()
    onAdd({ name: newValue })
  }
  return <div>
    <form onSubmit={submit}>
      <input type='textbox' value={newValue} onChange={change} />
      <button type='submit'>Add</button>
    </form>
  </div>
}

export default TodoAdd
