import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 100%;
  width: 100%;
  border-right: ${props => `${props.theme.colors.backgroundLight} solid 1px`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
`

export interface NavBtnProps {
  index?: number
}

export const NavBtn = styled.button<NavBtnProps>`
  border: none;
  background: ${props => props.index === 0 ? props.theme.colors.backgroundDarker : 'transparent'};
  color: ${props => props.theme.colors.textGrey};
  width: 100 %;
  padding: 16px 28px;
  text-align: left;
  font-size: 14px;
  border-left: ${props => props.index === 0 && `${props.theme.colors.primary} 3px solid`};
  cursor: pointer;

  > svg {
    margin-right: 10px
  }
`

export const LogoutBtn = styled(NavBtn)`
  margin-bottom: 24px;
`
