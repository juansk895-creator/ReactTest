import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Router } from 'react-router-dom'
import Router from '@/routes' // Importing the routes component

/*function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='min-h-screen bg-blue-700 flex items-center justify-center'>
      <h1 className='text-4xl font-bold text-white'>
        Tailwind CSS 4 funcionando en proyecto Reacting
      </h1>
    </div>
  )*/

  /*return ( // Original template code
    <>
      <div>
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/

//}

//export default App
export default function App() {
  return <Router /> // This will be replaced with the actual routes component
}


