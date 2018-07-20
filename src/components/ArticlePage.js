import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertIframe } from '../utils/helpers'

class ArticlePage extends Component {
	state = {
		img: '',
		caption: '',
	}

	// Use static method to derive state from props
  static getDerivedStateFromProps(nextProps, prevState) {
		// If the props have changed, set new state
  	if(nextProps.article !== prevState.article) {
      const article = nextProps.article
			const imgObj = nextProps.article.images[0]
			const img = imgObj.url
			const caption = imgObj.title
      if (!article) {
        return null
      }
    	return {
				article,
				img,
				caption,
     	}
    }
   	// Otherwise do not update state
    return null;
  }

	changeImage = (url, caption) => {
		this.setState({
			img: url,
			caption: caption,
		})
	}
	render () {
		const { article } = this.props
		const { img, caption } = this.state
		if (!article) {
			return null
		}
		const video = article.videos[0]
		const htmlString = insertIframe(article.body, video.url)
		return (
			<main className='ap-main-container'>
				<header>
					<p>{article.subtitle}</p>
					<h1>{article.title}</h1>
				</header>
				<div className='ap-img-container'>
					<img className='ap-img' src={img} />
					<div className='ap-img-footer'>
						<div className='ap-caption-container'>
							<p className='ap-img-title'>{caption}</p>
							<p className='ap-video-caption'>{video.caption}</p>
						</div>
						<div className='ap-thumbnail-container'>
							{article.images.map((img, key) => (
								<img
									key={key}
									className='ap-thumbnail'
									src={img.url}
									onClick={() => this.changeImage(img.url, img.title)} />
							))}
						</div>
					</div>
				</div>
				<section
					className='article-body'
					dangerouslySetInnerHTML={{__html: htmlString }}>
				</section>
			</main>
		)
	}
}

function mapStateToProps ({ articles }, { match }) {
	const { id } = match.params
	return {
		article: articles[id]
	}
}

export default connect(mapStateToProps)(ArticlePage)
