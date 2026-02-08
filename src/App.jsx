import { useState } from 'react'
import './App.css'

function App() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)

  const handleNoHover = (e) => {
    const randomX = Math.random() * 200 - 100
    const randomY = Math.random() * 200 - 100
    setNoPosition({ x: randomX, y: randomY })
    setYesScale(prev => prev + 0.15)
  }

  const handleMouseLeave = () => {
    setNoPosition({ x: 0, y: 0 })
  }

  const handleYesClick = () => {
    alert('💕 Yay! Tu as dit oui! 💕')
  }

  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <h1 className="question">Est-ce que tu veux être ma valentine? 💝</h1>
        
        <div className="buttons-container" onMouseLeave={handleMouseLeave}>
          <button 
            className="btn btn-yes"
            style={{ transform: `scale(${yesScale})` }}
            onClick={handleYesClick}
          >
            Oui ✨
          </button>
          
          <button 
            className="btn btn-no"
            style={{ 
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)` 
            }}
            onMouseEnter={handleNoHover}
          >
            Non 😔
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
