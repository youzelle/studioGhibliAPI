
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/300px-Studio_Ghibli_logo.svg.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//Create a request variable and assign XMLHttpRequest object to it
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on URL endpoint
request.open("GET", 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
	var data = JSON.parse(this.responseText);
	if (request.status >= 200 && request.status < 400) {
	data.forEach(function(movie) {
		//create a div with a card class
		const card = document.createElement('div');
		card.setAttribute('class', 'card');
		//create a h1 and set the text content to films title
		const h1 = document.createElement('h1');
		h1.textContent = movie.title;
		//create a p and set text content to films description
		const p = document.createElement('p');
		//movie.description = movie.description.substring(0, 300);
		p.textContent = `${movie.description.substring(0, 300)}...`
		// Append the cards to the container element
  		container.appendChild(card);

	    // Each card will contain an h1 and a p
	    card.appendChild(h1);
	    card.appendChild(p);
	});
	} else {
		const errorMessage = document.createElement('marquee');
    	errorMessage.textContent = `Nooo! It's not working!`;
    	app.appendChild(errorMessage);
	}
}

//send request
request.send();

