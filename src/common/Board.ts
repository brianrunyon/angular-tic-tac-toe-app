
const ROWS = 3;
const COLUMNS = 3;


interface GameState {
  currentPlayer: ('X' | 'O');
  currentBoard: ('' | 'X' | 'O')[][];
  winnerPlayer: ('' | 'X' | 'O');
}

interface ValidationState {
  consecutiveSpots: number;
  checkingPlayer: ('' | 'X' | 'O');
  reset: () => void;
  checkSpot: (spot: ('' | 'X' | 'O')) => boolean;
  checkWinner: (state: GameState) => boolean;
}

const getInitialValidationState = () => {
  let consecutiveSpots: number = 0;
  let checkingPlayer: ('' | 'X' | 'O') = '';
  const reset = () => {
    consecutiveSpots = 0;
    checkingPlayer = '';
  };
  const checkSpot = (spot: ('' | 'X' | 'O')) => {
    if(spot !== '') {
      if(checkingPlayer === '') {
        checkingPlayer = spot;
        consecutiveSpots++;
        return true;
      }
      else if(checkingPlayer === spot) {
        consecutiveSpots++;
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  };
  const checkWinner = (state: GameState) => {
    if(consecutiveSpots === 3) {
      state.winnerPlayer = checkingPlayer;
      return true;
    }
    return false;
  };
  const validationState: ValidationState = {
    consecutiveSpots,
    checkingPlayer,
    reset,
    checkSpot,
    checkWinner
  };
  return validationState;
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

  let validationState = getInitialValidationState();

  // check each row
  for(let r=0; r<ROWS; r++) {
    const row: ('' | 'X' | 'O')[] = board[r];

    validationState.reset();

    for(let c=0; c<COLUMNS; c++) {
      const spot: ('' | 'X' | 'O') = row[c];
      if(!validationState.checkSpot(spot)) {
        break;
      }
    }

    if(validationState.checkWinner(state)) {
      console.log(`(row) winner ${validationState.checkingPlayer}`);
      return state;
    }

  }

  // check each column
  for(let c=0; c<COLUMNS; c++) {

    validationState.reset();

    for(let r=0; r<ROWS; r++) {
      const row: ('' | 'X' | 'O')[] = board[r];
      const spot: ('' | 'X' | 'O') = row[c];
      if(!validationState.checkSpot(spot)) {
        break;
      }
    }

    if(validationState.checkWinner(state)) {
      console.log(`(column) winner ${validationState.checkingPlayer}`);
      return state;
    }

  }

  // check diagonals
  {
    validationState.reset();

    for(let r=0, c=0; r<ROWS && c<COLUMNS; r++, c++) {
      const spot: ('' | 'X' | 'O') = board[r][c];
      if(!validationState.checkSpot(spot)) {
        break;
      }
    }

    if(validationState.checkWinner(state)) {
      console.log(`(diagonal top left) winner ${validationState.checkingPlayer}`);
      return state;
    }

  }

  {
    validationState.reset();

    for(let r=0, c=COLUMNS-1; r<ROWS && c>=0; r++, c--) {
      const spot: ('' | 'X' | 'O') = board[r][c];
      if(!validationState.checkSpot(spot)) {
        break;
      }
    }

    if(validationState.checkWinner(state)) {
      console.log(`(diagonal top right) winner ${validationState.checkingPlayer}`);
      return state;
    }

  }
  return state;
};

export {
  GameState,
  getInitialGameState,
  checkBoard
};
