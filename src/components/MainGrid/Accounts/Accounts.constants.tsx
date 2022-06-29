import React from 'react';
import { ReactComponent as Incard } from '../../../assets/icons/incard-in-circle-small.svg';
import { ReactComponent as HSBC } from '../../../assets/icons/hsbc.svg';
import { ReactComponent as Paypal } from '../../../assets/icons/paypal.svg';

export const accounts = [
  {
    icon: <Incard />,
    name: 'GBP incard',
    amount: '12,839.43',
    currency: 'GBP'
  },
  {
    icon: <Incard />,
    name: 'EUR incard',
    amount: '12,839.43',
    currency: 'EUR'
  },
  {
    icon: <HSBC />,
    name: 'HSBC Banking',
    amount: '12,839.43',
    currency: 'GBP'
  },
  {
    icon: <Paypal />,
    name: 'Paypal',
    amount: '12,839.43',
    currency: 'USD'
  },
  {
    icon: <Paypal />,
    name: 'Paypal',
    amount: '12,839.43',
    currency: 'GBP'
  },
]