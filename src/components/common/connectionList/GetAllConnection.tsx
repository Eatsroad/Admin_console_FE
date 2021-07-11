import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import ConnectionList from '.';
import { categoryAPI, menuAPI } from '../../../api';
import { CategoryPreviewInfo, MenuPreviewInfo, OptionGroupPreviewInfo } from '../type';
import { ConnectButton, GetAllConnectionContainer } from './styles';

interface Props {
  mode: number,
  existList: any[];
  connect: (id: number) => void;
  storeId: string;
  menuId: number;
}

const GetAllConnection = ({
  mode,
  existList,
  connect,
  storeId,
  menuId,
}: Props): JSX.Element => {
  const [list, setList] = useState<CategoryPreviewInfo[] | OptionGroupPreviewInfo[] | MenuPreviewInfo[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [menu, setMenu] = useState<number>(menuId);

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
  // const getAllOptionGroup = async () => {
    
  // }

  useEffect(() => {
    if (menu !== menuId) {
      setState(false);
      setMenu(menuId);
    };
  }, [menu, menuId]);
  return (
    <GetAllConnectionContainer>
      <ConnectButton onClick={onClick}>{state ? "취소" : "연결하기"}</ConnectButton>
      {
        list.length !== 0 && state &&
        <ConnectionList
          title={""}
          list={filterList()}
          connection={connect}
          options={{price: false, connection: false}}
        />
      }
    </GetAllConnectionContainer>
  );
};
export default GetAllConnection;