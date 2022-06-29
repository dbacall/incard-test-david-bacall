import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { MainGrid, NavAndMain } from './Home.styles';
import { Accounts, Activity, BalanceHistory, Overview } from '../../components/MainGrid';

const Home: FC = () => {

  const navigate = useNavigate()

  const loggedIn = localStorage.getItem('loggedIn')
  const expiry = localStorage.getItem('expiry')

  useEffect(() => {
    let loginExpired;
    if (expiry) {
      const dateNow = new Date()
      const timeNow = dateNow.getTime()
      loginExpired = timeNow - parseInt(expiry) > 0
    }

    if (!loggedIn || loginExpired) {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('expiry');
      navigate('/login')
    }
  }, [loggedIn, expiry, navigate])
  return (
    <>
      <Header />
      <NavAndMain>
        <Nav />
        <div>
          <MainGrid>
            <Overview />
            <Activity />
            <Accounts />
            <BalanceHistory />
          </MainGrid>
        </div>
      </NavAndMain>
    </>
  );
}

export default Home;
