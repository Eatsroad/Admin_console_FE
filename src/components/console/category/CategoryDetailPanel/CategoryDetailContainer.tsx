import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import CategoryDetailPresenter from './CategoryDetailPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}
const CategoryDetailContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { category } = useSelector((state: RootState) => ({
    category: state.categorySlice.category,
  }));

  const dispatch = useDispatch();

  const deleteCategory = () => {
    const categoryId = category?.category_id;
    dispatch( { type: "/category/deleteCategorySaga", payload: { categoryId }})
    setCreateItemPanel(true);
  };

  return (
    <CategoryDetailPresenter
      category={category!}
      deleteCategory={deleteCategory}
    />
  );
};

export default CategoryDetailContainer;