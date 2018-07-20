export const createUrlTitle = (title) => {
	const pTitle = title.toLowerCase()
	const titleArray = pTitle.split(' ')
	let url_title = ''
	for (let i = 0; i < titleArray.length - 1; i++) {
		url_title += `${titleArray[i]}-`
	}
	url_title += titleArray.pop()
	return url_title
}

export const insertIframe = (htmlString, videoUrl) => {
	const iframe = `<iframe
		width="336"
		height="189"
		src=${videoUrl}
		frameborder="0"
		allow="autoplay; encrypted-media"
		allowfullscreen></iframe>`
	const htmlArray = htmlString.split('<p>')
	let newHtmlString = ''
	htmlArray.map((item, index) => {
		if (index === 0) {
			return
		} else if (index === 2) {
			return newHtmlString += `${iframe}<p>${item}`
		} else {
			return newHtmlString += `<p>${item}`
		}
	})
	return newHtmlString
}
