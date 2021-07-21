import React from 'react';
import MenuConnectionContainer from '../../../common/connectionList/menu/MenuConnectionContainer';
import { CategoryInfoResponse } from '../../../common/type';
import { 
  Container, 
  CategoryDetatilModifButton, 
  CategoryDetatilName, 
  CategoryDetatilDesc, 
  CategoryDeleteButton,
  CategoryDetailMenuConnectionList
} from './styles';

interface Props {
  category: CategoryInfoResponse;
  deleteCategory: () => void;
}
const CategoryDetailPresenter = ({
  category,
  deleteCategory
}: Props): JSX.Element => (
  <Container>
    <CategoryDetatilModifButton>수정하기</CategoryDetatilModifButton>
    <CategoryDetatilName>카테고리 이름 {category.name}</CategoryDetatilName>
    <CategoryDetatilDesc>설명 {category.description}</CategoryDetatilDesc>
    <CategoryDetailMenuConnectionList>
      <MenuConnectionContainer
        menus={category.menus}
        id={category.category_id}
        mode={2}
      />
    </CategoryDetailMenuConnectionList>
    <CategoryDeleteButton onClick={deleteCategory}>카테고리 삭제하기</CategoryDeleteButton>
  </Container>
);

export default CategoryDetailPresenter;