// ​‌‌‍Модуль 6. Заняття 11. ​‌‍‌𝗗𝗢𝗠⁡⁡​

// https://codesandbox.io/s/tribute-page-8rw5u?file=/style.css:0-2537

// getElementById
// getElementsByClassName
// getElementByTagName
// querySelector
// querySelectorAll

// const main = document.getElementById('main')
// const main = document.getElementsByTagName('main')

// const main = document.querySelector('#main')
// console.log('main :>> ', main)

// const article = document.querySelector('article')
// console.log('article :>> ', article)

// const div = article.querySelector('div')

// const ul = article.querySelector('ul')
// console.log('ul :>> ', ul)

// textContent
// innerHTML
// children
// style

// createElement
// append & prepend

// insertAdjacent
// const body = document.querySelector('body')

// const div = document.createElement('div')
// div.textContent = 'Test Div'
// div.id = '#testId'
// // div.classList = 'testClass'
// div.classList.add('testClass2')
// // div.classList.remove('testClass')
// div.classList.toggle('testClass')

// body.prepend(div)

// // classList(add, remove, toggle)

// // div.setAttribute('test-atr', '123')

// // hasAttribute
// // getAttribute
// // removeAttribute
// // setAttribute

// div.dataset.test = 'test' //data-test

// const photos = [
// 	'https://upload.wikimedia.org/wikipedia/commons/7/7a/Michel_Legrand_Cabourg_2015.jpg',
// 	'https://m.media-amazon.com/images/M/MV5BMTYxODkyODEzNl5BMl5BanBnXkFtZTcwMTY0MTY1OQ@@._V1_.jpg',
// 	'https://downbeat.com/images/news/_full/MichelWEB.jpg',
// 	'https://www.emmys.com/sites/default/files/bios/Michel-Legrand-450x600.jpg',
// ]

const randomPhoto = (photos) => {
	const index = Math.round(Math.random() * (photos.length - 1))
	return photos[index]
}

const main = document.getElementById('main')

const title = document.createElement('h1')
title.id = 'title'
title.textContent = '- Michel Legrand -'

main.append(title)

const imgDiv = document.createElement('figure')
imgDiv.id = 'img-div'

const img = document.createElement('img')
img.id = 'image'
img.src = randomPhoto(photos)
img.alt = 'Michel Legrand conducting his orchestra.'

const imgCaption = document.createElement('figcaption')
imgCaption.id = 'img-caption'
imgCaption.textContent = 'Michel Legrand conducting his orcherstra.'

imgDiv.append(img, imgCaption)
main.append(imgDiv)

const facts = [
	'He was born in Paris, France on February 24<sup>th</sup>, 1932.',
	'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career, he composed more than two hundred film and television scores.',
	'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
	'He was born in Paris, France on February 24<sup>th</sup>, 1932.',
	'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career, he composed more than two hundred film and television scores.',
	'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
]

// const liArr = facts
// 	.map((fact) => {
// 		return `<li>${fact}</li>`
// 	})
// 	.join('')

const factsStr = facts.reduce((acc, fact) => {
	return acc + `<li>${fact}</li>`
}, '')

main.insertAdjacentHTML(
	'beforeend',
	`
	<article id="tribute-info">
				<div id="intro">
					<p>
						&bull; Michel Legrand (1932 - 2019) was a famous French
						musician. &bull;
					</p>
				</div>
				<p><u>Here are some major facts about him:</u></p>
				<ul>
					${factsStr}
				</ul>

				<blockquote id="quote">
					<p>
						Writing is a mental thing, while playing is essentially
						a physical feeling.
					</p>
					<cite>-- Michel Legrand</cite>
				</blockquote>
				<hr />
				<p>
					To find out more about him, feel free to have a look at his
					biography on
					<a
						id="tribute-link"
						href="https://en.wikipedia.org/wiki/Michel_Legrand"
						target="_blank"
						>Wikipedia</a
					>.
				</p>
			</article>
`
)
