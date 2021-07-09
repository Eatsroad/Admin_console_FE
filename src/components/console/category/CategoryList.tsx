import React from 'react';
import ListWithComponent from '../../common/listForm';
import { CategoryClass } from '../../common/listForm/ListClasses';
import { CategoryInfoResponse } from '../../common/type';
import { CategoryListConatainer, AddCategoryButton, } from './styles';

interface Props {
  categories: CategoryInfoResponse[];
  setCategory: (categoryId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}
const CategoryList = ({ categories, setCategory, setCreateItemPanel}: Props): JSX.Element => {
  return (
    <CategoryListConatainer>
      <AddCategoryButton onClick={() => setCreateItemPanel(true)}>카테고리 추가하기</AddCategoryButton>
      <ListWithComponent
        component={new CategoryClass()}
        data={categories}
        onClick={setCategory}
        setCreateItemPanel={setCreateItemPanel}
      />
    </CategoryListConatainer>
  );
};

export default CategoryList;