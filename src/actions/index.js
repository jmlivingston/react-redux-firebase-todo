import { todoTypes } from '../types'

export const todoAdd = newValue => {
  return {
    type: todoTypes.ADD,
    newValue
  }
}

export const todoChange = newValue => ({
  type: todoTypes.CHANGE,
  newValue
})
