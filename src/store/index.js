import { combineReducers, createStore } from 'redux'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'
const reducer = combineReducers({
  authReducer,
  userReducer
})
const store = createStore(reducer)
export default store
