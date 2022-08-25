import React, { useState } from 'react';
import { BoldLink, BoxContainer, FormContainer, FormInput, FormLabel, MutedLink, SubmitButton } from './common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = ({ switchToSignup }) => {

  const [loginDetails, setLoginDetails] = useState({
    email:'',
    password:''
  })

  const history = useNavigate();

  const handleInput = (e)=>{
    const {name, value} = e.target;
    // console.log(`${name} ${value}`);
    setLoginDetails({...loginDetails, [name]:value});
    // console.log(loginDetails);
  }

  const submitLogin =(e)=>{
    e.preventDefault();
    console.log("cick");
    const getAuthentication = localStorage.getItem('auth');
    // console.log(getAuthentication);
    if (getAuthentication && getAuthentication.length) {
      const userData = JSON.parse(getAuthentication);
      const loginData = userData.filter((el,k)=>{
       return el.email === loginDetails.email && el.password === loginDetails.password;
      });
      if (loginData.length == 0) {
        toast.error("invalid details",{
          position:"top-center"
        });
      } else {
        console.log("login Successfully")
        axios.post("http://localhost:5000/login",loginDetails).
           then((response)=>{
            console.log(response);
            const msg = response.data.message;
            toast.success(msg,{
             position:"top-center"
            });
           }).catch((err)=>{
            console.log(err);
           });
           history("/home");
      }
    }
    setLoginDetails({
      email:'',
      password:''
    });
  } 

  return (
    <>
      <BoxContainer>
        <FormContainer >
          <FormLabel>Email:</FormLabel>
          <FormInput type='email' name='email' value={loginDetails.email} onChange={(e)=>handleInput(e)} />
          <FormLabel>Password:</FormLabel>
          <FormInput type='password' name='password' value={loginDetails.password} onChange={(e)=> handleInput(e)} />
        </FormContainer>
        <SubmitButton type="submit" onClick={submitLogin}>Submit</SubmitButton>
        <MutedLink href="#">
          Don't have an accoun?
          <BoldLink href="#" onClick={switchToSignup}>
            Signp
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  )
}

export default Login;