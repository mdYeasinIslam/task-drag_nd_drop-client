import { useState } from 'react'
import './App.css'
import { Route } from './Root/Route'
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <Route />
      <Toaster />

    </div>
  )
}

export default App
