import * as api from '../utils/api'
import * as ACTIONS from './actionTypes'

// ACTIONS

/*
 * Fetch articles request action
 *
 * @return {Object}
 */
export function fetchArticlesRequest() {
	return {
		type: ACTIONS.FETCH_ARTICLES_REQUEST
	}
}

/*
 * Fetch articles success action
 *
 * @param {Object} articles
 * @return {Object}
 */
export function fetchArticlesSuccess(articles) {
	return {
		type: ACTIONS.FETCH_ARTICLES_SUCCESS,
		articles: articles.data,
		message: 'Fetched articles!',
	}
}

/*
 * Fetch articles failure action
 *
 * @param {Object} err
 * @return {Object}
 */
export function fetchArticlesFailure(err) {
	return {
		type: ACTIONS.FETCH_ARTICLES_FAILURE,
		message: 'Failed to fetch articles!',
	}
}

// ACTION CREATORS

/**
 * Handles add article request and dispatches
 * actions based on response.
 *
 * @param {Object} article
 * @return {function} addArticle
 */
export function handleAddArticle (article) {
	return (dispatch) => {
		dispatch({
			type: ACTIONS.FETCH_ADD_ARTICLE_REQUEST,
			article,
		})

		return api.addArticle (article)
			.then(
				res => {
					dispatch({
						type: ACTIONS.FETCH_ADD_ARTICLE_SUCCESS,
						article: res.article,
						message: 'Article successfully added!'
					})
				},
				err => {
					dispatch({
						type: ACTIONS.FETCH_ADD_ARTICLE_FAILURE,
						message: 'Could not add article!'
					})
				}
			)
	}
}

/**
 * Handles edit article request and dispatches
 * actions based on response.
 *
 * @param {Object} article
 * @return {function} editArticle
 */
export function handleEditArticle (article) {
  return (dispatch) => {

    dispatch({
      type: ACTIONS.FETCH_EDIT_ARTICLE_REQUEST,
      article,
    })
		return api.editArticle (article)
      .then(
        res => {
          dispatch({
            type: ACTIONS.FETCH_EDIT_ARTICLE_SUCCESS,
            article: res.article,
            message: 'Article edited!',
          })
        },
        error => {
          dispatch({
            type: ACTIONS.FETCH_EDIT_ARTICLE_FAILURE,
            message: 'Failed to edit article!',
          })
        }
			)
  }
}
