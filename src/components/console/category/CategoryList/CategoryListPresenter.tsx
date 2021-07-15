import React from 'react';
import ListWithComponent from '../../../common/listForm';
import { CategoryClass } from '../../../common/listForm/ListClasses';
import { CategoryInfoResponse } from '../../../common/type';
import { Container, AddCategoryButton, } from './styles';

interface Props {
  categories: CategoryInfoResponse[];
  setCategory: (categoryId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}
const CategoryListPresenter = ({ 
  categories, 
  setCategory, 
  setCreateItemPanel
}: Props): JSX.Element => (
  <Container>
    <AddCategoryButton onClick={() => setCreateItemPanel(true)}>카테고리 추가하기</AddCategoryButton>
    <ListWithComponent
      component={new CategoryClass()}
      data={categories}
      onClick={setCategory}
      setCreateItemPanel={setCreateItemPanel}
    />
  </Container>
);


export default CategoryListPresenter;