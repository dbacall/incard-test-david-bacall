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

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validating, setValidating] = useState('idle');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate()
  const handleLogin = (e: FormEvent): void => {
    e.preventDefault()
    setValidating('validating')
    console.log(emailError);
    console.log(passwordError);

  }



  useEffect(() => {
    const validateLogin = () => {
      if (email.length === 0) {
        setEmailError('Please enter your email')
      } else if (email !== 'incard') {
        setEmailError('Email is not recognised. Please use a registered email')
      } else {
        setEmailError('')
      }

      if (password.length === 0) {
        setPasswordError('Please enter your password')
      } else if (password !== 'incard') {
        setPasswordError('Wrong password. Please try again')
      } else {
        setPasswordError('')
      }

    }
    if (validating === 'validating') {
      validateLogin()
      setValidating('complete')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validating])

  useEffect(() => {
    if (validating === 'complete' && emailError === "" && passwordError === "") {
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
            label="Email address*"
            name="email"
            value={email}
            setValue={setEmail}
            error={emailError}
          />
          <TextInput
            label="Password*"
            name="password"
            value={password}
            setValue={setPassword}
            isPassword
            error={passwordError}
          />
          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          <SubmitBtn type="submit" value="Log in" />
        </Form>
        <PlainText>
          Don't have an account yet? <PrimarySpan>Sign up</PrimarySpan>
        </PlainText>
      </LoginFormContainer>
      <ImageContainer>
        <Image
          src={require("../../assets/images/login.jpg")}
          alt="man typing on laptop"
        />
      </ImageContainer>
    </LoginContainer>
  );
}

export default Login;
