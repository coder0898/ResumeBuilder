import React from 'react';
import { ElementCombine, FormContainer, ImageInput, ImageUpload, InputContent, InputElement, LabelForm } from './commonForm.js';

const Personal = () => {

  return (
    <>
      <FormContainer>
         <InputContent>
            <ElementCombine>
            <LabelForm>Name:</LabelForm>
            <InputElement type='text' name='fname'/>
            </ElementCombine>
            <ElementCombine>
            <LabelForm>Email:</LabelForm>
            <InputElement type='email' name='email'/>
            </ElementCombine>
            <ElementCombine>
            <LabelForm>Phone no:</LabelForm>
            <InputElement type='number' name='contact'/>
            </ElementCombine>
            <ElementCombine>
            <LabelForm>Address:</LabelForm>
            <InputElement type='text' name='address'/>
            </ElementCombine>
            <ElementCombine>
            <LabelForm>LinkedIN:</LabelForm>
            <InputElement type='url' name='linkedIn'/>
            </ElementCombine>
            <ImageInput id='img' type="file" accept='image/png, image/jpeg'/>
            <ImageUpload htmlFor='img' >Upload Picture</ImageUpload>
         </InputContent>
      </FormContainer>
    </>
  )
}

export default Personal;