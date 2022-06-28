import styled from "styled-components"
import { InputProps } from "./TextInput.models"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const InputLabel = styled.label`
  color: ${props => props.theme.colors.text};
`

export const Input = styled.input<InputProps>`
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  height: 50px;
  background: transparent;
  border: 1px solid;
  border-color: ${props =>
    props.error.length > 0 ? props.theme.colors.error : props.theme.colors.secondary
  };
  font-size: 14px;
  font-family: ${props => props.theme.fonts.regular}
`

export const ErrorText = styled.p<InputProps>`
  color: ${props => props.theme.colors.error};
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 0;
  visibility: ${props =>
    props.error.length > 0 ? 'visible' : 'hidden'
  };
`
export const EyeBtn = styled.button`
  position: absolute;
  top: 40%;
  right: 3%;
  background: transparent;
  border: none;
  cursor: pointer;
`