import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Personal from './Personal.js';
import Education from "./Education.js";
import Project from "./Project.js";
import Experience from "./Experience.js";
import ExtraDetails from "./ExtraDetails.js";

const ModalBackground = styled.div`
  width:100%;
  height:100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  top:0;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
width: 800px;
height: 550px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
top:10;
position: absolute;
display:flex;
flex-direction:column;
z-index: 10;
border-radius: 10px;
`;

const CloseModalButton = styled.span`
cursor: pointer;
position: absolute;
top: 25px;
right: 20px;
width: 52px;
height: 52px;
font-weight:500;
font-size:20px;
color:grey;
padding: 0;
z-index: 10;

&:hover{
    color: red;
}
`;

const FormHead = styled.div`
  width:800px;
  height:45px;
  margin-top:15px;
  padding:5px;
  box-shadow: 0px 0px 4px rgba(15, 15, 15, 0.19);
  font-size:2rem;
  text-align:center;
  font-weight:500;
  color:blue;
  font-family:monospace;
`;

const FormFooter = styled.div`
  width:800px;
  height:65px;
  margin-top:15px;
  padding:5px;
  box-shadow: 0px 0px 4px rgba(15, 15, 15, 0.19);
  font-size:20px;
  text-align:center;
  font-weight:500;
  color:grey;
  display:flex;
  flex-direction:column;
  font-family:monospace;
`;

const PreviousButton = styled.button`
width:107px;
height:40px;
border:none;
border-radius:5px;
background: rgb(15,243,49);
color:#fff;
font-size:17px;
font-weight:600;
margin-bottom:7px;
margin-right:10px;

&:hover{
  border: 2px solid rgb(15,243,49);
  color:rgb(15,243,49);
  background-color:#fff;
}
`;

const NextSubmitButton = styled.button`
width:107px;
height:40px;
border:none;
border-radius:5px;
background: rgb(15,243,49);
color:#fff;
font-size:17px;
font-weight:600;
margin-bottom:7px;

&:hover{
  border: 2px solid rgb(15,243,49);
  color:rgb(15,243,49);
  background-color:#fff;
}
`;


const FormModal = ({ showModal, setShowModal}) => {

   const modalRef = useRef();
   
   const [page, setPage] = useState(0);

   const FormTitles = ["Personal Profile","Education", "Project", "Experience", "Extra-Details"];

    const closeModal = e=>{
        if (modalRef.current === e.target) {
            setShowModal(false);
          }
    }
    
    const FormDisplay = ()=>{
       if (page === 0) {
          return <Personal/> 
       }else if(page === 1){
          return <Education/>
       }else if(page === 2){
          return <Project/>
       }else if(page === 3){
          return <Experience/>
       }else{
          return <ExtraDetails/>
       }
    }

  return (
    <>
    {
        showModal ? <ModalBackground onClick={closeModal} ref={modalRef}>
        <ModalWrapper>
            <CloseModalButton onClick={()=>setShowModal(!showModal)}>X</CloseModalButton>
            <FormHead>{FormTitles[page]}</FormHead>
            {
              FormDisplay()
            }
            <FormFooter>
              <div>
              <PreviousButton onClick={()=>{
                if (page ===0) {
                  return;
                } else {   
                  setPage((currentPage)=> currentPage-1);
                }
              }}>Previous</PreviousButton>
              <NextSubmitButton onClick={()=>{
                  setPage((currentPage)=> currentPage+1);
              }}>{page === FormTitles.length-1? "Submit":"Next" }</NextSubmitButton>
              </div>
              <div>
              Page {page+1}
              </div>
              </FormFooter>
        </ModalWrapper>

      </ModalBackground>:null
    }
    </>
  )
}

export default FormModal;