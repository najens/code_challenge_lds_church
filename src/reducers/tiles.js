import * as ACTIONS from '../actions/actionTypes'

/**
 * Updates tiles state in store each
 * time an action in switch case is called
 *
 * @param {Object} state - tiles
 * @param {Object} action
 * @return {Object} state - new tiles
 */
export default function tiles (state = {}, action) {
  switch(action.type) {
    case ACTIONS.FETCH_TILES_SUCCESS :
      return {
        ...state,
        ...action.tiles
      }
    case ACTIONS.FETCH_ADD_TILE_SUCCESS :
    case ACTIONS.FETCH_EDIT_TILE_SUCCESS :
      return {
        ...state,
        [action.tile.id]: action.tile,
      }
    default :
      return state
  }
}
