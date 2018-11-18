/*
	Matrix 3x3 com quadrados selecionaveis
	click no quadrado muda a cor
	sistema de turnos p/ x ou o
	condição de vitória
	empate
	gg
	machine learning
	bot algoritmo infalível
	how to be god 101
*/
let ratio = 3;
let field;

function setup() {
	let fieldArray = [];
	createCanvas(windowWidth, windowHeight);

	let rows = width/ratio;
	let cols = height/ratio;

	field = new GameField(rows, cols);
	console.log(field);
}

function draw() {
	noFill();
	stroke(0);
	// ellipse(width/2, height/2, 60);
	field.display();
}
