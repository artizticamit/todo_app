export interface Model{}


// import { useReducer} from 'react'
// import { Todo } from '../model'
// import {createContext} from 'react';

// interface initialStateType {
//     todos:Todo[]
// }

// const initialState = {
//     todos:[]
// }

// const TodoContext = createContext<{
//     state:initialStateType;
//     dispatch:React.Dispatch<any>;
// }>({
//     state:initialState,
//     dispatch: ()=>void
// });

// type Actions = 
// |{type:'add', payload:string}
// |{type:'remove', payload:number}
// |{type:'done', payload:number};



// const TodoReducer = (state:Todo[], actions:Actions)=>{
//     switch (actions.type){
//         case "add":
//             return [
//                 ...state,
//                 {id:Date.now, todo:actions.payload, isDone:false}
//             ]
//         case "remove":
//             return state.filter(todo=>{todo.id!==actions.payload})
        
//         case "done":
//             return state.map(todo=>{todo.id===actions.payload?{...todo, isDone:!todo.isDone}:todo})
//         default:
//             return state;
//     }

// }

// const useTodoContext = (initialState:initialStateType)=>{
//     const [state, dispatch] = useReducer(TodoReducer, initialState)


//     return {state, dispatch}
// }

// type useTodoContextType = ReturnType<typeof useTodoContext>