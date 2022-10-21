import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForms from './components/TodoForms';
import TodoItem from './components/TodoItem';
import useLocalStorage from './components/useLocalStorage';
import axios from 'axios';

function App() {

  const [ state, setState ] = useState(useLocalStorage())

  const handleAddTodo : AddTodo = (todo: Todo) :void => {
    axios.post('http://localhost:3001/todos/add', todo)
    .then((response) => {
      console.log(response)
      setState([...state, todo])
    })
    .catch(err => console.log("error sending data!", err))
  }
  const handleDeleteTodo : DeleteTodo = (id: number) : void => {
    axios.delete(`http://localhost:3001/todos/del/${id}`)
        .then(res => {
          console.log(res.data)
          setState(state.filter(todo => {
            return todo.id !== id
          }))
        })
        .catch(err => console.error("may error", err))
  }

  const handleSetComplete: SetComplete = (id: number) : any => {
    axios.put(`http://localhost:3001/todos/update/${id}`)
      .then(res => {
        console.log(res.data)
        setState(state.map(todo => todo.id === id ? {...todo, complete: !todo.complete } : todo))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:3001/todos/')
        .then((data : any) => {
          setState(data.data)
          console.log("data: ", data)
          localStorage.setItem("todos", JSON.stringify(state))
        })
        .catch(err => console.error("Unknown Error"))
  },[0])


  return (
    <div className="App">
      <h1>First Todo List</h1>
      <div className="card">
        <TodoForms addTodo={handleAddTodo}/>
        <TodoItem todos={state} setComplete={handleSetComplete} deleteTodo = {handleDeleteTodo}/>
      </div>
    </div>
  );
}

export default App;
