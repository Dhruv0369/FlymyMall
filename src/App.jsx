import { useState } from 'react'
import './App.css'
import Homemain from './components/Homemain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homemain/>
    </>
  )
}

export default App
