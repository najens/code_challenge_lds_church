import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='not-found-container'>
			<h3 className='text-red'>404 Not Found</h3>
			<Link to='/' className='text-center'>
				<p>Home</p>
			</Link>
		</div>
	)
}

export default NotFound
