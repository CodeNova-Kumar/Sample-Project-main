import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App