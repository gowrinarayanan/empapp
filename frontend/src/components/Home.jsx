import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

import Navbar from './Navbar';


const Home = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  // Fetch the employee data only once when component mounts
  useEffect(() => {
    axiosInstance.get('http://localhost:3000/employee/')
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, []); // Empty dependency array to run only on mount

  // Handle delete function
  const handleDelete = (_id) => {
    axiosInstance.delete(`http://localhost:3000/employee/delete/${_id}`)
      .then(() => {
        // Remove the deleted employee from state
        setEmployee((prevEmployees) => prevEmployees.filter(emp => emp._id !== _id));
        alert('are u sure');
      })
      .catch((err) => {
        console.error("Error deleting employee:", err);
      });
  };

  // Handle update function
  const handleUpdate = (employee) => {
    navigate('/add', { state: { employee } });
  };

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper} className="table-container" sx={{padding:2}}>
        <Table sx={{ minWidth: 700 }} aria-label="employee table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">DEPARTMENT</TableCell>
              <TableCell align="right">LOCATION</TableCell>
              <TableCell align="right">SALARY</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.map((employe) => (
              <TableRow key={employe._id} className="table-row">
                <TableCell className="table-cell" component="th" scope="row">
                  {employe.employeeID}
                </TableCell>
                <TableCell align="right" className="table-cell">{employe.name}</TableCell>
                <TableCell align="right" className="table-cell">{employe.department}</TableCell>
                <TableCell align="right" className="table-cell">{employe.location}</TableCell>
                <TableCell align="right" className="table-cell">{employe.salary}</TableCell>
                <TableCell align="right" className="table-actions">
                  <Button
                    variant="contained"
                    className="delete-button"
                    onClick={() => handleDelete(employe._id)}
                  >
                    DELETE
                  </Button>
                  <Button
                    variant="contained"
                    className="edit-button"
                    onClick={() => handleUpdate(employe)}
                  >
                    EDIT
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
  

};

export default Home;