import { GET_USER_AUTH, SET_USER_AUTH } from './types'
// action creator
export function getUserAuth(payload) {
  return {
    type: GET_USER_AUTH,
    payload
  }
}

export function setUserAuth(payload) {
  return {
    type: SET_USER_AUTH,
    payload
  }
}
