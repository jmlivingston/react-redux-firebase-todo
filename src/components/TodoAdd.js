import PropTypes from 'prop-types'
import React from 'react'

const TodoAdd = ({ newTodo, set, setNew }) => {
  const change = e => {
    setNew(e.target.value)
  }
  const submit = e => {
    e.preventDefault()
    set(null, newTodo)
  }
  return (
    <div>
      <form onSubmit={submit} className="row">
        <div className="col-sm-3">
          <input
            type="textbox"
            value={newTodo.title}
            onChange={change}
            className="form-control form-control-sm mr-1"
            placeholder="Add Todo..."
          />
        </div>
        <div className="col-sm-9 pull-left">
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

TodoAdd.propTypes = {
  newTodo: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
  setNew: PropTypes.func.isRequired
}

export default TodoAdd
