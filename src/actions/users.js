import * as api from '../utils/api'
import * as ACTIONS from './actionTypes'

// ACTIONS

/*
 * Fetch users request action
 *
 * @return {Object}
 */
export function fetchUsersRequest() {
	return {
		type: ACTIONS.FETCH_USERS_REQUEST
	}
}

/*
 * Fetch users success action
 *
 * @param {Object} res
 * @return {Object}
 */
export function fetchUsersSuccess(res) {
	const users = res.data
  const newUsers = {}
  if (typeof users !== 'undefined') {
    users.map((user) => (
      newUsers[user.id] = user
    ))
  }
	return {
		type: ACTIONS.FETCH_USERS_SUCCESS,
		users: newUsers,
		message: 'Fetched users!',
	}
}

/*
 * Fetch users failure action
 *
 * @param {Object} err
 * @return {Object}
 */
export function fetchUsersFailure(err) {
	return {
		type: ACTIONS.FETCH_USERS_FAILURE,
		message: 'Failed to fetch users!',
	}
}
