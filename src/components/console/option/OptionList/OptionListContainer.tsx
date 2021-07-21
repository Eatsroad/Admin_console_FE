import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setOption } from '../slice';
import OptionListPresenter from './OptionListPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}

const OptionListContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { options } = useSelector((state: RootState) => ({
    options: state.optionSlice.options,
  }));
  const dispatch = useDispatch();
  const selectOption = (optionId: number) => {
    dispatch(setOption(optionId));
  };
  return (
    <OptionListPresenter
      options={options}
      selectOption={selectOption}
      setCreateItemPanel={setCreateItemPanel}
    />
  );
};

export default OptionListContainer;