import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Navbar from './components/NavBar';
import StudentDetail from './components/StudentDetails';

function App() {

  return (
    <>
   {/*temporary*/}
     <Navbar />
      <div>
        <div>
          <Routes>
            <Route path='/Home' element={<Home />}>Home</Route>
            <Route path='/Register' element={<Register />}>Register</Route>
            <Route path='/students/:id' element={<StudentDetail />}>StudentDetail</Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
