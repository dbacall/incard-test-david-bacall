/* eslint-disable jest/valid-title */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { MemoryRouter, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme'
import { createMemoryHistory } from 'history';
import { setError } from './Login.utils';

describe('Login page:', () => {
  it('it shows errors if try login without inputting anything', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>
    );
    const loginBtn = screen.getByText('Log in');
    userEvent.click(loginBtn)
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(screen.getByText('Please enter your password')).toBeInTheDocument()
  })

  it('it shows errors if enter wrong information', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>
    );
    const emailInput = screen.getByLabelText('Email address*');
    userEvent.type(emailInput, 'wrongemail')
    const passwordInput = screen.getByLabelText('Password*');
    userEvent.type(passwordInput, 'wrongpassword')
    const loginBtn = screen.getByText('Log in');
    userEvent.click(loginBtn)
    expect(screen.getByText('Email is not recognised. Please use a registered email')).toBeInTheDocument()
    expect(screen.getByText('Wrong password. Please try again')).toBeInTheDocument()
  })

  it('it takes a user to the home route if correct details', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });
    render(
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </ThemeProvider>
    );
    expect(history.location.pathname).toBe('/login');
    const emailInput = screen.getByLabelText('Email address*');
    userEvent.type(emailInput, 'incard')
    const passwordInput = screen.getByLabelText('Password*');
    userEvent.type(passwordInput, 'incard')
    const loginBtn = screen.getByText('Log in');
    userEvent.click(loginBtn)
    expect(history.location.pathname).toBe('/');
  })

  describe('setError util tests:', () => {
    let error = ""
    const updateError = (message: string) => error = message;
    it('sets the correct error if no value', () => {
      setError(
        'email',
        '',
        updateError,
        'test error message'
      );
      expect(error).toEqual('Please enter your email')
    })

    it('sets the correct error if incorrect value', () => {
      setError(
        'email',
        'dfas',
        updateError,
        'test error message'
      );
      expect(error).toEqual('test error message')
    })

    it('resets error to an empty string if correct value', () => {
      setError(
        'email',
        'incard',
        updateError,
        'test error message'
      );
      expect(error).toEqual('')
    })
  })
});