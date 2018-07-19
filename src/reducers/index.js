import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import articles from './articles'
import tiles from './tiles'

// Combine all reducers that
// will be passed to the store
export default combineReducers({
  authedUser,
  users,
	articles,
	tiles,
})
