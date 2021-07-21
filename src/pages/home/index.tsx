import React from 'react';
import Content from '../../components/home/content';
import Footer from '../../components/home/footer';
import Header from '../../components/home/header';
import { HomeContainer, HomeMainContent } from './styles';

const HomePage: React.FC = () => {
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