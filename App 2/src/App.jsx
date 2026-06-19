import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import InputData from './components/InputData'
import Example from './components/Example'
import TableData from './components/TableData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateBasics />       */}
      {/* <Counter/> */}
      {/* <Example/> */}
      {/* <InputData/> */}
      <TableData/>
    </>

  )
}

export default App
