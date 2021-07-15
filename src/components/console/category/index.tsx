/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import AdjustableLayout from '../../common/movingLayout';
import CategoryDetailContainer from './CategoryDetailPanel/CategoryDetailContainer';
import CategoryListContainer from './CategoryList/CategoryListContainer';
import CreateCategoryContainer from './CreateCategoryPanel/CreateCateogoryContainer';

interface Props {
  storeId: string;
}
const ConsoleCategory = ({
  storeId
}: Props):JSX.Element => {
  const { category } = useSelector((state: RootState) => ({
    category: state.categorySlice.category,
  }))
  const [loading, setLoading] = useState<boolean>(true);
  const [menus, setMenus] = useState<number[]>([]);
  const [createItemPanel, setCreateItemPanel] = useState<boolean>(true);

  const dispatch = useDispatch();

  const getAllCategoryDispatch = (storeId: string) => {
    dispatch( { type: "/category/getAllCategorySaga", payload: { storeId } } );
    setLoading(!loading);
  }
  const switchComponent = (): JSX.Element => {
    if (createItemPanel) return <CreateCategoryContainer/>
    else if (!createItemPanel || category !== null) return  category !== undefined ? <CategoryDetailContainer setCreateItemPanel={setCreateItemPanel}/> : <CreateCategoryContainer/>
    else return <></>
  }

  useEffect(() => {
    if (loading) getAllCategoryDispatch(storeId);
  }, [loading]);

  if (loading) return <div>로딩중</div>
  return (
    <AdjustableLayout
      leftComponent={<CategoryListContainer setCreateItemPanel={setCreateItemPanel}/>}
      rightComponent={switchComponent()}
      rightFixedTop={true}
      leftFixedTop={false}
    />
  );
};

export default ConsoleCategory;