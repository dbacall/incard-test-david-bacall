import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SwitchIcon } from '../../assets/icons/switch.svg';
import { ReactComponent as CardIcon } from '../../assets/icons/card.svg';
import { ReactComponent as IncardIcon } from '../../assets/icons/incard-mini.svg';

export const navOptions = [
  {
    icon: <HomeIcon />,
    text: 'Home'
  },
  {
    icon: <SwitchIcon />,
    text: 'Transactions'
  },
  {
    icon: <CardIcon />,
    text: 'Cards'
  },
  {
    icon: <IncardIcon />,
    text: 'Payments'
  },
]