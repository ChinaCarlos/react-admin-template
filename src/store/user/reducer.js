import { SET_USER_NAME, GET_USER_NAME } from './types'
const userState = {
  userName: '',
  age: '',
  gender: '',
  email: '',
  role: ''
}

export default function userReducer(state = userState, action = {}) {
  switch (action.type) {
    case GET_USER_NAME:
      return {
        ...state,
        userName: 'getUserName'
      }
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload.name || ''
      }
    default:
      return state
  }
}
