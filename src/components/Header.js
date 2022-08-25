import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
  background: rgb(15,134,243);
  background: linear-gradient(270deg, rgba(15,134,243,1) 20%, rgba(18,90,243,0.9640231092436975) 100%);
  padding:6px;
`;

const HeaderLogo =styled.h1`
  color:#fff;
  font-size:25px;
  font-family:monospace;
  margin-left:20px;
  font-weight:600;
  text-align:left;
`;


const Header = () => {
    return (
        <>
          <HeaderBar>
             <HeaderLogo>ResumeBuilder</HeaderLogo>
          </HeaderBar>
        </>
    )
}

export default Header;