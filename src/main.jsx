import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import OnboardingPrincipal from './pages/dashboard.jsx'
import Dashboard from './pages/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard/>
  </StrictMode>,
)
