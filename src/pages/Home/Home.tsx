import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {

}

const Home: FC<HomeProps> = () => {

  const navigate = useNavigate()

  const loggedIn = localStorage.getItem('loggedIn')

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])
  return (
    <h1>Home</h1>
  );
}

export default Home;
