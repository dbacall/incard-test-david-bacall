import styled from "styled-components";

export const AccountsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const Account = styled.li`
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text};
  border-bottom:  ${props => `${props.theme.colors.backgroundLight} 1px solid`}
`

export const AccountLeft = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
`

export const AccountRight = styled.div`
  margin-right: 16px;
`

export const Name = styled.span`
  margin-left: 16px;
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
`

export const Amount = styled.span`
  font-size: 16px;
`

export const Currency = styled.span`
  margin-left: 4px;
  color: ${props => props.theme.colors.textGrey};
  font-size: 14px;
`