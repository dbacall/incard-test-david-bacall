import React, { FC } from 'react';
import { LogoutBtn, NavBtn, NavContainer, NavOptions } from './Nav.styles';
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg';
import { navOptions } from './Nav.constants';
import { useNavigate } from 'react-router-dom';

const Nav: FC = () => {
  const navigate = useNavigate()

  return (
    <NavContainer>
      <NavOptions>
        {navOptions.map(({ icon, text }, index) => (
          <NavBtn name={text} key={text} index={index}>{icon}{text}</NavBtn>
        ))}
      </NavOptions>
      <LogoutBtn
        name="sign out"
        onClick={() => {
          localStorage.removeItem('expiry')
          localStorage.removeItem('loggedIn')
          navigate('/login')
        }}
      >
        <LogOutIcon />Sign out
      </LogoutBtn>
    </NavContainer >
  );
}

export default Nav;
