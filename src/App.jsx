import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Slider from './Components/Slider/Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Slider/>
    </>
  )
}

export default App
