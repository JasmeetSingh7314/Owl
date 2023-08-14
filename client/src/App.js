import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './page/Home.jsx'
import Collection from './page/Collection.jsx'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
