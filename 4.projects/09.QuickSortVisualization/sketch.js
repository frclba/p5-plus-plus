let values = [];
let w = 10;
let states = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	values = new Array(floor(width/w));
	for (let i = 0; i < values.length; i++){
		values[i] = random(height);
		states[i] = -1;
	}
	quickSort(values,0,values.length -1);
}

async function quickSort(arr, start, end){
	if (start >= end){
		return;
	}
	let index = await partition(arr, start, end);
	states[index] = -1;

	await Promise.all([
		quickSort(arr, start, index - 1),
		quickSort(arr, index + 1, end)
	]);
}

async function partition(arr, start, end){
	for(let i = start; i < end; i++){
		states[i] = 1;
	}

	let pivotValue = arr[end];
	let pivotIndex = start;
	states[pivotIndex] = 0;
	for(let i = start; i < end; i++){
	}
}

function draw() {
	background(55);
	for (let i = 0; i < values.length; i++){
		noStroke();
		if(states[i] == 0){
			fill(255, 0, 255)
		} else if(states[i] == 1){
			fill('#D6FFB7');
		}
		else{
			fill(255);
		}
		rect(i*w, height - values[i], w, values[i]);
	}
}
