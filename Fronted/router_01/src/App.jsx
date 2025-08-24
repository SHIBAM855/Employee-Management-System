import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Wellcome from './Wellcome'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import UpdateButton from './UpdateButton'
import UpdateForm from './UpdateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Wellcome />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />}></Route>

        <Route path="/dashboard" element={<Dashboard/>}></Route>

        <Route path="/updateform" element={<UpdateForm/>}/>
      </Routes>
    </>
  );
}

export default App
