import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Head } from './Head'
import { Input } from './Input'

const App : React.FC = () => {

   const [todo , setTodo] = useState<string>("")

  return (
 <div>
      <Head/>
      <Input todo={todo} setTodo={setTodo}/>
 </div>
  )
}

export default App
