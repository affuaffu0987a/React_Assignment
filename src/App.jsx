
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleShow from './Components/SingleShow'
import Booking from './Components/Booking'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='' element={<Navbar/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/single/:id' element={<SingleShow/>}/>
      </Route>
      <Route path='/booking/:id' element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App