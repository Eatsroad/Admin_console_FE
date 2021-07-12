import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuInfoResponse } from '../../../common/type';
import MenuDetailPresenter from './MenuDetailPresenter';

interface ContainerProps {
  menu: MenuInfoResponse | null;
}
const MenuDetailContainer = ({
  menu,
}: ContainerProps): JSX.Element => {
  const dispatch = useDispatch();

  const deleteMenuDispatch = () => {
    const menuId = menu!.menu_id;
    dispatch( { type: "/menu/deleteMenuSaga", payload: { menuId } } );
  }
  console.log(menu);
  return (
    <MenuDetailPresenter
      menu={menu!}
      deleteMenu={deleteMenuDispatch}  
    />
  );
};

export default MenuDetailContainer;