import { Button, TextField } from "@mui/material";
import SplitLayout from "../layouts/SplitLayout";
import { useRef, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import getAuthStatus from "../auth"
// import dotenv from 'dotenv';
// dotenv.config();

const url = 'http://localhost:3000/';
// const reqoptions = { withCredentials: true }
async function loginUser(credentials){
  const response = await axios.post(url+ 'login',credentials);
  console.log(response);
  return response;
}

async function getAuthStatus() {
  try {
    const response = await axios.get(url+"authStatus");
    return response.data; // Assuming the data you need is in response.data
  } catch (error) {
    console.error("Error:", error);
    return null; // Handle errors gracefully
  }
}


function LoginComponent() {
  const navigate = useNavigate();
  const rollNo = useRef();
  const password = useRef();
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(rollNo.current)
    const userdetails = {
      roll: rollNo.current.value,
      password : password.current.value
    };
    console.log(userdetails);
    try{
      const loginResponse = await loginUser(userdetails)
      const code = loginResponse.status;
      console.log(code)
      if(code === 200){
        const res = await axios.get(url + 'setcookie');
        console.log(res)
        // const res = await getAuthStatus();
        // console.log(res);
      }else{
        alert("either user does not exist or password is incorrect")
      }
    }catch(err){
      alert('try again later, Network issue')
      console.log(err);
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Roll Number"
          fullWidth
          required
          inputRef={rollNo}
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          inputRef={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Register
        </Button>
      </form>
      <small>
        Already have an account? <Link to="/login">Login Here</Link>
      </small>
    </>
  );
}

function Login() {
  return <SplitLayout firstComponent={<LoginComponent />} />;
}

export default Login;
