import React, { useState } from 'react'
import '../css/todoForms.css'

interface Props {
    addTodo: AddTodo
}
const TodoForms : React.FC<Props>= ({addTodo}) => {

    const [ todo, setTodo] = useState("")

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        if(!todo) return;
        let myTodo = {
            name: todo,
            complete: false,
            id: Date.now()
        }
        addTodo(myTodo)
        setTodo("")
    }
  return (
    <form onSubmit={handleOnSubmit}>
        <input type="text" 
        value ={todo} 
        placeholder="Enter a todo..."
        onChange={(e: React.FormEvent<HTMLInputElement>) => setTodo(e.currentTarget.value)} name='todo' id='todo'/>
        <input type="submit" />
    </form>
  )
}

export default TodoForms
