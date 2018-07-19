import * as ACTIONS from '../actions/actionTypes'

/**
 * Updates users state in store each
 * time an action in switch case is called
 *
 * @param {Object} state - users
 * @param {Object} action
 * @return {Object} state - new users
 */
export default function users (state = {}, action) {
  switch(action.type) {
    case ACTIONS.FETCH_USERS_SUCCESS :
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}
