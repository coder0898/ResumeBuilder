import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';

import Header from './Header.js';

const AccountBox = styled.div`
  width:600px;
  min-height:450px;
  display:flex;
  flex-direction:column;
  border-radius:19px;
  background-color:#fff;
  box-shadow:0 0 4px rgba(15, 15, 15,0.28);
  position:relative;
  overflow:hidden;
  margin-top:30px;
  margin-left:350px;
`;

const HeadBack = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;
  background: rgb(15,134,243);
  background: linear-gradient(270deg, rgba(15,134,243,1) 20%, rgba(18,90,243,0.9640231092436975) 100%);
`;

const HeadText = styled.h2`
  font-size:25px;
  font-weight:600;
  line-height:1.24;
  color:#fff;
  margin-top:5px;
`;

const SmallText = styled.h3`
  font-size:16px;
  font-weight:500;
  color:#fff;
  margin-top:3px;
`;

const InnerContainer = styled.div`
  width:100%; 
  display:flex;
  flex-direction:column;
`;

const NoteText = styled.p`
  margin-top:5px;
  text-decoration: underline;
  color:rgb(243,68,15);
  font-size:16px;
`;

const Home = () => {

    const [active, setActive] = useState("login");

    const switchToSignup = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    }

    const switchToLogin = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setActive('login');
        }, 400);
    }

    return (
        <>
        {/* {
            active === 'signup' &&
            <NoteText>Please make password strong with number and min length 6</NoteText>
        } */}
        <Header/>
            <AccountBox>
                {
                    active === 'login' &&
                    <HeadBack>
                        <HeadText>Welcome Back</HeadText>
                        <SmallText>Please Login to continue!</SmallText>
                    </HeadBack>
                }
                {
                    active === 'signup' &&
                    <HeadBack>
                        <HeadText>Create Account</HeadText>
                        <SmallText>Please signup to continue!</SmallText>
                    </HeadBack>
                }
                {/* <button onClick={switchToSignup}>switchtest</button> */}
                <InnerContainer>
                    {
                        active === 'login' &&
                        <Login switchToSignup={switchToSignup}/>
                    }
                    {
                        active === 'signup' &&
                        <Signup switchToLogin={switchToLogin} />
                    }
                </InnerContainer>
            </AccountBox>
        </>
    )
}

export default Home;