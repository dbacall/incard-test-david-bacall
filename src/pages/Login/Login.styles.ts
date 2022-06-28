import styled from "styled-components"
import { devices } from "../../theme"

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${devices.tablet} {
  grid-template-columns: 1fr;
  }
`

export const LoginFormContainer = styled.div`
  padding: 72px 120px;
  max-height: 789px;

  @media ${devices.tablet} {
    padding: 72px 150px
  }

  @media ${devices.mobile} {
    padding: 72px 24px
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 32px;
  font-family: ${props => props.theme.fonts.bold};
  padding: 0;
  margin-top: 56px
`
export const PlainText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 16px
`

export const Form = styled.form`
  >div:nth-of-type(2) {
    margin-top: 6px;
  }
`

export const ForgotPasswordText = styled.p`
  color: ${props => props.theme.colors.primary};
  text-align: right;
  margin-top: 6px;
`

export const SubmitBtn = styled.input`
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  width: 170px;
  height: 48px;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  color: ${props => props.theme.colors.background};

  &:hover {
    cursor: pointer;
  }
`

export const PrimarySpan = styled.span`
  color: ${props => props.theme.colors.primary};
`

export const ImageContainer = styled.div`
  max-height: 789px
`

export const Image = styled.img`
  height: 100vh;
  width: 100%;
  @media ${devices.tablet} {
    display: none;
  }
`