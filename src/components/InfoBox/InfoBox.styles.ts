import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 46px auto;
  position: relative;
`

export const Header = styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;

`

export const Main = styled.div`
  background: ${props => props.theme.colors.backgroundDarker};
  border-radius: 0 0 8px 8px;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 12px;
`

export const OptionsTextContainer = styled.span`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 4px;
    margin-left: 4px;
  }
`