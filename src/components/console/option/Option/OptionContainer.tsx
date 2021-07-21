import React from 'react';
import { optionGroupAPI } from '../../../../api';
import Tags from '../../../common/tag/Tags';
import { OptionInfoResponse } from '../../../common/type';
import { addCommaPrice } from '../../../common/utils/addCommaPrice';
import { Container, OptionGroupTag, OptionName, OptionPrice, OptionState, Wrapper } from './styles';

interface Props {
  data: OptionInfoResponse;
  onClick: (id: number) => void;
};

const OptionContainer = ({
  data,
  onClick
}: Props): JSX.Element => (
  <Container onClick={() => onClick(data.option_id)}>
    <Wrapper>
      <OptionState>{data.state}</OptionState>
      <OptionName>{data.name}</OptionName>
      <OptionPrice>{addCommaPrice(data.price)}원</OptionPrice>
      <OptionGroupTag><Tags list={data.option_group_id} title={"옵션그룹"}/></OptionGroupTag>
    </Wrapper>
  </Container>
);

export default OptionContainer;