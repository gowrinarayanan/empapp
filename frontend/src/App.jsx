import { useState } from 'react'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path = '/' element = {<Login/>}></Route> 
      <Route element={<PrivateRoute/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path = '/add' element = {<Add />}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App