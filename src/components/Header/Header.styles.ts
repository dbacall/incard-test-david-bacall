import styled from "styled-components";

export const PlainText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 16px
`

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => `${props.theme.colors.backgroundLight} solid 1px`};
`

export const HeaderLeft = styled.div`
  margin-left: 24px;
`

export const HeaderRight = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;

  > * {
    margin-left: 16px;
  }
`

export const UserImage = styled.img`
  border-radius: 50%;
`