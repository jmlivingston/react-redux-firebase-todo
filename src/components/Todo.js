import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Todo extends Component {
  state = { editMode: false }

  styles = {
    hiddenInEditMode: () => ({
      display: `${this.state.editMode ? 'none' : 'inline-block'}`
    }),
    visibleInEditMode: () => ({
      display: `${this.state.editMode ? 'inline-block' : 'none'}`
    })
  }

  static propTypes = {
    todo: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    itemKey: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  }

  toggleVisibility = () => {
    this.originalTodo = { ...this.props.todo }
    this.setState(prevState => {
      return { editMode: !prevState.editMode }
    })
  }

  cancel = () => {
    this.props.update(this.props.itemKey, {
      ...this.originalTodo
    })
    this.toggleVisibility()
  }

  inputChange = e => {
    this.props.update(this.props.itemKey, {
      ...this.props.todo,
      title: e.target.value
    })
  }

  completeChange = () => {
    const updatedTodo = {
      ...this.props.todo,
      isComplete: this.props.todo.isComplete ? false : true
    }
    this.props.update(this.props.itemKey, {
      ...this.props.todo,
      isComplete: this.props.todo.isComplete ? false : true
    })
    this.props.set(this.props.itemKey, updatedTodo)
  }

  update = () => {
    this.toggleVisibility()
    this.props.set(this.props.itemKey, this.props.todo)
  }

  remove = () => {
    this.props.remove(this.props.itemKey)
  }

  render() {
    return (
      <form className="mb-3">
        <div className="row">
          <div className="col-sm-3">
            <span
              onClick={this.completeChange}
              style={{
                ...this.styles.hiddenInEditMode(),
                textDecoration: this.props.todo.isComplete
                  ? 'line-through'
                  : 'none'
              }}
            >
              {this.props.todo.title}&nbsp;&nbsp;
            </span>
            <input
              value={this.props.todo.title}
              onChange={this.inputChange}
              style={this.styles.visibleInEditMode()}
              className="form-control form-control-sm mr-1"
            />
          </div>
          <div className="col-sm-9 pull-left">
            <button
              onClick={this.update}
              style={this.styles.hiddenInEditMode()}
              className="btn btn-secondary btn-sm mr-1"
              type="button"
            >
              Edit
            </button>
            <button
              onClick={this.update}
              style={this.styles.visibleInEditMode()}
              className="btn btn-success btn-sm mr-1"
              type="button"
            >
              Save
            </button>
            <button
              onClick={this.cancel}
              style={this.styles.visibleInEditMode()}
              className="btn btn-secondary btn-sm mr-1"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={this.remove}
              style={this.styles.hiddenInEditMode()}
              className="btn btn-danger btn-sm"
              type="button"
            >
              Remove
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Todo
