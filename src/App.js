import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './Component/Form'
import './App.css'
import Header from './Component/Header'
import NavigationMenu from './Component/task2'
import Routing from './Component/task4'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <NavigationMenu />
        <Routing/>
      <Route path ='/' element={<Form />} />

    </Routes>
    </div>
  )
}

export default App