import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Context/ContextProvider.jsx'
import TaskProvider, { TaskContext } from './Context/TaskProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <TaskProvider>
         <App />
      </TaskProvider>
    </ContextProvider>
  </StrictMode>,
)
