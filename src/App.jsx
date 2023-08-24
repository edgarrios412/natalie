import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>}/>
        <Route path="/admin" element={<h1>Admin</h1>}/>
      </Routes>
    </>
  )
}

export default App
