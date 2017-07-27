import React from 'react'

const TodoAdd = ({ value, onAdd, onNewChange }) => {
  const change = e => {
    onNewChange(e.target.value)
  }
  const submit = e => {
    e.preventDefault()
    onAdd({ name: value })
  }
  return <div>
    <form onSubmit={submit}>
      <input type='textbox' value={value} onChange={change} />
      <button type='submit'>Add</button>
    </form>
  </div>
}

export default TodoAdd
