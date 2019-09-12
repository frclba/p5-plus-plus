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

let boardState;
let boardSize = 3 // Dont change this to more than 3.. The AI is going to take long time to calculate.

let isloop = true

function setup() {
  createCanvas(400, 400)
  
  w = width/boardSize
  h = height/boardSize
  
  boardState = new BoardState(boardSize, 1);
  initLabels()
}

function initLabels() {
  newGameBtn = createButton('New Game');
  newGameBtn.position(width+30, 50);
  newGameBtn.mousePressed(newGame);
  
  turnP = createP("'s Turn").style('background-color', '#FFF').style('font-size', '20px').style('padding', '5px')
  turnP.position(width+30, 150);
  
  winnerP = createP('No winner yet').style('background-color', '#FFF').style('font-size', '25px').style('padding', '5px')
  winnerP.position(width+30, 200);
  
  AIThinks = createP("AI: You take the first chance").style('background-color', '#FFF').style('font-size', '25px').style('padding', '5px')
  AIThinks.position(width+30, 300);
}

function mousePressed() {
  boardState.mousePressed()
}

function newGame() {
  boardState.newGame()
}

function draw() {
  if(isloop)
    if(boardState.turn == 1)
      boardState.giveAIMove()
    boardState.show()
}
