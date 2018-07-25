let data;
let users;

let resultP;
let resultDivs = [];

function preload(){
	data = loadJSON('movies.json');
}

function setup() {

	noCanvas();
	users = {};
	let dropdown = createSelect('');
	for(let i = 0; i < data.users.length; i++){
		let name = data.users[i].name;
		dropdown.option(name);
		users[name] = data.users[i];
	}

	let button = createButton('submit');
	button.mousePressed(findNearestNeighbors);
	resultP = createP('');

	function findNearestNeighbors(){
		for(let i = 0; i < resultDivs.length; i++){
			resultDivs[i].remove();
		}
		resultDivs = [];
		let name = dropdown.value();

		let similarityScores = {};

		for(let i = 0; i < data.users.length; i++){
			let otherUser = data.users[i].name;

			if(otherUser != name){
				let score = euclidianDistance(name, otherUser);
				similarityScores[otherUser] = score;
			}
			else{
				similarityScores[otherUser] = -1;
			}
		}
		data.users.sort(compareSimilarity);

		function compareSimilarity(a, b) {
			return similarityScores[b.name] - similarityScores[a.name];
		}

		let k = 5;
		for(let i = 0; i < k; i++){
			let name = data.users[i].name;
			let div = createDiv(name + ': ' + similarityScores[name]);
			resultDivs.push(div);
			resultP.parent(div);
		}
	}
}


function euclidianDistance(name1, name2){
	let ratingsUser1 = users[name1];
	let ratingsUser2 = users[name2];

	let titles = Object.keys(ratingsUser1);
	titles.splice(titles.indexOf('name'), 1);
	titles.splice(titles.indexOf('timestamp'), 1);

	let sumSquares = 0;
	for(let i = 0; i < titles.length; i++){
		let title = titles[i];
		if(ratingsUser1[title] && ratingsUser2[title]){
			let diff = ratingsUser1[title] - ratingsUser2[title];
			sumSquares += diff * diff;
		}
	}
	let distance = sqrt(sumSquares);
	let similarity = 1 / (1+distance);

	return similarity;
}
