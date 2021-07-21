import React from 'react';
import { 
  Container, 
  InfoContainer, 
  Item,
  ItemContainer, 
  ItemInfo, 
  ItemName, 
  ItemState, 
  Title, 
  Wrapper 
} from './styles';

interface Option {
  price: boolean;
  connection: boolean
}
interface Props {
  title: string
  list: any[];
  connection: (item: any) => void;
  options: Option;
}

const ConnectionList = ({
  title,
  list,
  connection,
  options
}: Props): JSX.Element => {
  return (
    <Container>
      <InfoContainer>
        {title !== "" ? <Title>{title} {list.length}개</Title> : <></>}
      </InfoContainer>
      <Wrapper>
        {
          list.length !== 0 && 
          <ItemContainer>
            {
              list.map((item, index) => (
                <Item key={index}>
                  <ItemState onClick={() => connection(item)}>{!options.connection ? "연결하기" : "연결해제"}</ItemState>
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                  </ItemInfo>
                </Item>
              ))
            }
          </ItemContainer> 
        }
      </Wrapper>
    </Container>
  );
};

export default ConnectionList;