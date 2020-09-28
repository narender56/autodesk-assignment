import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

import Routes from './routes/routes'

import Footer from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="w100p h100p pb100">
        <Routes />
        <ToastContainer />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
