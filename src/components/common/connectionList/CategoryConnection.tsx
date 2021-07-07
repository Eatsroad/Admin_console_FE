import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React from 'react';
import ConnectionList from '.';
import { categoryAPI, menuAPI } from '../../../api';
import { CategoryPreviewInfo, UpdataCategoryData } from '../type';
import GetAllConnection from './GetAllConnection';
import { CategoryConnectionContainer } from './styles';

interface Props {
  categories: CategoryPreviewInfo[];
  storeId: string;
  menuId: number;
}

const CateogryConnection = ({ 
  categories,
  storeId,
  menuId
}: Props): JSX.Element => {
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

  const disConnect = async (item: any) => {
    console.log(item);
    try {
      const data: UpdataCategoryData = {
        categories: removeCategoryId(item.category_id)
      };
      const response: AxiosResponse = await menuAPI.updateMenuCategory(data, menuId);
      console.log(response.status)
      if (response.status === StatusCodes.OK) {

      }
    } catch (e) { console.log(e) }

  }
  const connect = async (item: any) => {
    console.log(item);
    try {
      const data: UpdataCategoryData = {
        categories: [item.category_id, ...prevCategoryId()]
      };
      const response: AxiosResponse = await menuAPI.updateMenuCategory(data, menuId);
      console.log(response.status)
      if (response.status === StatusCodes.OK) {

      }
    } catch (e) { console.log(e) }
  }

  const title = "카테고리"
  return (
    <CategoryConnectionContainer>
      <GetAllConnection
        storeId={storeId}
        mode={1}
        existList={categories}
        connect={connect}
        menuId={menuId}
      />
      <ConnectionList
        title={title}
        connection={disConnect}
        options={{price: false, connection: true}}
        list={categories}
      />
    </CategoryConnectionContainer>
  );
};

export default CateogryConnection;