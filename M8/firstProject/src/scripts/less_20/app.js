import { getNews } from './fetch'

const countries = ['us', 'ua', 'pl']

const main = document.querySelector('.main')
const list = main.querySelector('ul')

const btnGet = document.createElement('button')
btnGet.textContent = 'Get news'
main.prepend(btnGet)

btnGet.addEventListener('click', () => {
	getNews(1, select.value)
})

const select = document.createElement('select')

const options = countries.reduce(
	(acc, el) => acc + `<option value=${el}>${el}</option>`,
	''
)

select.insertAdjacentHTML('afterbegin', options)
main.prepend(select)

const createElLi = ({ author, content, description, urlToImage, url }) => `
    <li>
        <p>${author || 'Anonymous'}</p>
        <img src=${urlToImage} width='300'>
        <a href=${url}>Go to current news</a>
        ${content ? `<p>${content}</p>` : ''}
        <p>${description}</p>
    </li>
`

export function createNewsList(array) {
	list.innerHTML = ''
	list.insertAdjacentHTML(
		'afterbegin',
		array.reduce((acc, element) => acc + createElLi(element), '')
	)
}
