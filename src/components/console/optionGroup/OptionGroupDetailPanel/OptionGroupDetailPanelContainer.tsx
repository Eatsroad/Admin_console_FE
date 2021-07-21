import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setOptionGroupWithNull } from '../slice';
import OptionGroupDeailePanelPresenter from './OptionGroupDetailPanelPresenter';

interface Props {
  setCreateItemPanel: (state: boolean) => void;
}
const OptionGroupDeailePanelContainer = ({
  setCreateItemPanel
}: Props): JSX.Element => {
  const { optionGroup } = useSelector((state: RootState) => ({
    optionGroup: state.optionGroupSlice.optionGroup,
  }));
  const dispatch = useDispatch();

  const deleteOptionGroup = () => {
    const option_group_id = optionGroup!.option_group_id;
    dispatch( { type: "/optionGroup/deleteOptionGroupSaga", payload: { option_group_id } } );
    dispatch(setOptionGroupWithNull());
    setCreateItemPanel(true);
  };

  return (
    <OptionGroupDeailePanelPresenter
      optionGroup={optionGroup!}
      deleteOptionGroup={deleteOptionGroup}
    />
  );
};

export default OptionGroupDeailePanelContainer;