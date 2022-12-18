
const ROWS = 3;
const COLUMNS = 3;


interface GameState {
  currentPlayer: ('X' | 'O');
  currentBoard: ('' | 'X' | 'O')[][];
  winnerPlayer: ('' | 'X' | 'O');
}

const getInitialGameState = () => {
  let state: GameState = {
    currentPlayer: 'X',
    currentBoard: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    winnerPlayer: ''
  };
  return state;
};

const checkBoard = (state: GameState) => {
  let board: ('' | 'X' | 'O')[][] = state.currentBoard;

  // check each row
  // check each column
  // check diagonals

  return state;
};

export {
  GameState,
  getInitialGameState,
  checkBoard
};
