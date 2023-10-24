import { useState } from 'react'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Contact />
    </div>
  )
}

export default App
