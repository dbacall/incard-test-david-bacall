import React, { FC } from 'react';
import InfoBox from '../../InfoBox';
import { OptionsBtn, OptionsTextContainer } from '../MainGrid.styles';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'
import { ReactComponent as Switch } from '../../../assets/icons/switch-small.svg';
import { Account, AccountLeft, AccountRight, AccountsList, Amount, Currency, Name } from './Accounts.styles';
import { accounts } from './Accounts.constants';

const Accounts: FC = () => {
  return (
    <InfoBox
      title="ACCOUNTS"
      options={(
        <>
          <OptionsBtn>
            <OptionsTextContainer>
              <Plus />
              Add
            </OptionsTextContainer>
          </OptionsBtn>
          <OptionsBtn>
            <OptionsTextContainer>
              <Switch />
              Exchange
            </OptionsTextContainer>
          </OptionsBtn>
        </>
      )}
    >
      <AccountsList>
        {accounts.map((account) => (
          <Account>
            <AccountLeft>
              {account.icon}
              <Name>
                {account.name}
              </Name>
            </AccountLeft>
            <AccountRight>
              <Amount>
                {account.amount}
              </Amount>
              <Currency>
                {account.currency}
              </Currency>
            </AccountRight>
          </Account>
        ))}
      </AccountsList>
    </InfoBox>
  );
}

export default Accounts;
