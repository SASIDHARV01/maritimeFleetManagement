import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import axios from 'axios';
// Paste your live Render URL here. NO slash at the end.
axios.defaults.baseURL = 'https://maritime-backend-fc90.onrender.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
