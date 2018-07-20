import React, { Component } from 'react'
import { connect } from 'react-redux'

class TilePage extends Component {
	state = {
		smallView: true,
		flexDirection: 'row',
		autoPlay: 0,
		zIndex: 20,
	}
	changeVideoSize = () => {
		this.setState({
			smallView: false,
			flexDirection: 'column',
			autoPlay: 1,
			zIndex: -1,
		})
	}
	render () {
		const { tile } = this.props
		const { smallView, flexDirection, autoPlay, zIndex } = this.state
		if (!tile) {
			return null
		}
		const video = tile.videos[0]
		return (
			<main
				className='tp-main-container'
				style={{ flexDirection: flexDirection }}
			>
				<div className={smallView
						? 'iframe-container iframe-small'
						: 'iframe-container iframe-large'
				}>
					<iframe
						width='100%'
						height='100%'
						src={`${video.url}?autoplay=${autoPlay}`}
						frameBorder="0"
						allow="autoplay; encrypted-media">
					</iframe>
					<div
						className='i-frame-overlay'
						onClick={this.changeVideoSize}
						style={{ zIndex: zIndex }}>
					</div>
				</div>
				<header className='tp-header-container'>
					<h4 className='tp-header'>News Release</h4>
					<h1 className='tp-title'>{tile.title}</h1>
					<p className='tp-description'>{tile.description}</p>
				</header>
			</main>
		)
	}
}

function mapStateToProps ({ tiles }, { match }) {
	const { id } = match.params
	console.log(id)
	return {
		tile: tiles[id]
	}
}

export default connect(mapStateToProps)(TilePage)
