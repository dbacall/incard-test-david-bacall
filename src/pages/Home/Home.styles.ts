import styled from "styled-components";

export const NavAndMain = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 218px auto;
`

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 386px auto;
  grid-template-rows: 181px auto;
  gap: 24px 24px;
  padding: 0 24px;
  height: calc(100% - 60px);
  padding-top: 24px;
`

export const OptionsBtn = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.regular};
  cursor: pointer;
`