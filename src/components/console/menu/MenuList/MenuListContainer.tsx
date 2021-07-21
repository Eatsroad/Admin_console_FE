import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setMenu } from '../slice';
import MenuListPresenter from './MenuListPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}

const MenuListContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { menus } = useSelector((state: RootState) => ({
    menus: state.menuSlice.menus,
  }));
  const dispatch = useDispatch();

  const selectMenu = (menuId: number) => {
    dispatch(setMenu(menuId));
  }
  return (
    <MenuListPresenter
      menus={menus}
      setCreateItemPanel={setCreateItemPanel}
      selectMenu={selectMenu}
    />
  )
};

export default MenuListContainer;