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
    
  }
}

