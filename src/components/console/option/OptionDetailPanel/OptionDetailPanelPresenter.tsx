import React from 'react';
import { OptionInfoResponse } from '../../../common/type';
import OptionGroupConnectionContainer from '../../../common/connectionList/optionGroup/OptionGroupConnectionContainer';
import {
  Container, 
  OptionDetailDeleteButton, 
  OptionDetailModifButton,
  OptionDetailName 
} from './styles';

interface Props {
  option: OptionInfoResponse;
  deleteOption: () => void;
}
const OptionDetailPanelPresenter = ({
  option,
  deleteOption
}: Props): JSX.Element => (
  <Container>
    <OptionDetailModifButton>수정하기</OptionDetailModifButton>
    <OptionDetailName>옵션 이름 {option.name}</OptionDetailName>
    <OptionGroupConnectionContainer
      mode={2}
      id={option.option_id}
      optionGroups={option.option_group_id}
    />
    <OptionDetailDeleteButton onClick={deleteOption}>옵션 삭제하기</OptionDetailDeleteButton>
  </Container>
);

export default OptionDetailPanelPresenter;