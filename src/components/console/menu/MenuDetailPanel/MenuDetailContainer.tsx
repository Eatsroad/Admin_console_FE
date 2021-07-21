import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuInfoResponse } from '../../../common/type';
import { setMenuWithNULL } from '../slice';
import MenuDetailPresenter from './MenuDetailPresenter';

interface ContainerProps {
  menu: MenuInfoResponse | null;
  setCreateItemPanel: (state: boolean) => void;
}
const MenuDetailContainer = ({
  menu,
  setCreateItemPanel
}: ContainerProps): JSX.Element => {
  const dispatch = useDispatch();

  const deleteMenuDispatch = () => {
    const menuId = menu!.menu_id;
    dispatch( { type: "/menu/deleteMenuSaga", payload: { menuId } } );
    dispatch(setMenuWithNULL());
    setCreateItemPanel(true);
  }
  return (
    <MenuDetailPresenter
      menu={menu!}
      deleteMenu={deleteMenuDispatch}  
    />
  );
};

export default MenuDetailContainer;