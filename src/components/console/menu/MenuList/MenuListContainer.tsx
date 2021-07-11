import React, { useEffect, useState } from 'react';
import { MenuInfoResponse } from '../../../common/type';
import MenuListPresenter from './MenuListPresenter';

interface Props {
  selectMenu: (menuId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}

const MenuListContainer = ({
  selectMenu,
  setCreateItemPanel
}: Props): JSX.Element => {
  const [menus, setMenus] = useState<MenuInfoResponse[]>([]);

  useEffect(() => {
    
  }, []);
  return (
    <MenuListPresenter

    />
  )
};

export default MenuListContainer;