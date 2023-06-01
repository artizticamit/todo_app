import React, { useEffect } from 'react'
import './TodoList.css'
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import { useState, useRef } from 'react';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
            todos.map(todo => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            })
        )
        console.log(todo)
    }

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter(todo => (todo.id !== id))
        )
    }

    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        setTodos(
            todos.map(todo=>(
                todo.id===id?{...todo, todo:editTodo}:todo
            ))
            
        )
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)


    // to make it focus
    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit])

    return (
        <form className='todo-items' onSubmit={(e)=>{handleEdit(e, todo.id)}}>
            {
                edit?(
                    <input ref={inputRef} className='todo-items-text' value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}/>
                ):todo.isDone ? (
                        <s className='todo-items-text'>{todo.todo}</s>
                    ) :
                    (
                        <span className='todo-items-text'>{todo.todo}</span>
                    )
            }
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => { handleDelete(todo.id) }}>

                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => { handleDone(todo.id) }}>
                    <MdOutlineDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo