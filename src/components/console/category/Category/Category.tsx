import React from 'react';
import { CategoryInfoResponse } from '../../../common/type';
import { 
  Container, 
  CategoryDefaultInfo, 
  CategoryDesc, 
  CategoryMenuCount, 
  CategoryName, 
  CategoryState, 
  CategoryWrapper 
} from './styles';

interface Props {
  data: CategoryInfoResponse;
  onClick: (id: number) => void;
}

const Category = ({
  data,
  onClick
} : Props): JSX.Element => (
  <Container onClick={() => onClick(data.category_id)}>
    <CategoryWrapper>
      <CategoryState>{data.state}</CategoryState>
      <CategoryDefaultInfo>
        <CategoryName>{data.name}</CategoryName>
        <CategoryDesc>{data.description}</CategoryDesc>
      </CategoryDefaultInfo>
      <CategoryMenuCount>연결된 메뉴 수 : {data.menus.length}개</CategoryMenuCount>
    </CategoryWrapper>
  </Container>
);

export default Category;
