import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo, deleteAllTodo } from './todoSlice';

function AddTodo() {
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    const handleAddTask=()=>{
        if(task.trim()){
        dispatch(addTodo(task));
        setTask("")
        }
    }
    const handleDeleteAll=()=>{
        dispatch(deleteAllTodo())
    }
  return (
    <div className='add-todo'>
        <input type="text" placeholder='Add a new task..' value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAddTask}>Add Task</button>
        <button className="delete-all" onClick={handleDeleteAll}>Delete All</button>
     
    </div>
  )
}

export default AddTodo
