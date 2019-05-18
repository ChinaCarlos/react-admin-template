import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'
const reducer = combineReducers({
  authReducer,
  userReducer
})
const store = createStore(reducer, applyMiddleware(thunk))
export default store
