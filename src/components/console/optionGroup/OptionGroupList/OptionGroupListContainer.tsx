import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setOptionGropup } from '../slice';
import OptionGroupListPresenter from './OptionGroupListPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}
const OptionGroupListContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { optionGroups } = useSelector((state: RootState) => ({
    optionGroups: state.optionGroupSlice.optionGroups,
  }));
  const dispatch = useDispatch();

  const selectOptionGroup = (optionGroupId: number) => {
    dispatch(setOptionGropup(optionGroupId));
  }
  return (
    <OptionGroupListPresenter
      optionGroups={optionGroups}
      selectOtionGroup={selectOptionGroup}
      setCreateItemPanel={setCreateItemPanel}
    />
  );
};

export default OptionGroupListContainer;