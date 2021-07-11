/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import { menuAPI } from '../../../api';
import AdjustableLayout from '../../common/movingLayout';
import { CreateMenuData, CreateMenuResponse, MenuInfoResponse } from '../../common/type';
import CreateMenu from './CreateMenuPanle/CreateMenu';
import MenuDetail from './MenuDetailPanel/MenuDetail';
import MenuList from './MenuList/MenuListPresenter';

interface Props {
  storeId: string;
}

const ConsoleMenu = ({storeId}: Props): JSX.Element => {
  const [menus, setMenus] = useState<MenuInfoResponse[]>([]);
  const [menu, setMenu] = useState<MenuInfoResponse>();
  const [createItemPanel, setCreateItemPanel] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [errMeseege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);

  const create = async (name: string, price: string, description: string) => {
    try {
      const data: CreateMenuData = {
        name: name,
        price: parseInt(price),
        description: description,
        state: "주문 가능",
        store_id: parseInt(storeId)
      };
      const result: AxiosResponse<CreateMenuResponse> = await menuAPI.createMenu(data);

      if (result.status === StatusCodes.CREATED) {
        console.log(result.data);
        getMenuList();
      }
    } catch (e) {
      console.log(e)
      setErrState(true);
      setErrMeseege("이미 있는 메뉴입니다.");
    }
  }

  const switchComponent = (): JSX.Element => {
    if (createItemPanel) return <CreateMenu create={create} errMessege={errMeseege!} errState={errState}/>
    else if (!createItemPanel && menu !== undefined) return  menu !== undefined ? <MenuDetail menu={menu} storeId={storeId}/> : <CreateMenu create={create} errMessege={errMeseege!} errState={errState}/>
    else return <></>
  }
  const selectMenu = (menuId: number) => {
    const selectedMenu: MenuInfoResponse = menus.filter((m) => m.menu_id === menuId)[0];
    setMenu(selectedMenu);
  }
  const getMenuList = async () => {
    try {
      const result: AxiosResponse<MenuInfoResponse[]> = await menuAPI.getAllMenu(storeId);

      if (result.status === StatusCodes.OK) {
        setMenus(result.data);
        setLoading(!loading);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (loading) getMenuList();
  }, [loading]);

  if (loading) return <div>로딩중</div>  
  return (
    <AdjustableLayout
      leftComponent={<MenuList menus={menus} selectMenu={selectMenu} setCreateItemPanel={setCreateItemPanel}/>}
      rightComponent={switchComponent()}
      rightFixedTop={true}
      leftFixedTop={false}
    />
  );
};

export default ConsoleMenu;