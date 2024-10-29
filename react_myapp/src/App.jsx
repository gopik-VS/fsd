import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Usertable from './components/Usertable'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       {/* <Usertable/> */}
       <Routes>
        <Route path='/table' element={<Usertable/>}/>
       </Routes>
    </>
  )
}

export default App
