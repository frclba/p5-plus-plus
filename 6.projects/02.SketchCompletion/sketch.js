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

function preload() {
	sketchRNN = ml5.sketchRNN('cat');
}
function startDrawing() {
	personDrawing = true;
	x = mouseX;
	y = mouseY;
}

function sketchRNNStart() {
	personDrawing = false;
	sketchRNN.generate(seedPath, gotStrokePath);
}

function setup() {
	let canvas = createCanvas(400, 400);
	background(51);
	canvas.mousePressed(startDrawing);
	canvas.mouseReleased(sketchRNNStart);
	console.log('model loaded');
}

function gotStrokePath(error, strokePath) {
	//console.log(strokePath);
	currentStroke = strokePath;
}

function draw() {
	stroke(255, 0, 255);
	strokeWeight(3);
	if (personDrawing) {
		let strokePath = {
			dx: mouseX - pmouseX,
			dy: mouseY - pmouseY,
			pen: 'down'
		};
		line(x, y, x + strokePath.dx, y + strokePath.dy);
		x += strokePath.dx;
		y += strokePath.dy;
		seedPath.push(strokePath);
	}
	if (currentStroke) {
		if (nextPen === 'end') {
			noLoop();
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
