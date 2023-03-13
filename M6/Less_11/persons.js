const persons = [
	{
		name: 'Michel Legrand',
		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Michel_Legrand_Cabourg_2015.jpg',
		alt: 'Michel Legrand conducting his orcherstra.',
		info: 'Michel Legrand conducting his orchestra.',
	},
	{
		name: 'Hanry Ford',
		src: 'https://www.thoughtco.com/thmb/u43KDJGdbvu_0qW8k_bDUf2z1-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515461052-dd32da349fa5499fb777ce0214a956e8.jpg',
		alt: 'Hanry Ford conducting his orcherstra.',
		info: 'Hanry Ford conducting his orchestra.',
	},
	{
		name: 'Rick Astley',
		src: 'https://m.media-amazon.com/images/M/MV5BOTNmZGU0MDYtNDE4Zi00NTE4LTg0ZGEtYzBjOWNjOTkwMzdlXkEyXkFqcGdeQXVyMTg3Nzg5ODY@._V1_.jpg',
		alt: 'Rick Astley conducting his orcherstra.',
		info: 'Rick Astley conducting his orchestra.',
	},
	{
		name: 'Nikola Tesla',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/274px-Tesla_circa_1890.jpeg',
		alt: 'Nikola Tesla conducting his orcherstra.',
		info: 'Nikola Tesla conducting his orchestra.',
	},
]

const randomPerson = (person) => {
	const index = Math.round(Math.random() * (person.length - 1))
	return person[index]
}

const main = document.getElementById('main')

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

const factsStr = facts.reduce((acc, fact) => {
	return acc + `<li>${fact}</li>`
}, '')

const objPerson = randomPerson(persons)

main.insertAdjacentHTML(
	'beforeend',
	`
    <h1 id="title">- ${objPerson.name} -</h1> 

    <figure id="img-div">
        <img
            width='450'
            id="image"
            src=${objPerson.src}
            alt=${objPerson.alt}
        />
        <figcaption id="img-caption">
            ${objPerson.info}
        </figcaption>
    </figure>
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
