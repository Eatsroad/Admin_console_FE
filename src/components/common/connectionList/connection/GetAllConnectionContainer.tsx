import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import GetAllConnectionPresenter from './GetAllConnectionPresenter';
import { categoryAPI, menuAPI } from '../../../../api';
import { CategoryPreviewInfo, MenuPreviewInfo, OptionGroupPreviewInfo } from '../../type';

interface Props {
  mode: number,
  existList: any[];
  connect: (id: number) => void;
  menuId: number;
}

const GetAllConnectionContainer = ({
  mode,
  existList,
  connect,
  menuId,
}: Props): JSX.Element => {
  const [list, setList] = useState<CategoryPreviewInfo[] | OptionGroupPreviewInfo[] | MenuPreviewInfo[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [menu, setMenu] = useState<number>(menuId);
  const storeId = localStorage.getItem('storeId')!;

  const filterList = () => {
    let result: any[] = list;
    for (let i = 0; i < existList.length; i++) {
      result = result.filter((k) => k.name !== existList[i].name);
    }
    console.log(list, result, existList);
    return result;
  }
  const onClick = () => {
    if (state) {
      setState(false);
      setList([]);
    } else {
      setState(true);
      if (mode === 1) {
        getAllCategory();
      } else if (mode === 2) {
        getAllMenu();
      } else if (mode === 3) {
  
      }
    }
  }
  const getAllCategory = async () => {
    try {
      const response = await categoryAPI.getAllCategories(storeId);

      if (response.status === StatusCodes.OK) {
        setList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  const getAllMenu = async () => {
    try {
      const response = await menuAPI.getAllMenu(storeId);

      if (response.status === StatusCodes.OK) {
        setList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    if (menu !== menuId) {
      setState(false);
      setMenu(menuId);
    };
  }, [menu, menuId]);

  return (
    <GetAllConnectionPresenter
      list={filterList()}
      state={state}
      onClick={onClick}
      connect={connect}
    />
  );
};
export default GetAllConnectionContainer;