import React, { FC } from 'react';
import { ReactComponent as IncardLogo } from '../../assets/logo-incard.svg'
import styled from 'styled-components';

interface LoginProps {

}

const LoginContainer = styled.div`
  padding: 72px 24px;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 32px;
  font-family: ${props => props.theme.fonts.bold};
  padding: 0;
  margin-top: 56px
`
const LoginInstruction = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 16px
`


const Login: FC<LoginProps> = () => {
  return (
    <LoginContainer>
      <IncardLogo />
      <Title>
        Hello!
      </Title>
      <LoginInstruction>
        Log in to your incard account.
      </LoginInstruction>

    </LoginContainer>
  );
}

export default Login;
