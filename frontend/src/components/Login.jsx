import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    const[user,setUser]=useState({username:'',password:''})
    
    let updateUser=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate();
    const sendData=(event)=>{
    
        axios.post("http://localhost:3000/user/login",user)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token",res.data.usertoken)
                navigate('/home')
            }
        })
    }  

  return (
    <div className="login-container">
    <Box className="login-box">
        <Stack spacing={4} direction="column" className="login-form">
            <Typography variant='h4' className="login-heading">Login</Typography>
            <TextField 
                id="outlined-username" 
                label="Username" 
                name="username" 
                value={user.username} 
                variant="outlined" 
                onChange={updateUser} 
                className="login-input"
            />
            <TextField 
                id="outlined-password" 
                label="Password" 
                name="password" 
                type="password" 
                value={user.password} 
                variant="outlined" 
                onChange={updateUser} 
                className="login-input"
            />
            <Button variant="contained" onClick={sendData} className="login-button">
                Login
            </Button>
        </Stack>
    </Box>
</div>
  )
}

export default Login