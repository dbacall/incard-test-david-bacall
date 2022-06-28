export const setError = (
  valueType: string,
  value: string,
  setError: (value: string) => void,
  incorrectValueError: string
): void => {
  if (value.length === 0) {
    setError(`Please enter your ${valueType}`)
  } else if (value !== 'incard') {
    setError(incorrectValueError)
  } else {
    setError('')
  }
}

export const validateLogin = (
  email: string,
  password: string,
  setEmailError: (value: string) => void,
  setPasswordError: (value: string) => void
): void => {
  setError(
    'email',
    email,
    setEmailError,
    'Email is not recognised. Please use a registered email'
  )

  setError(
    'password',
    password,
    setPasswordError,
    'Wrong password. Please try again'
  )
}