import React from 'react';
import ListWithComponent from '../../../common/listForm';
import { OptionGroupClass } from '../../../common/listForm/ListClasses';
import { OptionGroupInfoResponse } from '../../../common/type';
import { AddOptionGroupButton, Container } from './styles';

interface Props {
  optionGroups: OptionGroupInfoResponse[];
  selectOtionGroup: (optionGroupId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}
const OptionGroupListPresenter = ({
  optionGroups,
  selectOtionGroup,
  setCreateItemPanel
}: Props): JSX.Element => (
  <Container>
    <AddOptionGroupButton onClick={() => setCreateItemPanel(true)}>옵션그룹 추가하기</AddOptionGroupButton>
    <ListWithComponent
      component={new OptionGroupClass()}
      data={optionGroups}
      onClick={selectOtionGroup}
      setCreateItemPanel={setCreateItemPanel}
    />
  </Container>
);

export default OptionGroupListPresenter;