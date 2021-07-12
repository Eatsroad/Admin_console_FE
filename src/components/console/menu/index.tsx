/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import AdjustableLayout from '../../common/movingLayout';
import { MenuInfoResponse } from '../../common/type';
import CreateMenuContainer from './CreateMenuPanle/CreateMenuContainer';
import MenuDetailContainer from './MenuDetailPanel/MenuDetailContainer';
import MenuList from './MenuList/MenuListContainer';

interface Props {
  storeId: string;
}

const ConsoleMenu = ({storeId}: Props): JSX.Element => {
  const { menu } = useSelector((state: RootState) => ({
    menu: state.menuSlice.menu, 
  }));
  const [createItemPanel, setCreateItemPanel] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  
  const dispatch = useDispatch();

  const getAllMenuDispatch = (storeId: string) => {
    dispatch({type: "/menu/getAllMenuSaga", payload: { storeId }});
    setLoading(!loading);
  }
  
  const switchComponent = (): JSX.Element => {
    if (createItemPanel) return <CreateMenuContainer/>
    else if (!createItemPanel || menu !== null) return  menu !== undefined ? <MenuDetailContainer menu={menu}/> : <CreateMenuContainer/>
    else return <></>
  }
  useEffect(() => {
    if (loading) getAllMenuDispatch(storeId);
  }, [loading]);

  if (loading) return <div>로딩중</div>  
  return (
    <AdjustableLayout
      leftComponent={<MenuList setCreateItemPanel={setCreateItemPanel}/>}
      rightComponent={switchComponent()}
      rightFixedTop={true}
      leftFixedTop={false}
    />
  );
};

export default ConsoleMenu;