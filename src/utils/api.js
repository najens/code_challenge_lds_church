import {
  _getUsers,
  _getArticles,
  _getTiles,
  _addArticle,
  _addTile,
  _editArticle,
  _editTile,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getArticles(),
    _getTiles(),
  ]).then(([users, articles, tiles]) => ({
    users,
    articles,
    tiles,
  }))
}

export function addArticle (article) {
  return _addArticle(article)
}

export function addTile (tile) {
  return _addTile(tile)
}

export function editArticle (article) {
  return _editArticle(article)
}

export function editTile (tile) {
  return _editTile(tile)
}
