import React from 'react';
import { useDispatch } from 'react-redux';
import { OptionPreviewInfo, UpdateOptionInOptionGroup } from '../../type';
import OptionConnectionPresenter from './OptionConnectionPresenter';

interface Props {
  options: OptionPreviewInfo[];
  id: number;
}

const OptionConnectionContainer = ({
  options,
  id
}: Props): JSX.Element => {
  const prevItemId = () => {
    let result: number[] = [];
    result = options.map((option) => option.option_id);
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
      const data: UpdateOptionInOptionGroup = {
        option_id: removeItemId(item.option_id)
      };
      dispatch({type: "/optionGroup/updateOptionInOptionGroupSaga", payload: { id, data }});
    } catch (e) { console.log(e) }

  }
  const connect = async (item: any) => {
    console.log(item);
    try {
      const data: UpdateOptionInOptionGroup = {
        option_id: [item.option_id, ...prevItemId()]
      };
      dispatch({type: "/optionGroup/updateOptionInOptionGroupSaga", payload: { id, data }});
    } catch (e) { console.log(e) }
  }
  const title = "옵션"
  return (
    <OptionConnectionPresenter
      options={options}
      id={id}
      connect={connect}
      disconnect={disconnect}
      title={title}
    />
  );
};

export default OptionConnectionContainer;