import { todoConstants } from '../config/constants'

export const todoAdd = value => {
  return {
    type: todoConstants.ADD,
    value
  }
}

export const todoChange = (id, value) => ({
  type: todoConstants.CHANGE,
  id,
  value
})

export const todoNewChange = value => ({
  type: todoConstants.NEW_CHANGE,
  value
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
