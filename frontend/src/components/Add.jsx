import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosinstance from '../axiosinterceptor';

const employee = () => {
  
    const [employee,setEmployee]=useState({
        employeeId:'',
        employeeName:'',
        Designation:'',
        salary:'',
        Department:'',
        Location:''
    })
    
  const fetchValue=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  // const sendData=()=>{
    // console.log(course)
  // }
const location=useLocation()
const navigate=useNavigate()
let sendData=()=>{
  if (location.state!=null) {
    axiosinstance.put('http://localhost:3000/employee/edit/'+location.state.employee._id,employee).then((res)=>{
      alert('data updated');
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
   }
   else{
    axiosinstance.post('http://localhost:3000/employee/addemployee',employee).then((res)=>{
      navigate('/')
   }).catch((error)=>{
    console.log(error)
   })
   }
}
useEffect(()=>{
  if(location.state!=null){
    setEmployee({...employee,
        employeeId:location.state.employee.employeeId,
        employeeName:location.state.employee.employeeName,
        Designation:location.state.employee.Designation,
        salary:location.state.employee.salary,
        Department:location.state.employee.Department,
        Location:location.state.employee.location,
    })
  }
},[])


    return (<div>
      <h2>Add employee</h2> 
      <Box
      
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
      
        <TextField id="outlined-basic"
         label="employeeId" 
         variant="outlined" 
         name='employeeId'
         value={employee.employeeId}
         onChange={fetchValue} /><br />
  
        <TextField id="filled-basic" 
         label="employeeName" 
         variant="outlined" 
         name='employeeName'
        value={employee.employeeName}
         onChange={fetchValue}/><br />
  
        <TextField id="standard-basic"
          label="Designation" 
          variant="outlined" 
          name='Designation' 
          value={employee.Designation}
          onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic"
         label="salary" variant="outlined"  
         name='salary'
         value={employee.salary}
         onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic" 
         label="Department"
         variant="outlined" 
         name='Department'
         value={employee.Department} 
         onChange={fetchValue}  /><br />

        <TextField id="outlined-basic" 
         label="Location"
         variant="outlined" 
         name='Location'
         value={employee.Location} 
         onChange={fetchValue}  /><br />
  
        <Button variant="contained" onClick={sendData}>Submit</Button>
        
     
      </Box>
      </div>
    )
  }
  
  export default employee