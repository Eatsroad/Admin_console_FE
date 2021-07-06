import React from 'react';
import Tags from '../../common/tag/Tags';
import { MenuInfoResponse } from '../../common/type';
import { addCommaPrice } from '../../common/utils/addCommaPrice';
import { MenuCategoryTags, MenuContainer, MenuDefaultInfo, MenuName, MenuOptioGroupTags, MenuPrice, MenuState, MenutagsContainer, MenuWrapper } from './styles';

interface Props {
  menuInfo: MenuInfoResponse;
  onClick: (menuId: number) => void;
}

const Menu = ({ menuInfo, onClick}: Props): JSX.Element => (
  <MenuContainer onClick={() => onClick(menuInfo.menu_id)}>
    <MenuWrapper>
      <MenuState>{menuInfo.state}</MenuState>
      <MenuDefaultInfo>
        <MenuName>{menuInfo.name}</MenuName>
        <MenuPrice>{addCommaPrice(menuInfo.price)}원</MenuPrice>
      </MenuDefaultInfo>
    </MenuWrapper>
    <MenutagsContainer>
      <MenuCategoryTags><Tags title={"카테고리"} list={menuInfo.categories}/></MenuCategoryTags>
      <MenuOptioGroupTags><Tags title={"옵션그룹"} list={menuInfo.optionGroups}/></MenuOptioGroupTags>
    </MenutagsContainer>
  </MenuContainer>
);

export default Menu;