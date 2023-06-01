import React from 'react'
import './InputField.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({ todo, setTodo ,handleAdd}) => {

    return (

        <form className='input-field-form' onSubmit={handleAdd}>
            <input className='input-field-text' type="input" value={todo} onChange={(e) => { setTodo(e.target.value) }} placeholder='enter a task' />
            <button className='input-field-btn'>ok</button>
        </form>

    )
}

export default InputField