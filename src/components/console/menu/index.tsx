import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import { menuAPI } from '../../../api';
import { MenuInfoResponse } from '../../common/type';
import CreateMenu from './CreateMenu';
import MenuDetail from './MenuDetail';
import MenuList from './MenuList';
import { Container, Wrapper } from './styles';

interface Props {
  storeId: string;
}

const ConsoleMenu = ({storeId}: Props): JSX.Element => {
  const [menus, setMenus] = useState<MenuInfoResponse[]>([]);
  const [menu, setMenu] = useState<MenuInfoResponse>();
  const [modal, setModal] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  
  const switchComponent = (): JSX.Element => {
    if (modal) return <CreateMenu storeId={storeId}/>
    else if (!modal && menu !== undefined) return  menu !== undefined ? <MenuDetail menu={menu} storeId={storeId}/> : <CreateMenu storeId={storeId}/>
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
    <Container>
      <Wrapper>
        <MenuList menus={menus} setMenu={selectMenu} setModal={setModal}/>
        {switchComponent()}
      </Wrapper>
    </Container>
  );
};

export default ConsoleMenu;