import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from './todoSlice';

function TodoList() {
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    // console.log(todos);
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    const handleEditClick=(id,currentText)=>{
        setEditId(id);
        setEditText(currentText)
    }
    const handleSaveClick=(id)=>{
        if(editText.trim()){
        dispatch(updateTodo({id,newText:editText}));
        setEditId(null);
        setEditText("")
        }
    }
  return (
   <div className="todo-list">
    {todos.map((todo)=>(
        <div className="todo-item" key={todo.id}>
            {editId===todo.id ? (
                <> 
                <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                <button onClick={()=>handleSaveClick(todo.id)}>Save</button>
                </>
            ):
        ( 
            <>
            <span>{todo.text}</span>
            <button onClick={()=>handleEditClick(todo.id,todo.text)}>Edit</button>
        </>)    
        }
       
        <button className="delete-btn" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
    ))}
   </div>
  )
}

export default TodoList
