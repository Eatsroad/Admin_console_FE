import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import GetAllConnectionPresenter from './GetAllConnectionPresenter';
import { categoryAPI, menuAPI, optionAPI, optionGroupAPI } from '../../../../api';
import { CategoryPreviewInfo, MenuPreviewInfo, OptionGroupPreviewInfo, OptionPreviewInfo } from '../../type';

interface Props {
  mode: number,
  existList: any[];
  connect: (id: number) => void;
  id: number;
}

const GetAllConnectionContainer = ({
  mode,
  existList,
  connect,
  id,
}: Props): JSX.Element => {
  const [list, setList] = useState<CategoryPreviewInfo[] | OptionGroupPreviewInfo[] | MenuPreviewInfo[] | OptionPreviewInfo[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [itemId, setItemId] = useState<number>(id);
  const storeId = localStorage.getItem('storeId')!;

  const filterList = () => {
    let result: any[] = list;
    for (let i = 0; i < existList.length; i++) {
      result = result.filter((k) => k.name !== existList[i].name);
    }
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
        getAllOptionGroup();
      } else if (mode === 4) {
        getAllOption();
      }
    }
  }
  const getAllOptionGroup = async () => {
    try {
      const response = await optionGroupAPI.getAllOptionGroups(parseInt(storeId));
      if (response.status === StatusCodes.OK) {
        setList(response.data);
      }

    } catch (e) {

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
  const getAllOption = async () => {
    try {
      const response = await optionAPI.getAllOption(parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        setList(response.data);
      }
    } catch (e) { console.log(e) }
  }
  
  useEffect(() => {
    if (itemId !== id) {
      setState(false);
      setItemId(id);
    };
  }, [id, itemId]);

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