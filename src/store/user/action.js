import { GET_USER_NAME, SET_USER_NAME } from './types'
// action creator
export function getUserName(payload) {
  return {
    type: GET_USER_NAME,
    payload
  }
}

export function setUserName(payload) {
  return {
    type: SET_USER_NAME,
    payload
  }
}
