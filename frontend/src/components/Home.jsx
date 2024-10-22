import React, { useEffect, useState } from 'react'
import {Button,Card,CardActions,CardContent,CardMedia,Grid2,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import axiosinstance from '../axiosinterceptor';

const Home = () => {

    const [rows,setRows]=useState([])
useEffect(()=>{
axiosinstance.get('http://localhost:3000/employee/').then((res)=>{
  setRows(res.data)

})


},[])
const deleteEmployee=(p)=>{
   axiosinstance.delete('http://localhost:3000/employee/delete/'+p).then((res)=>{
    alert('deleted');
    window.location.reload();
  })
}
const navigate=useNavigate()
function updateEmployee(employee){
navigate('/add',{state:{employee}})
}

    return (
      
      <Grid2  container spacing={4}>
        
    {rows.map((row) => (
      <Grid2 rows xs={12} sm={6} md={4} key={row.emplyeeId}>
        <Card className='card3'  sx={{display:'flex',flexDirection:'column',height:'100%',fontFamily:'sans-serif',width:400,marginTop:'18%',backgroundColor:"#E5D9F2",borderRadius:5,
          boxShadow:'0 0 10px rgba(0,0,0,0,0.2)','&:hover':{boxShadow:'0 0 10px rgba(0,0,0,1.5'}}}>
          {/* <CardMedia  */}
             {/* image={row.CourseImage} */}
             {/* alt={row.emplyeeId} */}
            {/* sx={{height:250}} */}
            {/* // image={row.image}  External image URL */}
           
           {/* />  */}
          <CardContent  sx={{flex:'10 auto'}}>
            <Typography fontSize={'130%'} gutterBottom variant="h5" component="div">
              {row.emplyeeId}
            </Typography>
             <Typography fontSize={'130%'} variant="body2" color="text.secondary">
              <b>EmployeeName: </b>{row.employeeName} 
               </Typography> 
              <Typography  fontSize={'130%'} variant="body2" color="text.secondary">
              <b>Designation </b>      {row.Designation}
              
            </Typography>
            <Typography  fontSize={'130%'} variant="body2" color="text.secondary">
            <b>Salary: </b>{row.salary}
              
            </Typography> 
             <Typography fontSize={'130%'} variant="body2" color="text.secondary">
                <b>Department: </b> {row.Department} 
             </Typography>
             <Typography fontSize={'130%'} variant="body2" color="text.secondary">
                <b>Location: </b> {row.Location} 
             </Typography> 
            
              <CardActions>
             <Button style={{marginLeft:'80px'}} onClick={()=>{updateEmployee(row)}}  variant="outlined" color="success"   >
             Update </Button> 
             <Button  onClick={()=>{deleteEmployee(row._id)}} variant="outlined" color="error" >
             delete </Button>
             </CardActions>
          </CardContent>
        </Card>
      </Grid2>
    ))}
  </Grid2>
    )
    
//     <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>employeeId</TableCell>
//           <TableCell align="right">employeeName</TableCell>
//           <TableCell align="right">Designation</TableCell>
//           <TableCell align="right">salary</TableCell>
//           <TableCell align="right">Department</TableCell>
//           <TableCell align="right">Location</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={row.employeeId}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.employeeId}
//             </TableCell>
//             <TableCell align="right">{row.employeeName}</TableCell>
//             <TableCell align="right">{row.Designation}</TableCell>
//             <TableCell align="right">{row.salary}</TableCell>
//             <TableCell align="right">{row.Department}</TableCell>
//             <TableCell align="right">{row.Location}</TableCell>
//             <Button onClick={()=>{updateEmployee(row)}}  variant="outlined" color="success"   >
//                  Update</Button> 
//                  <Button  onClick={()=>{deleteEmployee(row._id)}} variant="outlined" color="error" >
//                  delete </Button>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// );   
         
          
       

}

export default Home