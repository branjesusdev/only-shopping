import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from '@infrastructure/presentation/App.jsx'
import '@/app/$globals.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
