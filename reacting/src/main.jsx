import { StrictMode } from 'react' // Importing StrictMode for better debugging and warnings
import { createRoot } from 'react-dom/client' // Importing createRoot for rendering the React application
import { BrowserRouter } from 'react-router-dom'
import './index.css' // Importing global styles
import App from './App.jsx' // Importing the main App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
