import React from 'react';
import Tags from '../../common/tag/Tags';
import { MenuInfoResponse } from '../../common/type';
import { addCommaPrice } from '../../common/utils/addCommaPrice';
import { MenuDetailContaienr, MenuDetailName, MenuDetailCategory, MenuDetailPrice, MenuDetailOptionGroup, MenuDetailState, MenuDetailDeleteButton, MenuDetailMOdifyButton } from './styles';

interface Props {
  menu: MenuInfoResponse;
}
const MenuDetail = ({ menu }: Props): JSX.Element => (
  <MenuDetailContaienr>
    <MenuDetailMOdifyButton>수정하기</MenuDetailMOdifyButton>
    <MenuDetailName>이름 {menu.name}</MenuDetailName>
    <MenuDetailPrice>가격 {addCommaPrice(menu.price)}원</MenuDetailPrice>
    <MenuDetailCategory>
      카테고리
      <Tags title={""} list={menu.categories}/>
    </MenuDetailCategory>
    <MenuDetailOptionGroup>
      옵션 그룹
      <Tags title={""} list={menu.optionGroups}/>
    </MenuDetailOptionGroup>
    <MenuDetailState>
      메뉴 상태
      {menu.state}
    </MenuDetailState>
    <MenuDetailDeleteButton>
      메뉴 삭제하기
    </MenuDetailDeleteButton>
  </MenuDetailContaienr>
);

export default MenuDetail;