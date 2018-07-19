import * as api from '../utils/api'
import { fetchUsersRequest, fetchUsersSuccess,
  fetchUsersFailure
} from './users'
import { fetchArticlesRequest, fetchArticlesSuccess,
  fetchArticlesFailure
} from './articles'
import { fetchTilesRequest, fetchTilesSuccess,
	fetchTilesFailure
} from './tiles'
import { setAuthedUser } from './authedUser'

const user = {}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    dispatch(fetchArticlesRequest())
		dispatch(fetchTilesRequest())
    return api.getInitialData().then(
      ({ users, articles, tiles }) => {
        dispatch(fetchUsersSuccess(users))
        dispatch(fetchArticlesSuccess(articles))
				dispatch(fetchTilesSuccess(tiles))
      },
      err => {
        dispatch(fetchUsersFailure(err))
        dispatch(fetchArticlesFailure(err))
				dispatch(fetchTilesFailure(err))
      }
    ).then(() => {
      dispatch(setAuthedUser(user))
    })
  }
}
