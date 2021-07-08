import React from 'react';
import ListWithComponent from '../../common/listForm';
import { CategoryInfoResponse } from '../../common/type';
import { CategortyClass } from './Category';
import { CategoryListConatainer, AddCategoryButton, } from './styles';

interface Props {
  categories: CategoryInfoResponse[];
  setCategory: (categoryId: number) => void;
  setModal: (state: boolean) => void;
}
const CategoryList = ({ categories, setCategory, setModal}: Props): JSX.Element => {
  return (
    <CategoryListConatainer>
      <AddCategoryButton onClick={() => setModal(true)}>카테고리 추가하기</AddCategoryButton>
      {/* {
        categories.map((category) => (
          <Category categoryInfo={category} onClick={setCategory}/>
        ))
      } */}

      <ListWithComponent
        component={CategortyClass}
        data={categories}
      />
    </CategoryListConatainer>
  );
};

export default CategoryList;