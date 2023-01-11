import { useState } from 'react'
import './App.css'
import colorData from './color-data.json'
import { ColorList } from './components/ColorList'
import { TodoProvider } from './components/providers/TodoProvider'

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      <section>
        <TodoProvider>
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
        </TodoProvider>
        {/* <StarRating style={{ backgroundColor: 'lightBlue' }} totalStars={5} /> */}
      </section>
    </div>
  )
}

export default App
