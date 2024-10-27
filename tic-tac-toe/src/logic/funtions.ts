import { WINNER_COMBOS } from './constants';

export const checkWinner = (board: (string | null)[]) => {
  for (const line of WINNER_COMBOS) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
};

export const checkDraw = (board: (string | null)[]) => {
  return !board.some((square) => square === null)
}

export const clearStorage = () => {
  localStorage.removeItem('board-ttt');
  localStorage.removeItem('turn-ttt');
}