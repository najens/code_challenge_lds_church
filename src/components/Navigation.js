import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/lib/fa'

// Component that renders Navbar
export class Navigation extends Component {
	state = {
		query: '',
	}
	onHandleQueryChange = (query) => {
		this.setState({
			query: query.trim()
		})
	}
  /*
   * Handles Logout Click Event
   * and dispatches removeAuthedUser action
   */
  handleLogout = () => {
		const { authedUser, removeAuthedUser } = this.props
    removeAuthedUser(authedUser)
  }
	render() {
		const { query } = this.state
		return (
			<section className='nav-container'>
				<span className='d-flex align-items-center'>
					<Link
						to='/code_challenge_lds_church/'
						exact='true'
						className='nav-header'
					>
						<FaHome className='home' />
					</Link>
				</span>
				<div className='search'>
					<FaSearch className='search-icon' />
					<input
						className='input'
						type='text'
						value={query}
						onChange={(event) => (
							this.onHandleQueryChange(event.target.value)
						)}
					/>
				</div>
				<span>
					<Link
						to='/code_challenge_lds_church/login'
						exact='true'
						className='nav-link'
					>
						Login
					</Link>
				</span>
			</section>
		)
	}
}


/*
 * Uses redux store and creates props
 * that are passed into component
 *
 * @param {Array} users
 * @param {string} authedUser
 * @return {Object} props
 *    user {Object} - Current user
 *    authedUser {string} - Current user id
 */
function mapStateToProps ({ authedUser, users }) {
  const user = users[authedUser]
  return {
    authedUser,
    user: user ? user : null
  }
}

export default connect(
  mapStateToProps,
  { removeAuthedUser }
)(Navigation)
