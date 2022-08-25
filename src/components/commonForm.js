import styled from "styled-components";

export const FormContainer = styled.form`
  width: 700px;
  max-height:450px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left:40px
  box-shadow: 0px 0px 4px rgba(15, 15, 15, 0.19);
  padding:5px;
`;

export const InputContent = styled.div`
   display:grid;
   grid-template-columns:repeat(2, 1fr);
   grid-template-rows:repeat(3,1fr);
   grid-gap:20px;
   margin-left:10px;
`;

export const InputElement = styled.input`
  height:45px;
  border:none;
  border-bottom:3px solid rgb(15,134,230);
  outline:none;
  color: rgb(15,134,240);
  font-size:15px;
  margin-bottom:15px;
`;

export const ImageInput = styled.input`
  display:none;
`;

export const LabelForm = styled.label`
  font-size:16px;
  color:rgb(15,134,243);
  margin-bottom:3px;
  text-align:left;
`;

export const ImageUpload = styled.label`
  width:327px;
  height:45px;
  padding:5px;
  text-align:center;
  background-color:blue;
  border:none;
  outline:none;
  color:#fff;
  font-size:23px;
  font-weight:500;

  &:hover{
    color:blue;
    background-color:#fff;
    border:2px solid blue;
  }
`;

export const ElementCombine = styled.div`
display: flex;
flex-direction: column;
`;

export const TableForm = styled.table`
  width:100%;
  border-collapse:collapse;
  border:1px solid #aaa;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableHead = styled.thead.tr`
  background-color: #327f87;
  color: #ffffff;
  text-align: left;
`;

export const TableBody = styled.tbody.tr`
  border-bottom: 1px solid #dddddd;
`;

export const HeadCell = styled.th`
  text-align: center;
`;
export const TableCell = styled.td`
  padding: 12px 20px;
`;