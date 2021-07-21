import React from 'react';
import ListWithComponent from '../../../common/listForm';
import { MenuClass } from '../../../common/listForm/ListClasses';
import { MenuInfoResponse } from '../../../common/type';
import { 
  AddMenuButton, 
  Container,
} from './styles';

interface Props {
  menus: MenuInfoResponse[];
  selectMenu: (menuId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}

const MenuListPresenter = ({ menus, selectMenu, setCreateItemPanel}: Props): JSX.Element => (
  <Container>
    <AddMenuButton onClick={() => setCreateItemPanel(true)}>메뉴 추가하기</AddMenuButton>
    <ListWithComponent
      component={new MenuClass()}
      data={menus}
      onClick={selectMenu}
      setCreateItemPanel={setCreateItemPanel}
    />
  </Container>
);

export default MenuListPresenter;