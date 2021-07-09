import React from 'react';
import ListWithComponent from '../../common/listForm';
import { MenuClass } from '../../common/listForm/ListClasses';
import { MenuInfoResponse } from '../../common/type';
import { AddMenuButton, MenuListContainer } from './styles';

interface Props {
  menus: MenuInfoResponse[];
  selectMenu: (menuId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}

const MenuList = ({ menus, selectMenu, setCreateItemPanel}: Props): JSX.Element => (
  <MenuListContainer>
    <AddMenuButton onClick={() => setCreateItemPanel(true)}>메뉴 추가하기</AddMenuButton>
    <ListWithComponent
      component={new MenuClass()}
      data={menus}
      onClick={selectMenu}
      setCreateItemPanel={setCreateItemPanel}
    />
  </MenuListContainer>
);

export default MenuList;