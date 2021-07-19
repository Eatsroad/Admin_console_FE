import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import OptionGroupDeailePanelPresenter from './OptionGroupDeailePanelPresenter';

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

  };

  return (
    <OptionGroupDeailePanelPresenter
      optionGroup={optionGroup!}
      deleteOptionGroup={deleteOptionGroup}
    />
  );
};

export default OptionGroupDeailePanelContainer;