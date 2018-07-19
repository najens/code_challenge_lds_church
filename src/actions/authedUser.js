import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from './actionTypes'

// ACTIONS

/*
 * Set Authed User action
 *
 * @param {string} user
 * @return {Object}
 */
export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  }
}


/*
 * Remove Authed User action
 *
 * @param {string} id
 * @return {Object}
 */
export function removeAuthedUser(id) {
  return {
    type: REMOVE_AUTHED_USER,
    id,
  }
}
