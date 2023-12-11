/*
filename: complex_code.js
content: Implementation of a Tic-Tac-Toe (N x N) game using Object-Oriented Programming in JavaScript
*/

class TicTacToe {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.board = [];
    this.currentPlayer = 'X';
    this.movesCount = 0;

    // Initialize the board
    for (let i = 0; i < this.boardSize; i++) {
      this.board[i] = new Array(this.boardSize).fill('');

      for (let j = 0; j < this.boardSize; j++) {
        this.board[i][j] = '';
      }
    }
  }

  printBoard() {
    let boardString = '';
    for (let i = 0; i < this.boardSize; i++) {
      boardString += '|';
      for (let j = 0; j < this.boardSize; j++) {
        const cellValue = this.board[i][j] === '' ? ' ' : this.board[i][j];
        boardString += ` ${cellValue} |`;
      }
      boardString += '\n';

      // Add separator line
      if (i !== this.boardSize - 1) {
        boardString += '+' + '-+'.repeat(this.boardSize) + '\n';
      }
    }

    console.log(boardString);
  }

  makeMove(row, col) {
    if (row < 0 || row >= this.boardSize || col < 0 || col >= this.boardSize) {
      console.log('Invalid move! Please select valid row and column.');
      return;
    }

    if (this.board[row][col] !== '') {
      console.log('Invalid move! Cell already occupied.');
      return;
    }

    this.board[row][col] = this.currentPlayer;
    this.movesCount++;

    // Check if the current player wins
    if (this.checkWin(row, col)) {
      console.log(`Player ${this.currentPlayer} wins!`);
      this.printBoard();
      return;
    }

    // Check if it's a tie
    if (this.movesCount === this.boardSize * this.boardSize) {
      console.log('It\'s a tie!');
      this.printBoard();
      return;
    }

    // Switch to the other player
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

    // Print the board after making a move
    this.printBoard();
  }

  checkWin(row, col) {
    // Check row
    let count = 0;
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[row][i] === this.currentPlayer) {
        count++;
      }
    }
    if (count === this.boardSize) {
      return true;
    }

    // Check column
    count = 0;
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[i][col] === this.currentPlayer) {
        count++;
      }
    }
    if (count === this.boardSize) {
      return true;
    }

    // Check main diagonal (\)
    if (row === col) {
      count = 0;
      for (let i = 0; i < this.boardSize; i++) {
        if (this.board[i][i] === this.currentPlayer) {
          count++;
        }
      }
      if (count === this.boardSize) {
        return true;
      }
    }

    // Check secondary diagonal (/)
    if (row + col === this.boardSize - 1) {
      count = 0;
      for (let i = 0; i < this.boardSize; i++) {
        if (this.board[i][this.boardSize - 1 - i] === this.currentPlayer) {
          count++;
        }
      }
      if (count === this.boardSize) {
        return true;
      }
    }

    return false;
  }
}

// Usage example:
const game = new TicTacToe(3); // Create a 3x3 Tic-Tac-Toe game
game.printBoard(); // Print initial empty board

game.makeMove(0, 0); // Player X makes a move in top-left corner
game.makeMove(1, 1); // Player O makes a move in the center
game.makeMove(0, 1); // Player X makes a move in the top-center
game.makeMove(1, 2); // Player O makes a move in the middle-right
game.makeMove(0, 2); // Player X makes a move in the top-right and wins!

/*
Output:
| X |   |   |
+---+---+---+
|   | O | X |
+---+---+---+
|   |   | X |

Player X wins!
*/

// Continue playing the game...