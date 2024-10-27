import { useState } from 'react';
import { Button } from './components/Button';
import { TURNS } from './logic/constants';
import { checkWinner, checkDraw, clearStorage } from './logic/funtions';

function App() {
	const [board, setBoard] = useState(() => {
    const savedBoard = localStorage.getItem('board-ttt')
    if(savedBoard) return JSON.parse(savedBoard)
    return Array(9).fill(null)
  });

	const [currentTurn, setCurrentTurn] = useState(() => {
    const savedTurn = localStorage.getItem('turn-ttt')
    if(savedTurn) return JSON.parse(savedTurn)
    return TURNS.X
  });

	const [winner, setWinner] = useState<'winner' | 'draw' | 'playing'>('playing');

	const handleTurn = (idx: number) => {
		if (board[idx]) return;
		if (winner === 'winner' || winner === 'draw') return;

		const _board = [...board];
		_board[idx] = currentTurn;
		setBoard(_board);
    localStorage.setItem('board-ttt', JSON.stringify(_board));
    const newTurn = currentTurn === TURNS.X ? TURNS.Y : TURNS.X
    setCurrentTurn(newTurn);
    localStorage.setItem('turn-ttt', JSON.stringify(newTurn));
    
    if (checkWinner(_board)) {clearStorage(); setWinner('winner');}
    if (checkDraw(_board)) {clearStorage(); setWinner('draw');}
	};

  const handleReset = () => {
    clearStorage()
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
    setWinner('playing');
  }

	return (
		<main className="w:'100%' mx:auto max-w:800px">
			<h1 className='font:40 font:heavy italic text:center'>Tic Tac Toe</h1>
			<section className='w:fit-content grid grid-template-columns:repeat(3,1fr) gap:10px mx:auto'>
				{board.map((_: number, idx: number) => (
					<Button key={idx} index={idx} updateBoard={handleTurn} text={board[idx]} />
				))}
			</section>

			<section className='font:20 my:24px text:center'>
        <h2>{winner === 'playing' && currentTurn ? `Turno de ${currentTurn}` : ''}</h2>
			</section>
			<section className='text:center'>
				<h2>{
          winner === 'winner' ? `Gano ${currentTurn === TURNS.X ? 'o' : 'x'}` :
          winner === 'draw' ? 'Empate! 🤡' : ''
        }</h2>
			</section>

      <footer className='my:24px text:center'>
        {winner !== 'playing' &&
          <button className='px:12px py:8px text-fill:gray-10@dark bg:blue-70' onClick={handleReset}>
            Reset game
          </button>
        }
      </footer>
		</main>
	);
}

export default App;
