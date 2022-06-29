import React, { FC, useState } from 'react';
import InfoBox from '../../InfoBox';
import { OptionsBtn, OptionsTextContainer } from '../MainGrid.styles';
import { ReactComponent as DownChevron } from '../../../assets/icons/down-chevron-small.svg';
import { CartesianAxis, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Dropdown, DropdownOption } from './BalanceHistory.styles';
import { data } from './BalanceHistory.constants';

const BalanceHistory: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [timeFrame, setTimeFrame] = useState('Last 7 days')

  return (
    <InfoBox
      title="BALANCE HISTORY"
      options={(
        <>
          <OptionsBtn>
            <OptionsTextContainer>
              All accounts
              <DownChevron />
            </OptionsTextContainer>
          </OptionsBtn>
          <OptionsBtn name="click to open timeframe options" onClick={() => setShowDropdown(!showDropdown)}>
            <OptionsTextContainer>
              {timeFrame}
              <DownChevron />
            </OptionsTextContainer>
            <Dropdown open={showDropdown}>
              {Object.keys(data).map((key) => (
                <DropdownOption onClick={() => setTimeFrame(key)}>{key}</DropdownOption>
              ))}
            </Dropdown>
          </OptionsBtn>
        </>
      )}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data[timeFrame]}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid horizontal={false} vertical={false} />
          <CartesianAxis axisLine={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis hide />
          <Tooltip
            separator=' £'
            contentStyle={{
              background: '#312E42',
              borderRadius: 4,
              border: 'none',
              color: '#9FA8B2',
              fontSize: 10
            }}
            labelStyle={{
              color: '#9FA8B2',
              fontSize: 20
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#0CF8E9" />
        </LineChart>
      </ResponsiveContainer>

    </InfoBox>
  );
}

export default BalanceHistory;
