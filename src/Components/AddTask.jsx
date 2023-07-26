import React from 'react'
import './assets/addTask.css'
import { useState } from 'react';
function AddTask(){
    const [toDoList, settoDoList] = useState([]);
    console.log(typeof toDoList);
    const [newTask, setnewTask] = useState('');
    const task = (e)=>{
        const inputValue = e.target.value;
        setnewTask(inputValue);
    };
    const addTask = ()=>{
        const myTask = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id+1,
            myTask:newTask,
        };
        const newToDoList = [...toDoList,myTask]
        settoDoList(newToDoList);
    };
    const deleteTask = (id)=>{
         const newTodoList = toDoList.filter((myTask)=> myTask.id !== id);
         settoDoList(newTodoList);
    }
    return(
        <>
        <div className="addTask">
            <input onChange={task}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="list">
            {toDoList.map((task)=>{
                return <li>
                            <p>{task.myTask}</p>
                            <button onClick={()=>{deleteTask(task.id)}}>X</button>
                        </li>
            })}
        </ul>
        </>
    );
}

export default AddTask;