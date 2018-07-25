let data;
let users;

let resultP;
let resultDivs = [];
let dropdownArray = [];
let titles;

function preload(){
	data = loadJSON('/zdata/movies.json');
}

function setup() {

	noCanvas();
	users = {};
	titles = Object.keys(data.users[0]);
	titles.splice(titles.indexOf('name'), 1);
	titles.splice(titles.indexOf('timestamp'), 1);

	createDropDowns();

	let button = createButton('submit');
	button.mousePressed(predictRatings);
	resultP = createP('');

}

function createDropDowns(){
	for(let i = 0; i < titles.length; i++){
		let div = createDiv(titles[i]);
		let dropdown = createSelect('');

		dropdown.title = titles[i];
		dropdown.option("not seen");
		dropdown.parent(div);
		dropdownArray.push(dropdown);

		for(let star = 1; star <= 5; star++){
			dropdown.option(star);
		}
	}
}
