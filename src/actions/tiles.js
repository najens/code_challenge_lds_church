import * as api from '../utils/api'
import * as ACTIONS from './actionTypes'

// ACTIONS

/*
 * Fetch tiles request action
 *
 * @return {Object}
 */
export function fetchTilesRequest() {
	return {
		type: ACTIONS.FETCH_TILES_REQUEST
	}
}

/*
 * Fetch tiles success action
 *
 * @param {Object} res
 * @return {Object}
 */
export function fetchTilesSuccess(res) {
	const tiles = res.data
  const newTiles = {}
  if (typeof tiles !== 'undefined') {
    tiles.map((tile) => (
      newTiles[tile.id] = tile
    ))
  }
	return {
		type: ACTIONS.FETCH_TILES_SUCCESS,
		tiles: newTiles,
		message: 'Fetched tiles!',
	}
}

/*
 * Fetch tiles failure action
 *
 * @param {Object} err
 * @return {Object}
 */
export function fetchTilesFailure(err) {
	return {
		type: ACTIONS.FETCH_TILES_FAILURE,
		message: 'Failed to fetch tiles!',
	}
}

// ACTION CREATORS

/**
 * Handles add tile request and dispatches
 * actions based on response.
 *
 * @param {Object} tile
 * @return {function} addTile
 */
export function handleAddTile (tile) {
	return (dispatch) => {
		dispatch({
			type: ACTIONS.FETCH_ADD_TILE_REQUEST,
			tile,
		})

		return api.addTile (tile)
			.then(
				res => {
					dispatch({
						type: ACTIONS.FETCH_ADD_TILE_SUCCESS,
						tile: res.tile,
						message: 'Tile successfully added!'
					})
				},
				err => {
					dispatch({
						type: ACTIONS.FETCH_ADD_TILE_FAILURE,
						message: 'Could not add tile!'
					})
				}
			)
	}
}

/**
 * Handles edit tile request and dispatches
 * actions based on response.
 *
 * @param {Object} tile
 * @return {function} editTile
 */
export function handleEditTile (tile) {
  return (dispatch) => {

    dispatch({
      type: ACTIONS.FETCH_EDIT_TILE_REQUEST,
      tile,
    })
		return api.editTile (tile)
      .then(
        res => {
          dispatch({
            type: ACTIONS.FETCH_EDIT_TILE_SUCCESS,
            article: res.tile,
            message: 'Tile edited!',
          })
        },
        error => {
          dispatch({
            type: ACTIONS.FETCH_EDIT_TILE_FAILURE,
            message: 'Failed to edit tile!',
          })
        }
			)
  }
}
