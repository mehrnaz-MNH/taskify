import React from 'react'


interface Props {
    todo : string ,
    setTodo : React.Dispatch<React.SetStateAction<string>> ,
    handleAdd : ( e : React.FormEvent) => void
}

export const Input : React.FC<Props> = ({todo , setTodo , handleAdd}) => {

  return (
    <div>
        <form onSubmit={(e) => handleAdd(e)}>
            <input
            placeholder='enter a task'
            type="text"
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit">Go</button>
        </form>
    </div>
  )
}


// one way to give types : export const Input = ({todo , setTodo} : Props)
