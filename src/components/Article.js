import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUrlTitle } from '../utils/helpers'

const Article = (props) => {
	const { article } = props
	const url_title = createUrlTitle(article.title)
	const path = `/code_challenge_lds_church/article/${article.id}/${url_title}`
	return (
		<Link className='article-container' to={path} id={article.id}>
			<img className='article-img' src={article.images[0].url}/>
			<header className='article-header'>
				{article.title}
			</header>
		</Link>
	)
}

function mapStateToProps({ articles }, { id }) {
	const article = articles[id]
	return {
		article,
	}
}

export default connect(mapStateToProps)(Article)
