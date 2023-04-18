import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import whiteRook from './assets/pieces/white_rook.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <a href="https://vitejs.dev" target="_blank">
          <img width={50} src={whiteRook}/>
        </a>
    </div>
  )
}

export default App
