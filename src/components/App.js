import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'
import ArticlePage from './ArticlePage'
import ArticleForm from './ArticleForm'
import TilePage from './TilePage'
import TileForm from './TileForm'
import NotFound from './NotFound'

export class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
            {this.props.loading === true
              ? null
              : <Switch>
                  <Route
                    path='/code_challenge_lds_church/' exact
                    component={Dashboard}
                  />
                  <Route
                    path='/code_challenge_lds_church/article/:id/:title'
                    component={ArticlePage}
                  />
                  <Route
                    path='/code_challenge_lds_church/article/add'
                    component={ArticleForm}
                  />
                  <Route
                    path='/code_challenge_lds_church/article/:id/edit'
                    component={ArticleForm}
                  />
                  <Route
                    path='/code_challenge_lds_church/tile/:id/:title'
                    component={TilePage}
                  />
                  <Route
                    path='/code_challenge_lds_church/tile/add'
                    component={TileForm}
                  />
                  <Route
                    path='/code_challenge_lds_church/tile/:id/edit'
                    component={TileForm}
                  />
                  <Route path='*' component={NotFound} />
                </Switch>
            }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App)
