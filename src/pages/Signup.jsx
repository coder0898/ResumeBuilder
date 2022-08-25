import React, { useState } from 'react';
import { BoldLink, BoxContainer, FormContainer, FormInput, FormLabel, MutedLink, SubmitButton } from './common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Signup = ({ switchToLogin }) => {

  const [signDetails, setSignDetails] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignDetails({ ...signDetails, [name]: value });
    // console.log(`${name} ${value}`);
  }

  const [data,setData] = useState([]);

  const submitSignup = (e) => {
    e.preventDefault();
    if (signDetails.password.length < 6) {
      toast.warning("Please your password length should be min 6", {
        position: "top-center"
      });
    } else {
      if (signDetails.password == signDetails.confirmPassword) {
        console.log(signDetails);
        localStorage.setItem("auth", JSON.stringify([...data, signDetails]));
        axios.post("http://localhost:5000/signup",signDetails).
          then((response)=>{
            console.log(response);
            console.log(response.data.message);
            const msg = response.data.message;
            toast.success(msg,{
             position:"top-center"
            });  
          }).catch((err)=>{
            console.log(err);
          });
          setSignDetails({
            fname:"",
            email:"",
            password:"",
            confirmPassword:""
         });
      } else {
        // alert("your confirm password mismatch");
        toast.error("your password mismatch confirm password!", {
          position: "top-center"
        });
        setSignDetails({
          fname: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
    }
  }

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <FormLabel>Full Name:</FormLabel>
          <FormInput type='text' name='fname' value={signDetails.fname} onChange={(e) => handleChange(e)} />
          <FormLabel>Email:</FormLabel>
          <FormInput type='email' name='email' value={signDetails.email} onChange={(e) => handleChange(e)} />
          <FormLabel>Password:</FormLabel>
          <FormInput type='password' name='password' value={signDetails.password} onChange={(e) => handleChange(e)} />
          <FormLabel>Confirm Password:</FormLabel>
          <FormInput type='password' name='confirmPassword' value={signDetails.confirmPassword} onChange={(e) => handleChange(e)} />
        </FormContainer>
        <SubmitButton type='submit' onClick={submitSignup}>Signup</SubmitButton>
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToLogin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  )
}

export default Signup;