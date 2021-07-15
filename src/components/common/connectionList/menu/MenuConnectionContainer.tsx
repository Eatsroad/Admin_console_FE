import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuPreviewInfo, UpdateCategoryMenu } from '../../type';
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
   if (mode === 1) disconnect_OptoinGroup();
   else disconnect_Categroy(item, id);
  }
  const disconnect_OptoinGroup = async () => {

  } 
  const disconnect_Categroy = async (item: any, id: number) => {
    try {
      const data: UpdateCategoryMenu = {
        menus: removeMenuId(item.menu_id)
      }
      console.log(id);
      dispatch({type: '/category/updateCategoryMenu', payload: { data, id }});
    } catch (e) { console.log(e) }
  } 

  const connect = async (item: any) => {
    console.log(item, id)
    if (mode === 1) connect_OptionGroup();
    else connect_Categroy(item, id);
  }
  const connect_OptionGroup = async () => {

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