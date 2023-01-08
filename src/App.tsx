import React, { Children } from 'react'
import logo from './logo.svg'
import './App.css'
import { StarRating } from './Components/StarRating'

function App() {
  return (
    <div className="App">
      <section>
        <StarRating style={{ backgroundColor: 'lightBlue' }} totalStars={5} />
      </section>
    </div>
  )
}

export default App
