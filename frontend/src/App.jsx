import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'


import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <br />
      <br />
      <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoutes/>}>
        <Route path = '/home' element = {<Home/>}></Route>
        <Route path = '/add' element = {<Add/>}></Route>
      </Route>
      
      
      
     </Routes>
      
      
    </>
  )
}

export default App