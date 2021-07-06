import React from 'react';
import { MenuInfoResponse } from '../../common/type';
import Menu from './Menu';
import { CreateMenuContainer, MenuListContainer } from './styles';

interface Props {
  menus: MenuInfoResponse[];
  setMenu: (menuId: number) => void;
  setModal: (state: boolean) => void;
}
const MenuList = ({ menus, setMenu, setModal}: Props): JSX.Element => {
  return (
    <MenuListContainer>
      <CreateMenuContainer onClick={() => setModal(true)}>메뉴 추가하기</CreateMenuContainer>
      {
        menus.map((menu) => (
          <Menu menuInfo={menu} key={menu.menu_id} onClick={() => {setMenu(menu.menu_id); setModal(false)}}/>
        ))
      }
    </MenuListContainer>
  );
};

export default MenuList;