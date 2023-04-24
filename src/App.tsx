import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import startSound from './assets/sounds/game-start.wav';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function playStartSound() {
    new Audio(startSound).play()
  };

  const restart = () => {
    playStartSound()
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigurs();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="App">
      <div className='info'>
      <h1 className='player'>Current player: {currentPlayer?.color}</h1>
      <Timer 
      restart={restart}
      currentPlayer={currentPlayer}/>
      </div>
      <BoardComponent
      board={board}
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
        title='Black figures'
        figures={board.lostBlackFigures}/>
        <LostFigures
        title='White figures'
        figures={board.lostWhiteFigures}/>
      </div>
    </div>
  )
}

export default App;
