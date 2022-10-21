import React from 'react'
import '../css/todoItem.css'

const TodoItem: React.FC<Todos> = (props) => {
  
  return (
    <>
        {
            props.todos.length > 0 ?
            props.todos.map(todo => {
                return (<li 
                  className={todo.complete ? 'complete' : ''}>
                  <span>{todo.name}</span>
                    <div className="actions">
                      <input type="checkbox" 
                        name="checkt" 
                        onChange={() => props.setComplete(todo.id)}
                        checked={todo.complete ? true : false} />
                      <button onClick={() => props.deleteTodo(todo.id)}>
                          Trash
                      </button>
                   </div>
                </li>)
            }) : <li>No data</li>
        }
    </>
  )
}

export default TodoItem
