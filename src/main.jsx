import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { QuizProvider } from './context/quiz'
import './assets/css/reset.css'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)