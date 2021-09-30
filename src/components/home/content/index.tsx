import React from 'react';
import { 
  ContentContainer,
  FirstContentsContainer,
  FirstContentTitle,
  SecondContentsContainer,
  SecondContentTitle,
  SummryTitle, 
  SummuryButton, 
  SummuryContainer, 
  SummuryWrapper, 
  Test
} from './styles';

const Content:React.FC = () => {
  return (
    <ContentContainer>
      <SummuryContainer>
        <SummuryWrapper>
          <SummryTitle>
            주문도 이제 스마트하게.<br/>
            간단하게.
          </SummryTitle>
          <SummuryButton>지금 바로 시작하기</SummuryButton>
        </SummuryWrapper>
      </SummuryContainer>
      <FirstContentsContainer>
        <FirstContentTitle>
          주문 받으러 가지 말고<br/>
          바로 주문 확인 하세요!<br/>
        </FirstContentTitle>
      </FirstContentsContainer>
      <SecondContentsContainer>
        <SecondContentTitle>
          <div>
            점점 늘어나는 인건비로 인해 홀 운영이 어려우신가요?<br/>
            주문 과정에서 생기는 문제가 신경쓰이시나요?<br/>
            똑똑한 모바일 테이블 오더 이츠로드가 주문과 홀 운영을 도와드려요!
          </div>
        </SecondContentTitle>
        <div>
          더 알아보고 싶다면?
        </div>
      </SecondContentsContainer>
    </ContentContainer>
  );
};

export default Content;