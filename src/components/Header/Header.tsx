import React, { FC } from 'react';
import { ReactComponent as IncardLogo } from '../../assets/logo-incard.svg';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as DownChevron } from '../../assets/icons/down-chevron.svg';
import { HeaderContainer, HeaderLeft, HeaderRight, PlainText, UserImage } from './Header.styles';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IncardLogo />
      </HeaderLeft>
      <HeaderRight>
        <Bell />
        <UserImage src={require('../../assets/images/user.jpg')} alt="user" />
        <PlainText>Company Name</PlainText>
        <DownChevron />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
