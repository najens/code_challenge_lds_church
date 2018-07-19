import * as ACTIONS from '../actions/actionTypes'

/**
 * Updates authedUser state in store each
 * time an action in switch case is called
 *
 * @param {Object} state - authedUser
 * @param {Object} action
 * @return {Object} state - new authedUser
 */
export default function authedUser (state = null, action) {
  switch(action.type) {
    case ACTIONS.SET_AUTHED_USER :
      return action.user
    case ACTIONS.REMOVE_AUTHED_USER :
      return {}
    default :
      return state
  }
}
