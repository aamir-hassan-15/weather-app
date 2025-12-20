import React from 'react'
import Weather from './components/Weather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import City from './pages/City'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:city' element={<City/>}/>
          </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App

