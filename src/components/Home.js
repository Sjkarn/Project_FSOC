import { useState } from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Home.css';
import { useNavigate } from 'react-router-dom';


export default function MyApp() {
  const [name , setname]=useState("")
  const [phone , setphone]=useState("")
  const [email , setemail]=useState("")
  const [department , setdepartment]=useState("")
  const [imgfile, uploadimg] = useState([])
  	console.log("Image FIles",imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }

  const HandleSubmit= (e)=>{
    e.preventDefault()
    let obj={
      name:name,
      phone:phone,
      email:email,
      department:department,
      image:imgfile
    }
    axios.post("http://localhost:3001/employee",obj).then((e)=>{console.log(e)})
  }
  
    const navigate= useNavigate();
    function handleClick() {
      navigate("/register")
    }
  
  return (
    <div>
     <form onSubmit={HandleSubmit}>
        <div className='header'>
        <div className='account'>
          <AccountCircleIcon onClick={handleClick}/>
          </div>
          <div className='logo'>
            <AssignmentIcon />
          </div>
          <h1>Task Assigner</h1>
        </div>
        <div className='sidebar'>
          <div className='icon'>
            <AccountCircleIcon />
          </div>
          <h2>Employee</h2>
          <div className='task'>
            <ArticleIcon />
          </div>
          <h2>Task</h2>
        </div>
        <div className='box'>
          <button className='button'>
            Add Employee
          </button>
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
      <input type="text" placeholder="Enter date" required></input>
      <input type="text" placeholder="Enter salary" required></input>
      <input type="file"  onChange={imgFilehandler} ></input>
      </div>
      <button className='btn'>
        Submit
      </button>
        </div>
      </form>
    </div>
  );
}