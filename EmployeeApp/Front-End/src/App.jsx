import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEmp from './components/ViewEmp'
import AddEmp from './components/AddEmp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ViewEmp/>}/>
        <Route path='/a' element={<AddEmp/>}/>

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
