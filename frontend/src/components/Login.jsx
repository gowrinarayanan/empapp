import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState({
      username:'',
      password:''
 
    })
    // const navigate=useNavigate()
let updateUser=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
}
const navigate=useNavigate()
let sendData=(event)=>{
//   if ((user.Username=='course')&& (user.Password=='112233')) {
//     localStorage.setItem("Username","admin")
//     navigate('./home')
    
//   } else {
//     (alert('invalid credentials'))
//   }
// }
// let validateUser=()=>{
    axios.post('http://localhost:3000/user/login',user).then((res)=>{
        console.log(res)
        alert(res.data.message)
        if(res.data.usertoken){
            localStorage.setItem("token",res.data.usertoken)
            navigate('/home')
        }

    })
}

   return (
     <>
     <h1>LOGIN</h1> <br />
     <TextField required id="standard-basic" label="username"  type="username" name="username" value={user.username} onChange={updateUser}variant="outlined" /><br /><br />
     <TextField required id="standard-basic" label="password" type="password" name="password" value={user.password} onChange={updateUser} variant="outlined" /><br /><br />
     <Button variant="contained" onClick={sendData}>submit</Button><br />
 </>
 
   
  )
}

export default Login