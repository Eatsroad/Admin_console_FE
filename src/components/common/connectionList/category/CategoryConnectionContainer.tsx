import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React from 'react';
import { useDispatch } from 'react-redux';
import { menuAPI } from '../../../../api';
import { setMenu } from '../../../console/menu/slice';
import { CategoryPreviewInfo, UpdataCategoryData } from '../../type';
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
      const data: UpdataCategoryData = {
        categories: removeCategoryId(item.category_id)
      };
      const response: AxiosResponse = await menuAPI.updateMenuCategory(data, menuId);
      console.log(response.status)
      if (response.status === StatusCodes.OK) {
        dispatch({type: '/menu/getAllMenuSaga'});
        dispatch(setMenu(menuId));
      }
    } catch (e) { console.log(e) }

  }
  const connect = async (item: any) => {
    try {
      const data: UpdataCategoryData = {
        categories: [item.category_id, ...prevCategoryId()]
      };
      const response: AxiosResponse = await menuAPI.updateMenuCategory(data, menuId);
      console.log(response.status)
      if (response.status === StatusCodes.OK) {
        dispatch({type: '/menu/getAllMenuSaga'});
        dispatch(setMenu(menuId));
      }
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