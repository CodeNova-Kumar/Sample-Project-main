import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPAge from './Components/LoginPAge.jsx'
import About from './Components/About'
import './App.css'
import Signup from './Components/Signup'
import Home from './Components/Home'
// import LoginPAge from './Components/LoginPAge'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<LoginPAge />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App