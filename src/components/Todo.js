import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Todo extends Component {
  static propTypes = {
    value: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    itemKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  state = { editMode: false }
  styles = {
    hiddenInEditMode: () => ({ display: `${this.state.editMode ? 'none' : 'inline-block'}` }),
    visibleInEditMode: () => ({ display: `${this.state.editMode ? 'inline-block' : 'none'}` })
  }

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

  inputChange = e => {
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
      <div onClick={this.toggleVisibility} style={this.styles.hiddenInEditMode()}>
        {this.props.value.name}&nbsp;&nbsp;
      </div>
      <input value={this.props.value.name} onChange={this.inputChange} style={this.styles.visibleInEditMode()} />
      <button onClick={this.update} style={this.styles.visibleInEditMode()}>
        Update
      </button>
      <button onClick={this.cancel} style={this.styles.visibleInEditMode()}>
        Cancel
      </button>
      <button onClick={this.delete} style={this.styles.hiddenInEditMode()}>
        Delete
      </button>
    </div>
  }
}

export default Todo
