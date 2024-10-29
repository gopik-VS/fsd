import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import DisplayName from './components/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Statebasics/> */}
      <Routes>
        <Route path='/s' element={<Statebasics/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='d' element={<DisplayName/>}/>
      </Routes>
    </>
  )
}

export default App
