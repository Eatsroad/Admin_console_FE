import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setCategory } from '../slice';
import CategoryListPresenter from './CategoryListPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}
const CategoryListContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { categories } = useSelector((state: RootState) => ({
    categories: state.categorySlice.categoryies,
  }));
  const dispatch = useDispatch();

  const selectCategory = (categoryId: number) => {
    dispatch(setCategory(categoryId));
  };

  return (
    <CategoryListPresenter
      setCreateItemPanel={setCreateItemPanel}
      categories={categories}
      setCategory={selectCategory}
    />
  );
};

export default CategoryListContainer;