import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Videos from './pages/Videos.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<BrowserRouter>
		<App/>

	</BrowserRouter>
    
  </StrictMode>,
)
