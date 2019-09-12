class GameField {
	constructor(boardSize, board = null) {
		this.boardSize = boardSize;

		if (!board) {
			this.board = [];
			for (let i = 0; i < this.boardSize; ++i) {
				let row = [];
				for (let j = 0; j < this.boardSize; ++j) {
					row.push('');
				}
				this.board.push(row);
			}
		} else {
			this.board = board;
		}

		this.w = width / boardSize;
		this.h = height / boardSize;
	}

	giveAvailableTiles() {
		let ans = [];
		for (let i = 0; i < this.boardSize; ++i) {
			for (let j = 0; j < this.boardSize; ++j) {
				if (this.board[i][j] == '') {
					ans.push([i, j]);
				}
			}
		}
		return ans;
	}
	newBoard() {
		this.w = width / this.boardSize;
		this.h = height / this.boardSize;

		this.board = [];

		for (let i = 0; i < this.boardSize; ++i) {
			let row = [];
			for (let j = 0; j < this.boardSize; ++j) {
				row.push('');
			}
			this.board.push(row);
		}
	}

	hasWinner() {
		for (let i = 0; i < this.boardSize; ++i) {
			let temp = this.board[i][0];
			if (temp == '') continue;
			for (let j = 1; j < this.boardSize; ++j) {
				if (this.board[i][j] == '') {
					temp = '';
					break;
				}
				if (this.board[i][j] != temp) {
					temp = '';
					break;
				}
			}
			if (temp != '') {
				stroke(220, 0, 0);
				strokeWeight(8);
				line(w / 4, w * (i + 0.5), width - w / 4, w * (i + 0.5));
				strokeWeight(4);
				stroke(0);
				return temp;
			}
		}

		for (let i = 0; i < this.boardSize; ++i) {
			let temp = this.board[0][i];
			if (temp == '') continue;
			for (let j = 1; j < this.boardSize; ++j) {
				if (this.board[j][i] == '') {
					temp = '';
					break;
				}
				if (this.board[j][i] != temp) {
					temp = '';
					break;
				}
			}
			if (temp != '') {
				stroke(220, 0, 0);
				strokeWeight(8);
				line(w * (i + 0.5), w / 4, w * (i + 0.5), height - w / 4);
				strokeWeight(4);
				stroke(0);
				return temp;
			}
		}

		let temp = this.board[0][0];
		if (temp != '') {
			for (let i = 1; i < this.boardSize; ++i) {
				if (this.board[i][i] == '') {
					temp = '';
					break;
				}
				if (this.board[i][i] != temp) {
					temp = '';
					break;
				}
			}
		}
		if (temp != '') {
			stroke(220, 0, 0);
			strokeWeight(8);
			line(w / 4, w / 4, width - w / 4, height - w / 4);
			strokeWeight(4);
			stroke(0);
			return temp;
		}

		temp = this.board[0][this.boardSize - 1];
		if (temp != '') {
			for (let i = 1; i < this.boardSize; ++i) {
				if (this.board[i][this.boardSize - 1 - i] == '') {
					temp = '';
					break;
				}
				if (this.board[i][this.boardSize - 1 - i] != temp) {
					temp = '';
					break;
				}
			}
		}
		if (temp != '') {
			stroke(220, 0, 0);
			strokeWeight(8);
			line(width - w / 4, w / 4, w / 4, height - w / 4);
			strokeWeight(4);
			stroke(0);
			return temp;
		}

		for (let i = 0; i < this.boardSize; ++i) {
			for (let j = 0; j < this.boardSize; ++j) {
				if (this.board[i][j] == '') return null;
			}
		}
		return 'TIE';
	}

	cloneBoard() {
		let newBoard = this.board.map(arr => arr.slice());
		return new GameField(this.boardSize, newBoard);
	}
	show() {
		strokeWeight(4);
		noFill();

		for (let i = 1; i < this.boardSize; ++i) {
			line(0, this.h * i, width, this.h * i);
			line(this.w * i, 0, this.w * i, height);
		}

		for (let i = 0; i < this.boardSize; ++i) {
			for (let j = 0; j < this.boardSize; ++j) {
				let x = this.w * j + this.w / 2;
				let y = this.h * i + this.h / 2;
				let xr = this.w / 4;
				let yr = this.h / 4;

				if (this.board[i][j] == 'X') {
					line(x - xr, y - yr, x + xr, y + yr);
					line(x + xr, y - yr, x - xr, y + yr);
				} else if (this.board[i][j] == 'O') {
					ellipseMode(CENTER);
					ellipse(x, y, xr * 2, yr * 2);
				}
			}
		}
	}
}
