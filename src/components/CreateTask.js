import { useState } from 'react';
import axios from 'axios';
import "./CreateTask.css";

export default function MyApp() {
    const [name , setname]=useState("")
    const [task , settask]=useState("")
    const [task_details , settask_details]=useState("")
    const [assigned_date , setassigned_date]=useState("")
    const [start_date , setstart_date]=useState("")
    const [end_date , setend_date]=useState("")
    const [status , setstatus]=useState("")
    
    const HandleSubmit= (e)=>{
      e.preventDefault()
      
       
       let obj={
         name:name,
         task:task,
         task_details:task_details,
         assigned_date:assigned_date,
         start_date:start_date,
         end_date:end_date,
         status:status
      }
      axios.post("http://localhost:3001/task",obj).then((e)=>{
        window.location.href = 'http://localhost:3000/task_details';
      console.log(e)
    })
    }

return (
    <div>
     <form onSubmit={HandleSubmit}>
        
        <div className='box'>
        <table>
        <tr>
          <th>Name</th>
          <th>Task</th>
          <th>Details</th>
          <th>Assign Date</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
        </tr>
      </table>
      <div className='input-box'>
      <input type="text" placeholder="Enter name" value={name} onChange={((e)=>setname(e.target.value))} required></input>
      <input type="text" placeholder="Enter task" value={task} onChange={((e)=>settask(e.target.value))} required></input>
      <input type="text" placeholder="Enter task details" value={task_details} onChange={((e)=>settask_details(e.target.value))} required></input>
      <input type="text" placeholder="Enter assigned date" value={assigned_date} onChange={((e)=>setassigned_date(e.target.value))} required></input>
      <input type="text" placeholder="Enter start date" value={start_date} onChange={((e)=>setstart_date(e.target.value))} required></input>
      <input type="text" placeholder="Enter end date" value={end_date} onChange={((e)=>setend_date(e.target.value))} required></input>
      <input type="text" placeholder="Enter status" value={status} onChange={((e)=>setstatus(e.target.value))} required></input>
      </div>
      <button className='btn'>
        Submit
      </button>
        </div>
      </form>
    </div>
  );
}