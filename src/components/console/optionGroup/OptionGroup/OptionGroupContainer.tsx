import React from 'react';
import { OptionGroupInfoResponse } from '../../../common/type';
import { Container, MenuCount, OptionCount, OptionGroupName, OptionGroupState, Wrapper } from './styled';

interface Props {
  data: OptionGroupInfoResponse;
  onClick: (id: number) => void;
}
const OptionGroup = ({
  data,
  onClick
}: Props): JSX.Element => (
  <Container onClick={() => onClick(data.option_group_id)}>
    <Wrapper>
      <OptionGroupState>{data.state}</OptionGroupState>
      <OptionGroupName>{data.name}</OptionGroupName>
      <OptionCount>옵션 개수 : {data.option_id.length}개</OptionCount>
      <MenuCount>연결된 메뉴 : {data.menus.length}개</MenuCount>
    </Wrapper>
  </Container>
);

export default OptionGroup;