import {createSlice} from '@reduxjs/toolkit';

const todosSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload}); 
        },
        updateTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const todo=state.find((todo)=>todo.id===id)
            if(todo){
                todo.text=newText
            }
        },
        deleteTodo:(state,action)=>{
            return state.filter((todo)=>todo.id!==action.payload)
        },
        deleteAllTodo:()=>[]
    }
})


export default todosSlice.reducer;
export const {addTodo,updateTodo,deleteTodo,deleteAllTodo}=todosSlice.actions;
