import { useState } from 'react'

import Navbar from './components/Navbar.tsx'
import './App.css'
import Videos from './pages/Videos.tsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
	<div>
	  <Navbar/>
	  <Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/Videos" element={<Videos/>}/>
	  </Routes>
    </div>
  )
}

export default App
/*      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
		<h1 className="text-4xl font-bold text-blue-500">Hello Tailwind</h1>
*/