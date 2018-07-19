import * as ACTIONS from '../actions/actionTypes'

/**
 * Updates articles state in store each
 * time an action in switch case is called
 *
 * @param {Object} state - articles
 * @param {Object} action
 * @return {Object} state - new articles
 */
export default function articles (state = {}, action) {
  switch(action.type) {
    case ACTIONS.FETCH_ARTICLES_SUCCESS :
      return {
        ...state,
        ...action.articles
      }
    case ACTIONS.FETCH_ADD_ARTICLE_SUCCESS :
    case ACTIONS.FETCH_EDIT_ARTICLE_SUCCESS :
      return {
        ...state,
        [action.article.id]: action.article,
      }
    default :
      return state
  }
}
