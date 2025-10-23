import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={Home} />
        {/* <Route path='/product' element={Home} />
        <Route path='/services' element={Home} />
        <Route path='/about' element={Home} /> */}
      </Routes>
      </BrowserRouter>
      <Hero/>
    </>
  )
}

export default App
