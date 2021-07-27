import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuPreviewInfo, UpdateCategoryMenu, UpdateMenuInOptionGroupData } from '../../type';
import MenuConnectionPresenter from './MenuConnectionPresenter';

interface ContainerProps {
  menus: MenuPreviewInfo[];
  id: number;
  mode: number;
}

const MenuConnectionContainer = ({
  menus,
  id,
  mode
}: ContainerProps): JSX.Element => {
  const title = "메뉴"
  const prevMenuId = () => {
    let result: number[] = [];
    result = menus.map((menu) => menu.menu_id);
    return result;
  };

  const removeMenuId= (menuId: number) => {
    let list = prevMenuId();
    list = list.filter((i) => i !== menuId);
    return list; 
  };
  const dispatch = useDispatch();

  const disconnect = async (item: any) => {
   if (mode === 1) disconnect_OptoinGroup(item, id);
   else disconnect_Categroy(item, id);
  }
  const disconnect_OptoinGroup = async (item: any, id: number) => {
    try {
      const data: UpdateMenuInOptionGroupData = {
        menus: removeMenuId(item.menu_id)
      }
      dispatch({type: '/optionGroup/updateMenuInOptionGroupSaga', payload: { id, data }});
    } catch (e) { console.log(e) }
  } 
  const disconnect_Categroy = async (item: any, id: number) => {
    try {
      const data: UpdateCategoryMenu = {
        menus: removeMenuId(item.menu_id)
      }
      dispatch({type: '/category/updateCategoryMenu', payload: { data, id }});
    } catch (e) { console.log(e) }
  } 

  const connect = async (item: any) => {
    if (mode === 1) connect_OptionGroup(item, id);
    else connect_Categroy(item, id);
  }
  const connect_OptionGroup = async (item: any, id: number) => {
    try {
      const data: UpdateMenuInOptionGroupData = {
        menus: [item.menu_id, ...prevMenuId()]
      };
      dispatch({type: "/optionGroup/updateMenuInOptionGroupSaga", payload: { id, data }});
    } catch (e) { console.log(e) }
  }
  const connect_Categroy = async (item: any, id: number) => {
    try {
      const data: UpdateCategoryMenu = {
        menus: [item.menu_id, ...prevMenuId()]
      };
      dispatch({type: "/category/updateCategoryMenu", payload: { data, id }});
    } catch (e) { console.log(e) }
  }

  return (
    <MenuConnectionPresenter
      menus={menus}
      id={id}
      connect={connect}
      disconnect={disconnect}
      title={title}
    />
  );
};

export default MenuConnectionContainer;