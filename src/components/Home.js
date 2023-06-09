import { useState, useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';




const columns = [
  { id: 'name', label: 'Employee Name', minWidth: 110 },
  { id: 'number', label: 'Number', minWidth: 70 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date of joining',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable() {
  const [taskDatas, setTaskData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/employee_details')
      .then((res) => {
        console.log(res.data.data);
        setTaskData(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching task data:', error);
      });
  }, []);

    const navigate= useNavigate();
    function handleClick() {
      navigate("/register")
    }
    
    const navigations= useNavigate();
    function handleclick1() {
      navigations("/employee")
    }

    const navigation= useNavigate();
    function handleClicks() {
      navigation("/task_details")
    }
    
  return (
    <div>
     
        <div className='header'>
          <p>Task Assigner</p>
          <div className='account'>
          <AccountCircleIcon onClick={handleClick}/>
          </div>
          <div className='logo'>
            <AssignmentIcon />
          </div>
          </div>
        <div className='sidebar'>
          <div className='icon'>
            <AccountCircleIcon />
          </div>
          <h2>Employee</h2>
          <div className='task'>
            <ArticleIcon onClick={handleClicks}/>
          </div>
          <h2>Task</h2>
        </div>
       
    <button className='switch' onClick={handleclick1}>
        Add Employee
    </button>  
    <Paper sx={{ width: '60%', overflow: 'hidden', margin: 'auto', mt: '70px', ml:'430px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell sx={{ margin:'auto', textAlign:'center', fontSize:'17.8px' }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {taskDatas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell sx={{margin:'auto',textAlign:'center',bgcolor:'whitesmoke'}}>{row.name}</TableCell>
                    <TableCell sx={{margin:'auto',textAlign:'center',bgcolor:'whitesmoke'}}>{row.phone}</TableCell>
                    <TableCell sx={{margin:'auto',textAlign:'center',bgcolor:'whitesmoke'}}>{row.email}</TableCell>
                    <TableCell sx={{margin:'auto',textAlign:'center',bgcolor:'whitesmoke'}}>{row.date}</TableCell>
                    <TableCell sx={{margin:'auto',textAlign:'center',bgcolor:'whitesmoke'}}>{row.salary}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={taskDatas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}