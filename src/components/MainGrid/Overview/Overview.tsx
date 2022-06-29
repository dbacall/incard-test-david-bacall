import React, { FC } from 'react';
import InfoBox from '../../InfoBox';
import { InfoContainerWithPadding, OptionsBtn, OptionsTextContainer } from '../MainGrid.styles';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'
import { ReactComponent as InCardInCircle } from '../../../assets/icons/incard-in-circle.svg';
import InfoColumn from '../../InfoColumn';
import { InCardIcon } from './Overview.styles';

const Overview: FC = () => {
  return (
    <InfoBox
      title="OVERVIEW"
      options={(
        <OptionsBtn>
          <OptionsTextContainer>
            <Plus />
            Add funds
          </OptionsTextContainer>
        </OptionsBtn>
      )}
    >
      <InfoContainerWithPadding>
        <InfoColumn
          title="incard balance"
          amount={12427}
          percentage={3}
        />
        <InCardIcon><InCardInCircle /></InCardIcon>
      </InfoContainerWithPadding>
    </InfoBox>
  );
}

export default Overview;
