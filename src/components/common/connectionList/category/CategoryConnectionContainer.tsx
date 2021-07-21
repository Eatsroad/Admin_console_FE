import React from 'react';
import { useDispatch } from 'react-redux';
import { CategoryPreviewInfo, UpdateCategoryData } from '../../type';
import CateogryConnectionPresenter from './CategoryConnectionPresenter';

interface ContainerProps {
  categories: CategoryPreviewInfo[];
  menuId: number;
}
const CategoryConnectionContainer = ({
  categories,
  menuId
}: ContainerProps): JSX.Element => {
  const prevCategoryId = () => {
    let result: number[] = [];
    result = categories.map((category) => category.category_id);
    return result;
  }
  const removeCategoryId = (catoegoryId: number) => {
    let list = prevCategoryId();
    list = list.filter((i) => i !== catoegoryId);
    return list; 
  }
  
  const dispatch = useDispatch();

  const disconnect = async (item: any) => {
    try {
      const data: UpdateCategoryData = {
        categories: removeCategoryId(item.category_id)
      };
      dispatch({type: "/menu/updataCategoryInMenuSaga", payload: {menuId, data}});
    } catch (e) { console.log(e) }

  }
  const connect = async (item: any) => {
    try {
      const data: UpdateCategoryData = {
        categories: [item.category_id, ...prevCategoryId()]
      };
      dispatch({type: "/menu/updataCategoryInMenuSaga", payload: {menuId, data}});
    } catch (e) { console.log(e) }
  }

  const title = "카테고리"
  return (
    <CateogryConnectionPresenter
      categories={categories}
      menuId={menuId}
      connect={connect}
      disconnect={disconnect}
      title={title}
    />
  );
};

export default CategoryConnectionContainer;