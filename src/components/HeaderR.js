import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HeaderBar = styled.div`
  background: rgb(15,134,243);
  background: linear-gradient(270deg, rgba(15,134,243,1) 20%, rgba(18,90,243,0.9640231092436975) 100%);
  padding:6px;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`;

const HeaderLogo =styled.h1`
  color:#fff;
  font-size:25px;
  font-family:monospace;
  margin-left:20px;
  font-weight:600;
  text-align:left;
`;

const LogoutButton = styled.button`
  width:107px;
  height:40px;
  border:2px solid rgb(15,134,243);
  border-radius:5px;
  background-color:#fff;
  color:rgb(15,134,243);
  font-size:17px;
  margin-bottom:7px;
  margin-left:185px;

  &:hover{
    border: none;
    color:#fff;
    background-color:rgb(15,134,243);
    font-weight:600;
  }
`;

const HeaderR = () => {
    const history = useNavigate();
    const userLogout = () => {
        history("/");
        toast.success("Log Out Successfully", {
          position: "top-center"
        });
      }
  return (
    <>
    <HeaderBar>
       <HeaderLogo>ResumeBuilder</HeaderLogo>
        <LogoutButton onClick={userLogout}>LogOut</LogoutButton>
    </HeaderBar>
  </>
  )
}

export default HeaderR;