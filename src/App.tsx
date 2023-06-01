import React from 'react';
// import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import {useState} from "react"
import { Todo } from './model';
import TodoList from './components/TodoList'

const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  // const [todoid, setTodoid] = useState<number>()


  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    console.log(todo)
    if(todo)
    {
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("")
    }
  };
  // console.log(todos)

  // const handleisDone = ()=>{
    
  // }

  return (
    <div className="App">
      <div className="header">Todo</div>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
