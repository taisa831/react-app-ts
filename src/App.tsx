import React, { useState } from 'react'
import './App.css'
import colorData from './color-data.json'
import { ColorList } from './Components/ColorList'

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      <section>
        <ColorList
          colors={colors}
          onRemoveColor={(id) => {
            const newColors = colors.filter((color) => color.id !== id)
            setColors(newColors)
          }}
          onRate={(id, rating) => {
            const newColors = colors.map((color) =>
              color.id === id ? { ...color, rating } : color
            )
            setColors(newColors)
          }}
        />
        {/* <StarRating style={{ backgroundColor: 'lightBlue' }} totalStars={5} /> */}
      </section>
    </div>
  )
}

export default App
