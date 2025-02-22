import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Context/ContextProvider.jsx'
import TaskProvider from './Context/TaskProvider.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <TaskProvider>
        <QueryClientProvider client={queryClient}>
         <App />
        </QueryClientProvider>
      </TaskProvider>
    </ContextProvider>
  </StrictMode>,
)
