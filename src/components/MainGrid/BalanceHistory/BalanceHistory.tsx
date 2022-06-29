import React, { FC, useState } from 'react';
import InfoBox from '../../InfoBox';
import { OptionsBtn, OptionsTextContainer } from '../MainGrid.styles';
import { ReactComponent as DownChevron } from '../../../assets/icons/down-chevron-small.svg';
import { CartesianAxis, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Dropdown, DropdownOption } from './BalanceHistory.styles';

const data: Record<string, any> = {
  'Last 7 days': [
    {
      name: 'Mon', value: 1800
    },
    {
      name: 'Tues', value: 2400
    },
    {
      name: 'Wed', value: 2550
    },
    {
      name: 'Thur', value: 2332
    },
    {
      name: 'Fri', value: 2760
    },
    {
      name: 'Sat', value: 2550
    },
    {
      name: 'Sun', value: 2600
    },
  ],
  'Last year': [
    {
      name: 'Jan', value: 1800
    },
    {
      name: 'Feb', value: 2400
    },
    {
      name: 'Mar', value: 2550
    },
    {
      name: 'Apr', value: 2332
    },
    {
      name: 'May', value: 2760
    },
    {
      name: 'Jun', value: 2550
    },
    {
      name: 'Jul', value: 2000
    },
    {
      name: 'Aug', value: 1799
    },
    {
      name: 'Sep', value: 1900
    },
    {
      name: 'Oct', value: 1600
    },
    {
      name: 'Nov', value: 1400
    },
    {
      name: 'Dec', value: 1300
    },
  ],
}


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
