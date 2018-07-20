import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Article from './Article'
import Tile from './Tile'

export class Dashboard extends Component {
	render () {
		const { articleIds, tileIds } = this.props
		return (
			<main className='container'>
				<section>
					<header>
						<h3>Articles</h3>
					</header>
					<div className='article-list'>
						{articleIds.map((id) => (
							<Article key={id} id={id} />
						))}
					</div>
				</section>
				<section>
					<header>
						<h3>Tiles</h3>
					</header>
					<div className='tile-list'>
						{tileIds.map((id) => (
							<Tile key={id} id={id} />
						))}
					</div>
				</section>
			</main>
		)
	}
}

function mapStateToProps ({ articles, tiles }) {
	return {
		articleIds: Object.keys(articles).slice(0, 3),
		tileIds: Object.keys(tiles),
	}
}

export default connect(mapStateToProps)(Dashboard)
