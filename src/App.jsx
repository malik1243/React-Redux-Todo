import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Addtodo from './Component/Addtodo'
import Todo from './Component/Todo'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <Addtodo/>
      <Todo />
    </>
  )
}

export default App