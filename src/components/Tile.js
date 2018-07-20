import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUrlTitle } from '../utils/helpers'

const Tile = (props) => {
	const { tile } = props
	const url_title = createUrlTitle(tile.title)
	const path = `tile/${tile.id}/${url_title}`
	const videoImg = tile.videos[0].img
	return (
		<Link className='tile-container' to={path} id={tile.id}>
			<header className='tile-header'>
				<img className='tile-img' src={videoImg} />
				<div className='tile-title'>{tile.title}</div>
			</header>
		</Link>
	)
}

function mapStateToProps({ tiles }, { id }) {
	const tile = tiles[id]
	return {
		tile,
	}
}

export default connect(mapStateToProps)(Tile)
