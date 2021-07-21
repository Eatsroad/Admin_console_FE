import React from 'react';
import { useDispatch } from 'react-redux';
import { OptionGroupPreviewInfo, UpdateOptionGroupinMenuData, UpdateOptionGroupInOption } from '../../type';
import OptionGroupConnectionPresenter from './OptionGroupConnectionPresenter';
interface Props {
  optionGroups: OptionGroupPreviewInfo[];
  id: number;
  mode: number;
}

const OptionGroupConnectionContainer = ({
  optionGroups,
  id,
  mode
}: Props): JSX.Element => {
  const prevItemId = () => {
    let result: number[] = [];
    result = optionGroups.map((optinoGroup) => optinoGroup.option_group_id);
    return result;
  }
  const removeItemId = (id: number) => {
    let list = prevItemId();
    list = list.filter((i) => i !== id);
    return list; 
  }
  
  const dispatch = useDispatch();

  const disconnect = async (item: any) => {
    if (mode === 1) disconnect_OptoinGroupInMenu(item);
    else disconnect_OptoinGroupInOption(item);
  }
  const disconnect_OptoinGroupInMenu = (item: any) => {
    try {
      const data: UpdateOptionGroupinMenuData = {
        optionGroups: removeItemId(item.option_group_id)
      };
      dispatch({type: "/menu/updataOptionGroupInMenuSaga", payload: {id, data}});
    } catch (e) { console.log(e) }
  }
  const disconnect_OptoinGroupInOption = (item: any) => {
    try {
      const data: UpdateOptionGroupInOption = {
        option_group_id: removeItemId(item.option_group_id)
      };
      dispatch({type: "/option/updateOptionGroupInOption", payload: {id, data}});
    } catch (e) { console.log(e) }
  }
  const connect = async (item: any) => {
    if (mode === 1) connect_OptoinGroupInMenu(item);
    else connect_OptoinGroupInOption(item);
  }
  const connect_OptoinGroupInMenu = (item: any) => {
    try {
      const data: UpdateOptionGroupinMenuData = {
        optionGroups: [item.option_group_id, ...prevItemId()]
      };
      dispatch({type: "/menu/updataOptionGroupInMenuSaga", payload: {id, data}});
    } catch (e) { console.log(e) }
  }
  const connect_OptoinGroupInOption = (item: any) => {
    try {
      const data: UpdateOptionGroupInOption = {
        option_group_id: [item.option_group_id, ...prevItemId()]
      };
      dispatch({type: "/option/updateOptionGroupInOption", payload: {id, data}});
    } catch (e) { console.log(e) }
  }

  const title = "옵션그룹"
  return (
    <OptionGroupConnectionPresenter
      optionGroups={optionGroups}
      id={id}
      connect={connect}
      disconnect={disconnect}
      title={title}
  />
  );
};

export default OptionGroupConnectionContainer;