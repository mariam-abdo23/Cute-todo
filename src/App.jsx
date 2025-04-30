import React from 'react'
import './App.css'
import Navbar from './Compontants/Landing/Navbar'
import Footer from './Compontants/Landing/Footer'
import Home from './Compontants/Home/home'
import { Route, Routes } from 'react-router-dom'
import Tasks from './Compontants/AllTasks/Tasks'
import PersonalPage from './Compontants/PersonalPage/PersonalPage'
import Setting from './Compontants/Setting/Setting'


export default function App() {
  return <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/tasks' element={<Tasks />}  />
    <Route path='/personal-page' element={<PersonalPage />}  />
    <Route path='/Setting' element={<Setting />}  />
  </Routes>
  <Footer />
  </>
}


