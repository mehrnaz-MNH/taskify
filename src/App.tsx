import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Head } from './Head'
import { Input } from './Input'
import { Todo } from './model'

const App : React.FC = () => {

   const [todo , setTodo] = useState<string>("")
   const [todos , setTodos] = useState<Todo[]>([])

   const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos , {
        id: Date.now(),
        task : todo ,
        isDone: false,
      }])
      setTodo("")
    }

   }

   console.log(todos)

  return (
 <div>
      <Head/>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
 </div>
  )
}

export default App
