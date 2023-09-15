import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Panel from './components/Panel/Panel'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </>
  )
}

export default App



