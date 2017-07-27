import React, { Component } from 'react'

class Todo extends Component {
  state = { editMode: false }

  toggleVisibility = () => {
    this.originalValue = !this.state.editMode ? this.props.value.name : ''
    this.setState((prevState) => {
      return { editMode: !prevState.editMode }
    })
  }

  cancel = () => {
    this.props.onChange(this.props.itemKey, { ...this.props.value, ...{ name: this.originalValue } })
    this.toggleVisibility()
  }

  change = e => {
    this.props.onChange(this.props.itemKey, { ...this.props.value, ...{ name: e.target.value } })
  }

  update = () => {
    this.toggleVisibility()
    this.props.onUpdate(this.props.itemKey, this.props.value)
  }

  delete = e => {
    this.toggleVisibility()
    this.props.onDelete(this.props.itemKey)
  }

  render () {
    return <div>
      <div style={{ display: `${this.state.editMode ? 'none' : 'inline-block'}` }} onClick={this.toggleVisibility}>
        {this.props.value.name}&nbsp;&nbsp;
      </div>
      <input style={{ display: `${this.state.editMode ? 'inline-block' : 'none'}` }}
        type='textbox' value={this.props.value.name}
        onChange={this.change} />
      <button onClick={this.update} style={{ display: `${this.state.editMode ? 'inline-block' : 'none'}` }}>
        Update
      </button>
      <button onClick={this.cancel} style={{ display: `${this.state.editMode ? 'inline-block' : 'none'}` }}>
        Cancel
      </button>
      <button onClick={this.delete} style={{ display: `${this.state.editMode ? 'none' : 'inline-block'}` }}>
        Delete
      </button>
    </div>
  }
}

export default Todo
