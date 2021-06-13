import React from 'react';
import { 
  ContentContainer,
  SummryTitle, 
  SummuryButton, 
  SummuryContainer, 
  Test
} from './styles';

const Content:React.FC = () => {
  return (
    <ContentContainer>
      <SummuryContainer>
        <SummryTitle>
          주문도 이제 스마트하게.<br/>
          간단하게.
        </SummryTitle>
        <SummuryButton>지금 바로 시작하기</SummuryButton>
      </SummuryContainer>
      <Test>asdfasdfa</Test>
    </ContentContainer>
  );
};

export default Content;