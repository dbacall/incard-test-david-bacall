import React, { FC } from 'react';
import { LogoutBtn, NavBtn, NavContainer, NavOptions } from './Nav.styles';
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg';
import { navOptions } from './Nav.constants';

const Nav: FC = () => {
  return (
    <NavContainer>
      <NavOptions>
        {navOptions.map(({ icon, text }, index) => (
          <NavBtn name={text} key={text} index={index}>{icon}{text}</NavBtn>
        ))}
      </NavOptions>
      <LogoutBtn name="sign out"><LogOutIcon />Sign out</LogoutBtn>
    </NavContainer>
  );
}

export default Nav;
