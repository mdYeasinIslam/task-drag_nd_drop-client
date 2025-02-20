import { useState } from 'react'
import './App.css'
import { Route } from './Root/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
     <Route/>
    </div>
  )
}

export default App
