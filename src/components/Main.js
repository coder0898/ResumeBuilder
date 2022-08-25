import React, { useState } from 'react';
import styled from 'styled-components';
import FormModal from './FormModal.js';
import HeaderR from './HeaderR.js';

const MainBox = styled.div`
  width: 800px;
  max-height:450px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-top: 120px;
  margin-left:240px;
  padding:7px;
  box-shadow: 0px 0px 6px rgba(15, 15, 15, 0.19);
`;

const WelcomeMsg = styled.p`
  font-size:26px;
  font-family:cursive;
  font-weight:500;
`;

const Logotext = styled.span`
  font-weight:700;
  color: blue;
`;

const ResumePop = styled.button`
width:307px;
height:40px;
border:none;
border-radius:5px;
background: rgb(15,243,49);
color:#fff;
font-size:17px;
font-weight:600;
margin-bottom:7px;
margin-left:240px;

&:hover{
  border: 2px solid rgb(15,243,49);
  color:rgb(15,243,49);
  background-color:#fff;
}
`;

const Main = () => {

  const [showModal, setShowModal ] = useState(false);

  const openForm = (e)=>{
    e.preventDefault();
    setShowModal(!showModal);
  }
  
  return (
    <>
      <HeaderR/>
       <MainBox>
          <WelcomeMsg>Welcome to <Logotext>ResumeBuilder</Logotext> site , Which provide preformatted resume, you just have to fill up the form.</WelcomeMsg>
          <ResumePop onClick={openForm}>Begin Resume Building</ResumePop>
       </MainBox>
       <FormModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default Main;