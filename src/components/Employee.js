import { useRef, useState } from 'react';
import axios from 'axios';
import "./Employee.css";

export default function MyApp() {
    const [name , setname]=useState("")
    const [phone , setphone]=useState("")
    const [email , setemail]=useState("")
    const [department , setdepartment]=useState("")
    const [date , setdate]=useState("")
    const [salary , setsalary]=useState("")
    
    const image= useRef(null)

    
    const HandleSubmit= (e)=>{
      e.preventDefault()
      const formData=new FormData();
       // FormData is a built-in JavaScript object that provides a simple way to construct and send an HTTP request that includes form data, such as text inputs, file uploads, and other types of data.
       formData.append('image', image.current.files[0]);
       formData.append('name', name);
       formData.append('email', email);
       formData.append('date', date);
       formData.append('salary', salary);
       formData.append('department', department);
       formData.append('phone', phone);
       
   
      axios.post("http://localhost:3001/employee",formData).then((e)=>{
        window.location.href = 'http://localhost:3000';
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
          <th>Phone</th>
          <th>Email</th>
          <th>Department</th>
          <th>Date</th>
          <th>Salary</th>
          <th>Image</th>
        </tr>
      </table>
      <div className='input-box'>
      <input type="text" placeholder="Enter name" value={name} onChange={((e)=>setname(e.target.value))} required></input>
      <input type="text" placeholder="Enter phone" value={phone} onChange={((e)=>setphone(e.target.value))} required></input>
      <input type="text" placeholder="Enter email" value={email} onChange={((e)=>setemail(e.target.value))} required></input>
      <input type="text" placeholder="Enter department" value={department} onChange={((e)=>setdepartment(e.target.value))} required></input>
      <input type="text" placeholder="Enter date" value={date} onChange={((e)=>setdate(e.target.value))} required></input>
      <input type="text" placeholder="Enter salary" value={salary} onChange={((e)=>setsalary(e.target.value))} required></input>
      <input type="file"  ref={image} ></input>
      </div>
      <button className='btn'>
        Submit
      </button>
        </div>
      </form>
    </div>
  );
}