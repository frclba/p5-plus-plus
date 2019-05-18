function preload(){
	soundFormats('mp3', 'ogg');
	clap = loadSound('clap.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	clap.setVolume(0.3);
	
	
}

function draw() {
	fill(255, 0, 255);
	strokeWeight(3);
	for (i = 0; i < 252; i++) {
		setInterval(() => {
			clap.play()
			ellipse(width / 2, height / 2, (60 % i) * 10 );
		}, 100);
	}
}