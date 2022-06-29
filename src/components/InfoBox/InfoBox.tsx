import React, { FC } from 'react';
import { InfoBoxProps } from './InfoBox.models';
import { Container, Header, Main, Title } from './InfoBox.styles';

const InfoBox: FC<InfoBoxProps> = ({
  title,
  options,
  children
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <div>
          {options}
        </div>
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  );
}

export default InfoBox;
