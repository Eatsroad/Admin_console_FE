import React from 'react';
import ListWithComponent from '../../../common/listForm';
import { OptionClass } from '../../../common/listForm/ListClasses';
import { OptionInfoResponse } from '../../../common/type';
import { AddOptionButton, Container } from './styles';

interface Props {
  options: OptionInfoResponse[];
  selectOption: (optionId: number) => void;
  setCreateItemPanel: (state: boolean) => void;
}
const OptionListPresenter = ({
  options,
  selectOption,
  setCreateItemPanel
}: Props): JSX.Element => (
  <Container>
    <AddOptionButton onClick={() => setCreateItemPanel(true)}>옵션 추가하기</AddOptionButton>
    <ListWithComponent
      component={new OptionClass()}
      data={options}
      onClick={selectOption}
      setCreateItemPanel={setCreateItemPanel}
    />
  </Container>
);

export default OptionListPresenter;