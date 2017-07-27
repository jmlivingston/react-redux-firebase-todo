import { todoConstants } from '../config/constants'

export const todoAdd = newValue => {
  return {
    type: todoConstants.ADD,
    newValue
  }
}

export const todoChange = (id, value) => ({
  type: todoConstants.CHANGE,
  id,
  value
})

export const todoNewChange = newValue => ({
  type: todoConstants.NEW_CHANGE,
  newValue
})

export const todoDelete = id => ({
  type: todoConstants.DELETE,
  id
})

export const todoUpdate = (id, value) => ({
  type: todoConstants.UPDATE,
  id,
  value
})
