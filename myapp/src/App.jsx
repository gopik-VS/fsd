import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome react</h1>
     {/* <Login/> */}
     <Signup/>
    </>
  )
}

export default App