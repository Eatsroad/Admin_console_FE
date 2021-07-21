import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setOPtionWithNull } from '../slice';
import OptionDetailPanelPresenter from './OptionDetailPanelPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}
const OptionDetailPanelContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { option } = useSelector((state: RootState) => ({
    option: state.optionSlice.option,
  }));
  const dispatch = useDispatch();

  const deleteOption = () => {
    const option_id = option!.option_id;
    dispatch( { type: '/option/deleteOptionSaga', payload: { option_id }});
    dispatch(setOPtionWithNull());
    setCreateItemPanel(true);
  }

  return (
    <OptionDetailPanelPresenter
      option={option!}
      deleteOption={deleteOption}
    />
  );
};

export default OptionDetailPanelContainer;