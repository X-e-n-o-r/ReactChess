import { useEffect, useState } from 'react'
import './App.css'
import whiteRook from './assets/pieces/white_rook.png'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    setBoard(newBoard)
  }

  interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
  }

  

  return (
    <div className="App">
      <BoardComponent />
    </div>
  )
}

export default App
