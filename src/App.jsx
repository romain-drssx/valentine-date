import { useState } from 'react'
import './App.css'
import calinGif from './assets/calin.gif'

function App() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)
  const [isAccepted, setIsAccepted] = useState(false)

  const getMovePosition = () => {
    let randomX, randomY, distance
    // Générer une position aléatoire suffisamment loin du bouton Oui
    do {
      randomX = Math.random() * 300 - 150
      randomY = Math.random() * 300 - 150
      distance = Math.sqrt(randomX ** 2 + randomY ** 2)
    } while (distance < 150) // S'assurer que la distance est au moins 150px
    
    return { x: randomX, y: randomY }
  }

  const handleNoHover = (e) => {
    const pos = getMovePosition()
    setNoPosition(pos)
    setYesScale(prev => prev + 0.15)
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    const pos = getMovePosition()
    setNoPosition(pos)
    setYesScale(prev => prev + 0.15)
  }

  const handleMouseLeave = () => {
    setNoPosition({ x: 0, y: 0 })
  }

  const handleYesClick = () => {
    setIsAccepted(true)
  }

  if (isAccepted) {
    return (
      <div className="valentine-container">
        <div className="valentine-card success-card">
          <h1 className="success-title">Bon choix! 💕</h1>
          <img src={calinGif} alt="Celebration" className="celebration-gif" />
          <p className="success-message">Tu vas être la personnne la plus heureuse ! 🥰</p>
        </div>
      </div>
    )
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
            onClick={handleNoClick}
          >
            Non 😔
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
