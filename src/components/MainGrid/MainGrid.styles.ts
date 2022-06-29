import styled from "styled-components";

export const OptionsBtn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.regular};
  cursor: pointer;
`

export const OptionsTextContainer = styled.span`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 4px;
    margin-left: 4px;
  }
`

export const InfoContainerWithPadding = styled.div`
  padding: 16px
`