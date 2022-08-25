import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 500px;
  max-height:450px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left:40px;
  padding:7px;
  box-shadow: 0px 0px 4px rgba(15, 15, 15, 0.19);
`;

export const FormContainer = styled.form`
  display:flex;
  flex-direction:column;
  padding:5px;
`;

export const FormLabel = styled.label`
  font-size:16px;
  color:rgb(15,134,243);
  margin-bottom:2px;
  text-align:left;
`;

export const FormInput = styled.input`
  height:45px;
  border:none;
  border-bottom:3px solid rgb(15,134,230);
  outline:none;
  color: rgb(15,134,240);
  font-size:15px;
  margin-bottom:15px;
`;

export const SubmitButton = styled.button`
  width:107px;
  height:40px;
  border:none;
  border-radius:5px;
  background-color:rgb(15,134,243);
  color:#fff;
  font-size:17px;
  margin-bottom:7px;
  margin-left:185px;

  &:hover{
    border: 2px solid rgb(15,134,243);
    color:rgb(15,134,243);
    background-color:#fff;
  }
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: Black;
  font-weight: 500;
  text-decoration: none;
  margin-bottom:0;
  margin-top:6px;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(15,134,243);
  font-weight: 700;
  text-decoration: none;
  margin: 0 4px;
`;