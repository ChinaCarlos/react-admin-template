import { SET_USER_AUTH, GET_USER_AUTH } from './types'
const authState = {
  role: 'admin'
}

function authReducer(state = authState, action = {}) {
  switch (action.type) {
    case GET_USER_AUTH:
      return {
        ...state,
        role: 'getUserAuth'
      }
    case SET_USER_AUTH:
      return {
        ...state,
        role: action.payload.auth || ''
      }
    default:
      return state
  }
}

export default authReducer
