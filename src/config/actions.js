import { todoConstants } from '../config/constants'

export const todoAdd = value => {
  return {
    type: todoConstants.ADD,
    value
  }
}

export const todoChange = (key, value) => ({
  type: todoConstants.CHANGE,
  key,
  value
})

export const todoNewChange = value => ({
  type: todoConstants.NEW_CHANGE,
  value
})

export const todoDelete = key => ({
  type: todoConstants.DELETE,
  key
})

export const todoUpdate = (key, value) => ({
  type: todoConstants.UPDATE,
  key,
  value
})
