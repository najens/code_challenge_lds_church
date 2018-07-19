import photo01 from '../images/photo01.jpg'
import photo02 from '../images/photo02.jpg'
import photo03 from '../images/photo03.jpg'
import photo04 from '../images/photo04.jpg'
import photo05 from '../images/photo05.jpg'
import photo06 from '../images/photo06.jpg'
import photo07 from '../images/photo07.jpg'
import photo08 from '../images/photo08.jpg'
import photo09 from '../images/photo09.jpg'
import photo10 from '../images/photo10.jpg'

let users = {
	data: [
		{
			id: "573lde1mrzpnj4eojyz5a",
			name: "Rico Gibson",
			admin: "true"
		},
		{
			id: "csxan43ymvu64qncrb6mjn",
			name: "Lilyan Kub",
			admin: "false"
		}
	]
}

let articles = {
	data: [
		{
    	id: "7dgokrh1qagjezjhf096",
      publish_date: "2018-19-05T23:25:47.642350Z",
      author: "Kaley Schiller",
			title: "Title 1",
			subtitle: "SubTitle 1",
			images: [
				{
					title: "Photo 1-1 Title",
					url: photo01,
				},
				{
					title: "Photo 1-2 Title",
					url: photo02,
				}
			],
			videos: [
				{
					title: "Video 1 Title",
					caption: "Video 1 Caption",
					url: "https://www.youtube.com/embed/u5npElXpEs8"
				}
			]
    },
		{
    	id: "mb1i5ddn2z9iehqaqyd76",
      publish_date: "2018-18-04T23:25:47.642388Z",
      author: "Fay Lemke",
			title: "Title 2",
			subtitle: "SubTitle 2",
			images: [
				{
					title: "Photo 2-1 Title",
					url: photo03,
				},
				{
					title: "Photo 2-2 Title",
					url: photo04,
				}
			],
			videos: [
				{
					title: "Video 2 Title",
					caption: "Video 2 Caption",
					url: "https://www.youtube.com/embed/5oaYYEuEID0"
				}
			]
    },
		{
    	id: "nc1opsdahybg50llunbio",
      publish_date: "2018-17-03T23:25:47.642545Z",
      author: "Alexzander Armstrong",
			title: "Title 3",
			subtitle: "SubTitle 3",
			images: [
				{
					title: "Photo 3-1 Title",
					url: photo05,
				},
				{
					title: "Photo 3-2 Title",
					url: photo06,
				}
			],
			videos: [
				{
					title: "Video 3 Title",
					caption: "Video 3 Caption",
					url: "https://www.youtube.com/embed/4TGcOmilUw0"
				}
			]
    },
		{
    	id: "041i4c9umfkrpvc9cq4dh4n",
      publish_date: "2018-16-02T23:25:47.642587Z",
      author: "Tatyana Olson",
			title: "Title 4",
			subtitle: "SubTitle 4",
			images: [
				{
					title: "Photo 4-1 Title",
					url: photo07,
				},
				{
					title: "Photo 4-2 Title",
					url: photo08,
				}
			],
			videos: [
				{
					title: "Video 4 Title",
					caption: "Video 4 Caption",
					url: "https://www.youtube.com/embed/KBCalbP60kk"
				}
			]
    },
		{
    	id: "9alls23mrd4891tbnyyv",
      publish_date: "2018-15-01T23:25:47.642664Z",
      author: "Brett Gutmann",
			title: "Title 5",
			subtitle: "SubTitle 5",
			images: [
				{
					title: "Photo 5 Title",
					url: photo09,
				},
				{
					title: "Photo 5 Title",
					url: photo10,
				}
			],
			videos: [
				{
					title: "Video 5 Title",
					caption: "Video 5 Caption",
					url: "https://www.youtube.com/embed/gZcnDIvLKks"
				}
			]
    }
	]
}

let tiles = {
	data: [
		{
			id: "vhopks2cf2qgdq0czhjbv",
			publish_date: "2018-19-31T23:25:47.642684Z",
			title: "News Article 1",
			description: "News description 1",
			videos: [
				{
					url: "https://www.youtube.com/embed/AAq67697Lhs"
				}
			]
		},
		{
			id: "jqtm8yalpynnzq80ue23jb",
			publish_date: "2018-18-30T23:25:47.642705Z",
			title: "News Article 2",
			description: "News description 2",
			videos: [
				{
					url: "https://www.youtube.com/embed/8CE7Srq7gXI"
				}
			]
		},
		{
			id: "4hk7yjvvl09zplypcantl",
			publish_date: "2018-17-29T23:25:47.642918Z",
			title: "News Article 3",
			description: "News description 3",
			videos: [
				{
					url: "https://www.youtube.com/embed/AdSpm574rUU"
				}
			]
		},
		{
			id: "fdpmacl597q4xnjowf0co",
			publish_date: "2018-16-28T23:25:47.643702Z",
			title: "News Article 4",
			description: "News description 4",
			videos: [
				{
					url: "https://www.youtube.com/embed/QTceLKXwHLY"
				}
			]
		}
	]
}

// Represent server logic that query's database and returns a response
export function _getArticles () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...articles}), 1000)
  })
}

export function _getTiles () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...tiles}), 1000)
  })
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _addArticle (article) {
	return new Promise((res, rej) => {
		const formattedArticle = formatArticle(article)

		setTimeout(() => {
			articles = {
				...articles,
				data: [
					...articles.data,
					formattedArticle
				]
			}

			res(formattedArticle)
		}, 1000)
	})
}

export function _addTile (tile) {
	return new Promise((res, rej) => {
		const formattedTile = formatTile(tile)

		setTimeout(() => {
			tiles = {
				...tiles,
				data: [
					...tiles.data,
					formattedTile
				]
			}

			res(formattedTile)
		}, 1000)
	})
}

export function _editArticle (article) {
	return new Promise((res, rej) => {
		articles = {
			...articles,
			data: [
				...articles.data,
				article
			]
		}
		const updatedArticle = articles.data.filter(i => i.id === article.id)[0]

	})
}

export function _editTile (tile) {
	return new Promise((res, rej) => {
		tiles = {
			...tiles,
			data: [
				...tiles.data,
				tile
			]
		}
		const updatedTile = tiles.data.filter(i => i.id === tile.id)[0]

	})
}

const formatArticle = (article) => {
	article.publish_date = new Date()
	article.id = generateID()
	return { article: article }
}

const formatTile = (tile) => {
	tile.publish_date = new Date()
	tile.id = generateID()
	return { tile: tile }
}

function generateID () {
	const randomString = Math.random().toString(36).substring(2, 15)
  return randomString + randomString
}
