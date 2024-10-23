
import Box from '@mui/material/Box';

import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import axiosInstance from '../axiosinterceptor';

import Navbar from './Navbar';



const Add = () => {
  const[employee,setEmployee]=useState({employeeID:'',name:'',department:'', location:'',salary:''})

  const fetchValue=(event)=>{
  setEmployee({...employee,[event.target.name]: event.target.value});
  }
  




  
  const Navigate=useNavigate()
  const location=useLocation()
  const sendData=()=>{
    if(location.state!=null){
      axiosInstance.put('http://localhost:3000/employee/edit/'+location.state.employee._id,employee)
      .then((res)=>{
        alert('Data updated');
        Navigate('/home')

      }).catch((error)=>{
        console.log(error);
      })
    }
    else{
      axiosInstance.post('http://localhost:3000/employee/addEmployee',employee).then((res)=>{
        Navigate('/add')
        window.location.reload();
      }).catch((error)=>{
        console.log(error)
      })
    }

  }
  useEffect(()=>{
    if(location.state!=null){
      setEmployee({
        ...employee,
        employeeID:location.state.employee.employeeID,
        name:location.state.employee.name,
        department:location.state.employee.department,
        location:location.state.employee.location,
        salary:location.state.employee.salary,
       

      })
    }
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <Box>
          <TextField
            fullWidth
            label="ID"
            id="fullWidth"
            className="form-field"
            onChange={fetchValue}
            value={employee.employeeID}
            name="employeeID"
          /> <br />
          <TextField
            fullWidth
            label="NAME"
            id="fullWidth"
            className="form-field"
            onChange={fetchValue}
            value={employee.name}
            name="name"
          /> <br />
          <TextField
            fullWidth
            label="DEPARTMENT"
            id="fullWidth"
            className="form-field"
            onChange={fetchValue}
            value={employee.department}
            name="department"
          /> <br />
          <TextField
            fullWidth
            label="LOCATION"
            id="fullWidth"
            className="form-field"
            onChange={fetchValue}
            value={employee.location}
            name="location"
          /> <br />
          <TextField
            fullWidth
            label="SALARY"
            id="fullWidth"
            className="form-field"
            onChange={fetchValue}
            value={employee.salary}
            name="salary"
          /> <br /><br />
          <Button
            variant="contained"
            className="button"
            onClick={sendData}
          >
            {location.state != null ? 'Update Employee' : 'Add Employee'}
          </Button>
        </Box>
      </div>
    </>
  );
  
}

export default Add