let sketchRNN;

const models = [
	'alarm_clock',
	'ambulance',
	'angel',
	'ant',
	'antyoga',
	'backpack',
	'barn',
	'basket',
	'bear',
	'bee',
	'beeflower',
	'bicycle',
	'bird',
	'book',
	'brain',
	'bridge',
	'bulldozer',
	'bus',
	'butterfly',
	'cactus',
	'calendar',
	'castle',
	'cat',
	'catbus',
	'catpig',
	'chair',
	'couch',
	'crab',
	'crabchair',
	'crabrabbitfacepig',
	'cruise_ship',
	'diving_board',
	'dog',
	'dogbunny',
	'dolphin',
	'duck',
	'elephant',
	'elephantpig',
	'eye',
	'face',
	'fan',
	'fire_hydrant',
	'firetruck',
	'flamingo',
	'flower',
	'floweryoga',
	'frog',
	'frogsofa',
	'garden',
	'hand',
	'hedgeberry',
	'hedgehog',
	'helicopter',
	'kangaroo',
	'key',
	'lantern',
	'lighthouse',
	'lion',
	'lionsheep',
	'lobster',
	'map',
	'mermaid',
	'monapassport',
	'monkey',
	'mosquito',
	'octopus',
	'owl',
	'paintbrush',
	'palm_tree',
	'parrot',
	'passport',
	'peas',
	'penguin',
	'pig',
	'pigsheep',
	'pineapple',
	'pool',
	'postcard',
	'power_outlet',
	'rabbit',
	'rabbitturtle',
	'radio',
	'radioface',
	'rain',
	'rhinoceros',
	'rifle',
	'roller_coaster',
	'sandwich',
	'scorpion',
	'sea_turtle',
	'sheep',
	'skull',
	'snail',
	'snowflake',
	'speedboat',
	'spider',
	'squirrel',
	'steak',
	'stove',
	'strawberry',
	'swan',
	'swing_set',
	'the_mona_lisa',
	'tiger',
	'toothbrush',
	'toothpaste',
	'tractor',
	'trombone',
	'truck',
	'whale',
	'windmill',
	'yoga',
	'yogabicycle',
	'everything'
];

let currentStroke;
let x, y;
let seedPath = [];
let personDrawing = false;
let nextPen = 'down';
let seedPoints = [];

let selectElement;
let selected = 'everything';

function preload() {
	sketchRNN = ml5.sketchRNN(selected);
}

function startDrawing() {
	personDrawing = true;
	x = mouseX;
	y = mouseY;
}

function sketchRNNStart() {
	personDrawing = false;

	// Perform RDP Line Simplification
	const rdpPoints = [];
	const total = seedPoints.length;
	const start = seedPoints[0];
	const end = seedPoints[total - 1];

	rdpPoints.push(start);
	rdp(0, total - 1, seedPoints, rdpPoints);
	rdpPoints.push(end);

	// Drawing new Points
	background(51);
	beginShape();
	noFill();
	strokeWeight(3);
	stroke(255, 0, 255);
	for (let v of rdpPoints) {
		vertex(v.x, v.y);
	}
	endShape();

	x = rdpPoints[rdpPoints.length - 1].x;
	y = rdpPoints[rdpPoints.length - 1].y;

	seedPath = [];
	// Converting sketch rnn states
	for (let i = 1; i < rdpPoints.length; i++) {
		let strokePath = {
			dx: rdpPoints[i].x - rdpPoints[i - 1].y,
			dy: rdpPoints[i].y - rdpPoints[i - 1].y,
			pen: 'down'
		};
		line(x, y, x + strokePath.dx, y + strokePath.dy);
		//x += strokePath.dx;
		//y += strokePath.dy;
		seedPath.push(strokePath);
	}

	sketchRNN.generate(seedPath, gotStrokePath);
}

function setup() {
	let canvas = createCanvas(400, 400);
	background(51);
	canvas.mousePressed(startDrawing);
	canvas.mouseReleased(sketchRNNStart);

	selectElement = createSelect();
	for (opt of models) {
		selectElement.option(opt);
	}
	selectElement.changed(mySelectEventChanged);

	console.log('model loaded');
}

function mySelectEventChanged() {
	let option = selectElement.value();
	sketchRNN = ml5.sketchRNN(option);
}

function gotStrokePath(error, strokePath) {
	//console.log(strokePath);
	currentStroke = strokePath;
}

function draw() {
	stroke(255, 0, 255);
	strokeWeight(3);
	if (personDrawing) {
		seedPoints.push(createVector(mouseX, mouseY));
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
	if (currentStroke) {
		if (nextPen === 'end') {
			sketchRNN.reset();
			sketchRNNStart();
			return;
		}
		if (nextPen === 'down') {
			line(x, y, x + currentStroke.dx, y + currentStroke.dy);
		}

		x += currentStroke.dx;
		y += currentStroke.dy;
		nextPen = currentStroke.pen;
		currentStroke = null;
		sketchRNN.generate(gotStrokePath);
	}
}
