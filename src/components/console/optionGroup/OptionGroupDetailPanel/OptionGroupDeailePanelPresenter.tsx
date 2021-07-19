import React from 'react';
import MenuConnectionContainer from '../../../common/connectionList/menu/MenuConnectionContainer';
import { OptionGroupInfoResponse } from '../../../common/type';
import { Container, OptionGroupDetailDeleteButton, OptionGroupDetailDesc, OptionGroupDetailModifButton, OptionGroupDetailName } from './styles';

interface Props {
  optionGroup: OptionGroupInfoResponse;
  deleteOptionGroup: () => void;
}
const OptionGroupDeailePanelPresenter = ({
  optionGroup,
  deleteOptionGroup
}: Props): JSX.Element => (
  <Container>
    <OptionGroupDetailModifButton>수정하기</OptionGroupDetailModifButton>
    <OptionGroupDetailName>옵션그룹 이름 {optionGroup.name}</OptionGroupDetailName>
    <OptionGroupDetailDesc>설명 {optionGroup.description}</OptionGroupDetailDesc>
    <MenuConnectionContainer
      menus={optionGroup.menus}
      id={optionGroup.option_group_id}
      mode={1}
    />
    <OptionGroupDetailDeleteButton onClick={deleteOptionGroup}>옵션그룹 삭제하기</OptionGroupDetailDeleteButton>
  </Container>
);

export default OptionGroupDeailePanelPresenter;