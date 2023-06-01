import React from 'react'
import { Todo } from '../model'
import './TodoList.css'
import SingleTodo from './SingleTodo'

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos})=>{
  return (
    <div className='todo-items-header'>
        {todos.map((todo)=>{
            return (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            )
        })}
    </div>
  )
}

export default TodoList