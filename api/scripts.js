// async function fetchJokes () {
// 	try {
// 		const response = await fetch('https://icanhazdadjoke.com/', {
// 			headers: { Accept: 'application/json' }
// 		})

// 		const joke = await response.json()
// 		return joke

// 	} catch (e) {
// 		throw e
// 	}
// }

// fetchJokes().then(data => {
// 	document.querySelector('p').append(data.joke)
// }).catch(error => {
// 	console.log('error', error)
// })


// function daugyba (a, b) {
// 	console.log(a * b())
// }

// function grazinuKeturis () {
// 	return 4
// }

// // daugyba(1, grazinuKeturis)
// daugyba(1, grazinuKeturis)

// function tikisiFunkcijos (a) {
// 	a()
// }

// function isspausdintiTeksta () {
// 	console.log('Tekstas')
// }

// function duPlusTrys () {
// 	console.log(2 + 3)
// }

// tikisiFunkcijos(isspausdintiTeksta)
// tikisiFunkcijos(duPlusTrys)

// async function fetchMovies() {
// 	try {
// 		let query = 'spiderman'
// 		const inputValue = document.querySelector('.search').value
// 		if (inputValue.length > 0) {
// 			query = inputValue
// 		}
// 		const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
// 		const shows = await response.json()
// 		return shows
// 	} catch (error) {
// 		throw error
// 	}
// }

// fetchMovies()
// 	.then(shows => {
// 		console.log(shows[0])
// 		document.querySelector('.show').innerHTML = `
// 			<img src="${shows[0].show.image.medium}" />
// 			<p class="title">${shows[0].show.name}</p>
// 			<date>${shows[0].show.premiered}</date>
// 			${shows[0].show.summary}
// 		`
// 	})
// 	.catch(error => console.log(error))

// function fetchMoviesByName() {

// 	fetchMovies()
// 		.then(shows => {
// 			document.querySelector('.shows').innerHTML = ''

// 			for (let i = 0; i < shows.length; i++) {
// 				const showElement = document.createElement('div')
// 				showElement.classList.add('show')

// 				const img = shows[i].show.image.medium
// 				const title = shows[i].show.name
// 				const premiered = shows[i].show.premiered.slice(0, 7) // 1991-01
// 				const summary = shows[i].show.summary

// 				showElement.innerHTML = `
// 					<img src="${img}" />
// 					<div class="content">
// 						<h3 class="title">${title}</h3>
// 						<date>${premiered}</date>
// 						${summary}
// 					</div>
// 				`

// 				document.querySelector('.shows').appendChild(showElement)
// 			}
// 		})
// 		.catch(error => console.log(error))
// }

// fetchMoviesByName()

document.addEventListener('DOMContentLoaded', () => {
	axios.get('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => console.log(response.data))
		.catch(error => console.log(error))

	const naujaUzduotis = {
		userID: 5,
		id: 87,
		title: 'Title tekstas',
		body: 'Issamesnis body tekstas'
	}

// 	axios.post('https://jsonplaceholder.typicode.com/todos', naujaUzduotis)
// 		.then(response => console.log('issiusta, gautas rezultatas:', response.data))
// 		.catch(error => console.log(error))

	
// 	const instance = axios.create({
// 		baseURL: 'https://jsonplaceholder.typicode.com/',
// 		timeout: 5000,
// 		headers: { 'Content-Type': 'application/json' }
// 	})

// 	instance.get('todos/5')
// 		.then(response => console.log('todo 5#', response.data))
// 		.catch(error => console.log(error))

// 	instance.get('todos/2')
// 		.then(response => console.log('todo 2#', response.data))
// 		.catch(error => console.log(error))
	
// 	instance.get('todos/14')
// 		.then(response => console.log('todo 14#', response.data))
// 		.catch(error => console.log(error))

// 		const url = 'https://pokeapi.co/api/v2/ability/{1}/';

// 		const getstoreproducts = async (id) => {
// 			try {
				
// 				const res = await axios.get(`https://pokeapi.co/api/v2/ability/${id}/'`);
// 				console.log(res.data);
// 				console.log(id, `uzklausa:`);
// 				console.log('=============');

// 			} catch(error) {
// 				console.log(error);
// 			}
// 		}
// 		getstoreproducts(9);
// 		getstoreproducts(9);
// 		getstoreproducts(8);
// 	})
	

// 	//https://fakestoreapi.com/products/,

// 	const getproducts = async () => {
// 		try {
// 			const res = await axios.get(`https://fakestoreapi.com/products/`);
// 			return res.data;

// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	getproducts().then(data => {
// 		console.log(data);

// 		for (let i = 0; i < data.length; i++) {
// 			const element = document.createElement('div');
// 			element.classList.add('product');

// 			const { title, image } = data[i];

// 			element.innerHTML = `
// 			<img src="${image}"/>
// 			<div class="product-content">
// 			<p>${title}</p>
// 			<a href="#">Perziureti</a>
// 			</div>`

// 			document.querySelector('.product').appendChild(element)
// 		}
});


fetch('http://localhost:3000/photos')
.then(res => {
	return res.json()
})

.then(res => {

	res.array.forEach(element => {
		const element = document.createElement('div');
		const element = document.createElement('div');

		element.innerHTML = `
		<a href="${photo.url}">
			<img src="${photo.thumbnailUrl}"?
			<p>${photo.title}</p>
			<button onclick="deleteItem(${photo.id})>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path></svg>
			</button>
		</a>`

		document.querySelector('.photo').appendChild(element);
	});
})
.catch(error => {
	console.log(error);
})

function deleteItem(id) {
	console.log(id);
}

function createItem() {
	
}