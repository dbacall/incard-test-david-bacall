import React, { FC } from 'react';
import InfoBox from '../../InfoBox';
import { InfoContainerWithPadding, OptionsBtn, OptionsTextContainer } from '../MainGrid.styles';
import { ReactComponent as DownChevron } from '../../../assets/icons/down-chevron-small.svg';
import InfoColumn from '../../InfoColumn';
import { ActivityContainer } from './Activity.styles';

const Activity: FC = () => {
  return (
    <InfoBox
      title="ACTIVITY"
      options={(
        <OptionsBtn>
          <OptionsTextContainer>
            Year to date
            <DownChevron />
          </OptionsTextContainer>
        </OptionsBtn>
      )}
    >
      <InfoContainerWithPadding>
        <ActivityContainer>

          <InfoColumn
            title="Revenue"
            amount={8027}
            percentage={3}
          />
          <InfoColumn
            title="Expenses"
            amount={8027}
            percentage={-3}
          />
        </ActivityContainer>
      </InfoContainerWithPadding>
    </InfoBox>
  );
}

export default Activity;
