import React from 'react'
import styled from 'styled-components';
import { FormContainer, InputElement, LabelForm } from './commonForm.js'

export const InputCotainer = styled.div`
   display:grid;
   grid-template-columns:repeat(2, 1fr);
   grid-template-rows:repeat(2,1fr);
   grid-gap:20px;
   margin-left:20px;
`;

const ExtraDetails = () => {
  return (
    <>
     <FormContainer>
       <LabelForm>Skils:</LabelForm>
       <InputCotainer>
       <InputElement type='text' name='skill1'></InputElement>
       <InputElement type='text' name='skill2'></InputElement>
       <InputElement type='text' name='skill3'></InputElement>
       <InputElement type='text' name='skill4'></InputElement>
       </InputCotainer>
     </FormContainer>
     <FormContainer>
       <LabelForm>Hobby/extraco-cirrculumn:</LabelForm>
       <InputCotainer>
       <InputElement type='text' name='hobby1'></InputElement>
       <InputElement type='text' name='hobby2'></InputElement>
       <InputElement type='text' name='hobby3'></InputElement>
       <InputElement type='text' name='hobby4'></InputElement>
       </InputCotainer>
     </FormContainer>
    </>
  )
}

export default ExtraDetails