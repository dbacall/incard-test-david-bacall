import React, { FC } from 'react';
import { InfoColumnProps } from './InfoColumn.models';
import { Amount, InfoContainer, Percentage, Title } from './InfoColumn.styles';
import { ReactComponent as UpChevron } from '../../assets/icons/up-chevron.svg';
import { ReactComponent as UpArrow } from '../../assets/icons/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';
import { getPositivePercentage } from './InfoColumn.utils';

const InfoColumn: FC<InfoColumnProps> = ({
  title,
  amount,
  percentage
}) => {

  const renderArrow = () => {
    if (percentage > 0) return <UpArrow />
    return <DownArrow />
  }

  return (
    <InfoContainer>
      <Title>{title}</Title>
      <Amount>
        £{amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        {title === 'incard balance' && <UpChevron />}
      </Amount>
      <Percentage percentage={percentage}>+{getPositivePercentage(percentage).toFixed(1)}% {renderArrow()}</Percentage>
    </InfoContainer>
  );
}

export default InfoColumn;
