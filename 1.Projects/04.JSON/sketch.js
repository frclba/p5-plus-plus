var data;

function preload(){
	data = loadJSON("mood.json");
}

function setup() {
	noCanvas();
	// createElement("h1", data.description);

	var mood = data.moods;

	for(var i = 0; i < mood.length; i += floor(random(1,10))){
		createDiv(mood[i]);
	}
}


function draw() {
}
