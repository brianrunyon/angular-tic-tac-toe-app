import { Component } from '@angular/core';
import { GameState, getInitialGameState, checkBoard } from '../common/Board';

@Component({
  selector: 'tic-tac-toe-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state: GameState = getInitialGameState();

  onSpotClick(row: number, column: number) {
    const currentBoard: ('' | 'X' | 'O')[][] = this.state.currentBoard;
    const winnerPlayer: ('' | 'X' | 'O') = this.state.winnerPlayer;
    const currentPlayer: ('X' | 'O') = this.state.currentPlayer;
    const nextPlayer: ('X' | 'O') = (currentPlayer === 'X') ? 'O' : 'X';

    // check if the game already has a winner
    if(winnerPlayer !== '') {
      console.log(`game already has a winner (winner: ${winnerPlayer}`);
      return;
    }

    // check if the spot clicked is blank
    let previousValue = currentBoard[row][column];
    if(previousValue === '') {
      let newValue = currentPlayer;
      currentBoard[row][column] = newValue;

      this.state.currentPlayer = nextPlayer;

      // update the game state and check if there is a winner
      this.state = checkBoard(this.state);
    }
  }
}

