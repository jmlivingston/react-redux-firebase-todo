const completeSuffix = '_COMPLETE'

export const APP = {
  LOG_ERROR: 'ERROR'
}

export const TODO_PREFIX = 'TODO_'

export const TODO = {
  CHANGE_RECORD: TODO_PREFIX+ 'CHANGE_RECORD',
  SAVE_RECORD: TODO_PREFIX+ 'SAVE_RECORD',
  SAVE_RECORD_COMPLETE: TODO_PREFIX+ 'SAVE_RECORD' + completeSuffix,
  GET_RECORDSET: TODO_PREFIX+ 'GET_RECORDSET',
  GET_RECORDSET_COMPLETE: TODO_PREFIX+ 'GET_RECORDSET' + completeSuffix,
  REMOVE_RECORD: TODO_PREFIX+ 'REMOVE_RECORD',
  REMOVE_RECORD_COMPLETE: TODO_PREFIX+ 'REMOVE_RECORD' + completeSuffix
}

export const FIREBASE = {
  API_KEY: 'AIzaSyAiRF2oRcUHNLAay0ZJr9iP_SXKfeascSE',
  AUTH_DOMAIN: 'dummy-data-81cc6.firebaseapp.com',
  DATABASE_URL: 'https://dummy-data-81cc6.firebaseio.com',
  PROJECT_ID: 'dummy-data-81cc6',
  STORAGE_BUCKET: 'dummy-data-81cc6.appspot.com',
  MESSAGING_SENDER_ID: '875278794067'
}
