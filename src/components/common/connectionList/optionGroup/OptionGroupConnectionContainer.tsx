import React from 'react';
import { useDispatch } from 'react-redux';
import { OptionGroupPreviewInfo, UpdateOptionGroupinMenuData } from '../../type';
import OptionGroupConnectionPresenter from './OptionGroupConnectionPresenter';
interface Props {
  optionGroups: OptionGroupPreviewInfo[];
  id: number;
}

const OptionGroupConnectionContainer = ({
  optionGroups,
  id
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
    console.log(item);
    try {
      const data: UpdateOptionGroupinMenuData = {
        optionGroups: removeItemId(item.option_group_id)
      };
      dispatch({type: "/menu/updataOptionGroupInMenuSaga", payload: {id, data}});
    } catch (e) { console.log(e) }

  }
  const connect = async (item: any) => {
    console.log(item);
    try {
      const data: UpdateOptionGroupinMenuData = {
        optionGroups: [item.option_group_id, ...prevItemId()]
      };
      dispatch({type: "/menu/updataOptionGroupInMenuSaga", payload: {id, data}});
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