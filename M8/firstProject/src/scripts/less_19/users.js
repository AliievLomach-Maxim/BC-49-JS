// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const main = document.querySelector('.main')
const list = main.querySelector('ul')

const getUsers = () => {
	return fetch(`${BASE_URL}/users`).then((response) => response.json())
}

const getPostsByUser = (id) => {
	return fetch(`${BASE_URL}/posts?userId=${id}`).then((response) =>
		response.json()
	)
}

const getUsersBtn = document.createElement('button')
getUsersBtn.textContent = 'Get all users'
main.prepend(getUsersBtn)

getUsersBtn.addEventListener('click', handleClick)

function handleClick() {
	getUsers().then((users) => createUserList(users))
}

function createUserInfo({ name, email, phone, id }) {
	return `
    <li key=${id}>
    <h3>${name}</h3>
    <p>${email}</p>
    <p>${phone}</p>
    <button class='get-posts'>get posts</button>
    </li>
    `
}

function addUsersToList(param) {
	list.insertAdjacentHTML('beforeend', param)
}

function createUserList(users) {
	const template = users.map((user) => createUserInfo(user)).join('')
	addUsersToList(template)

	const getPostsBtn = list.querySelectorAll('.get-posts')
	Array.from(getPostsBtn).map((el) =>
		el.addEventListener('click', handleClickPosts)
	)
}

function handleClickPosts(e) {
	const id = e.target.parentElement.getAttribute('key')
	getPostsByUser(id).then((posts) => {
		console.log('posts :>> ', posts)
	})
}
// ===============
function createPost(post) {
	fetch(`${BASE_URL}/posts`, {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const newPost = {
		title: e.target.elements.title.value,
		body: e.target.elements.body.value,
		userId: 1,
	}
	createPost(newPost)
}
