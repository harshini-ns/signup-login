import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route element={<Home/>} path="/" />
        <Route element={<Login/>} path="/login" />
        <Route element={<Signup/>} path="/signup" />
        <Route element={<Profile/>} path="/profile" />
        
      </Routes>
    </BrowserRouter>
    
  )
}

