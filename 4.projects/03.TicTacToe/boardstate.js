class BoardState {
  constructor(boardSize, currentPlayer, board = null) {
    if(!board) this.board = new GameField(boardSize)
    else this.board = board
    
    this.currentPlayer = currentPlayer
    this.turn = 1-(2*currentPlayer) // if currP=0 then 1 else -1
    this.players = ['O', 'X']
    this.PorAI = ['AI', 'Your']

    this.winner = null
  }
  
   mousePressed() {
    if(isloop && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.turn==-1) {
      let j=Math.floor(mouseX/w);
      let i=Math.floor(mouseY/h);
      let tempBoard = this.board.board;
      
      if(tempBoard[i][j] != '') return;
      tempBoard[i][j] = this.players[this.currentPlayer];
      this.currentPlayer = 1-this.currentPlayer;
      this.turn *= -1
    }
  }
  
  newGame() {
    // boardSize = createSlider(2, 10, 3);
    this.currentPlayer = 1
    this.turn = -1
  
    this.board.newBoard()
    this.winner = null
    isloop = true
  
    // sizeP.html('Size: '+this.boardSize)
    turnP.html(this.PorAI[this.currentPlayer] + " Turn")
    winnerP.html('No winner yet')
    AIThinks.html("AI: You take the first chance")
  }
  
  giveAIMove() {
    let res = this.evaluateBoard(this.board, this.turn, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    this.board = res[0]
    if(res[1]==-1) AIThinks.html("AI: I am gonna lose")
    else if(res[1]==0) AIThinks.html("AI: It's gonna be tie or I win")
    else if(res[1]==1) AIThinks.html("AI: You are gonna lose. Sorry")
    this.currentPlayer = 1-this.currentPlayer;
    this.turn *= -1
  }
  
  evaluateBoard(board, turn, A, B) {
    let winn = board.hasWinner()
    let player = this.players[this.currentPlayer]
    let otherPlayer = this.players[1-this.currentPlayer]
    if(winn) {
      if(winn==otherPlayer) return [board, -1]
      else if(winn==player) return [board, 1]
      else return [board, 0]
    }
    
    let newBoard = board.cloneBoard()
    let availMoves = board.giveAvailableTiles()
    let lenMoves = availMoves.length
    if(lenMoves==0) return [board, 0]
    
    player = this.players[(1-turn)/2]
    if(turn==-1) {
      let bestBoard = null
      for(let i=0; i<lenMoves; ++i) {
        let theMove = availMoves[i]
        newBoard.board[theMove[0]][theMove[1]] = player
        if(i!=0) {
          let prevMove = availMoves[i-1]
          newBoard.board[prevMove[0]][prevMove[1]] = ''
        }
        let res = this.evaluateBoard(newBoard, -1*turn, A, B)
        if(B>res[1]) {
          B=res[1]
          bestBoard = newBoard.cloneBoard()
        }
        if(B<=A) return [bestBoard, B]
      }
      return [bestBoard, B]
    }
    
    if(turn==1) {
      let bestBoard = null
      for(let i=0; i<lenMoves; ++i) {
        let theMove = availMoves[i]
        newBoard.board[theMove[0]][theMove[1]] = player
        if(i!=0) {
          let prevMove = availMoves[i-1]
          newBoard.board[prevMove[0]][prevMove[1]] = ''
        }
        let res = this.evaluateBoard(newBoard, -1*turn, A, B)
        if(A<res[1]) {
          A=res[1]
          bestBoard = newBoard.cloneBoard()
        }
        if(B<=A) return [bestBoard, A]
      }
      return [bestBoard, A]
    }
	
	console.log('Hello')
  }
  
  updateText() {
    // sizeP.html('Size: '+this.boardSize)
    turnP.html(this.PorAI[this.currentPlayer] + " Turn")
  }
  
  show() {
    background(220);
  
    this.updateText();
    this.board.show()
    
    this.winner = this.board.hasWinner();
    if(this.winner) {
      if(this.winner == 'TIE')
        winnerP.html(this.winner);
      else {
        if(this.winner == 'X')
          winnerP.html('You Won')
        else
          winnerP.html('AI Won')
      }
      isloop = false
    }
  }
}