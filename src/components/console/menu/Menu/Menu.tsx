import React from 'react';
import Tags from '../../../common/tag/Tags';
import { MenuInfoResponse } from '../../../common/type';
import { addCommaPrice } from '../../../common/utils/addCommaPrice';
import { 
  MenuCategoryTags, 
  Container, 
  MenuDefaultInfo, 
  MenuName,
  MenuOptioGroupTags, 
  MenuPrice, 
  MenuState, 
  MenutagsContainer, 
  Wrapper 
} from './styles';

interface Props {
  data: MenuInfoResponse;
  onClick: (id: number) => void;
}
const Menu = ({ data , onClick,}: Props): JSX.Element => (
  <Container onClick={() => onClick(data.menu_id)}>
    <Wrapper>
      <MenuState>{data.state}</MenuState>
      <MenuDefaultInfo>
        <MenuName>{data.name}</MenuName>
        <MenuPrice>{addCommaPrice(data.price)}원</MenuPrice>
      </MenuDefaultInfo>
    </Wrapper>
    <MenutagsContainer>
      <MenuCategoryTags><Tags title={"카테고리"} list={data.categories}/></MenuCategoryTags>
      <MenuOptioGroupTags><Tags title={"옵션그룹"} list={data.optionGroups}/></MenuOptioGroupTags>
    </MenutagsContainer>
  </Container>
);

export default Menu;