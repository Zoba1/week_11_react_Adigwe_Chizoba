import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './Component/Form'
import './App.css'
import Header from './Component/Header'

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path ='/' element={<Form />} />

    </Routes>
    </div>
  )
}

export default App