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
 * @param {Object} users
 * @return {Object}
 */
export function fetchUsersSuccess(users) {
	return {
		type: ACTIONS.FETCH_USERS_SUCCESS,
		users: users.data,
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
