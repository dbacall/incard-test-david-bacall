import React, { FC, FormEvent, useEffect, useState } from 'react';
import { ReactComponent as IncardLogo } from '../../assets/logo-incard.svg'
import TextInput from '../../components/TextInput';
import {
  LoginContainer,
  LoginFormContainer,
  Title,
  PlainText,
  Form,
  ForgotPasswordText,
  SubmitBtn,
  PrimarySpan,
  ImageContainer,
  Image
} from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { ValidationProgress } from './Login.models';
import { validateLogin } from './Login.utils';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validating, setValidating] = useState(ValidationProgress.IDLE);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate()

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    setValidating(ValidationProgress.VALIDATING)
  }

  useEffect(() => {
    if (validating === 'validating') {
      validateLogin(email, password, setEmailError, setPasswordError)
      setValidating(ValidationProgress.COMPLETE)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validating])

  useEffect(() => {
    if (validating === ValidationProgress.COMPLETE && emailError === '' && passwordError === '') {
      localStorage.setItem('loggedIn', 'true')
      navigate('/')
    }
  }, [emailError, passwordError, validating, navigate])



  return (
    <LoginContainer>
      <LoginFormContainer>
        <IncardLogo />
        <Title>
          Hello!
        </Title>
        <PlainText>
          Log in to your incard account.
        </PlainText>
        <Form onSubmit={handleLogin}>
          <TextInput
            label='Email address*'
            name='email'
            value={email}
            setValue={setEmail}
            error={emailError}
          />
          <TextInput
            label='Password*'
            name='password'
            value={password}
            setValue={setPassword}
            isPassword
            error={passwordError}
          />
          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          <SubmitBtn type='submit' value='Log in' />
        </Form>
        <PlainText>
          Don't have an account yet? <PrimarySpan>Sign up</PrimarySpan>
        </PlainText>
      </LoginFormContainer>
      <ImageContainer>
        <Image
          src={require('../../assets/images/login.jpg')}
          alt='man typing on laptop'
        />
      </ImageContainer>
    </LoginContainer>
  );
}

export default Login;
