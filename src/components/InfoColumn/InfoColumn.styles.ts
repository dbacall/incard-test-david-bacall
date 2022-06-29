import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`

export const Amount = styled.p`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 26px;
  margin: 0;

  > svg {
    margin-left: 8px;
  }
`

interface PercentageProps {
  percentage: number
}

export const Percentage = styled.p<PercentageProps>`
  color: ${props => props.percentage > 0 ?
    props.theme.colors.success :
    props.theme.colors.error
  };
  margin: 0;
`