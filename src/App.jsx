import React from 'react'
import './App.css'
import Navbar from './Compontants/Landing/Navbar'
import Home from './Compontants/Home/home'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
  </>
}


