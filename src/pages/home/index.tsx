import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Content from '../../components/home/content';
import Footer from '../../components/home/footer';
import Header from '../../components/home/header';
import { HomeContainer, HomeMainContent } from './styles';

const HomePage: React.FC = () => {
  const token = localStorage.getItem('accessToken');
  const history = useHistory();

  useEffect(() => {
    if (token) history.replace("/console/menu");
  }, [token, history]);
  return (
    <HomeContainer>
      <Header/>
      <HomeMainContent>
        <Content/> 
      </HomeMainContent>
      <Footer/>
    </HomeContainer>
  );
};

export default HomePage;