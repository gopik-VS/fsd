import { useState } from 'react'
import './App.css'
import Signup from './components/signup'
import Navbar from './components/navbar'
import Gridget from './components/Gridget'
import Cardget from './components/cardget'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>WELCOME REACT</h1>
    {/* <Signup/> */}
    <Navbar/> 
    <Routes>
    <Route path='/pro' element={<Gridget/>}/>
    <Route path ='/s' element={<Signup/>}/>
    <Route path ='/c' element={<Cardget/>}/>
    </Routes>
    {/* <Gridget/> */}
    {/* <Cardget/> */}
    </>
  )
}

export default App
