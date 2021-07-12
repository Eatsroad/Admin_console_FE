import React from 'react';
import CategoryConnectionContainer from '../../../common/connectionList/category/CategoryConnectionContainer';
import Tags from '../../../common/tag/Tags';
import { MenuInfoResponse } from '../../../common/type';
import { addCommaPrice } from '../../../common/utils/addCommaPrice';
import { 
  Contaienr, 
  MenuDetailName, 
  MenuDetailCategory, 
  MenuDetailPrice, 
  MenuDetailOptionGroup, 
  MenuDetailState, 
  MenuDetailDeleteButton, 
  MenuDetailMOdifyButton 
} from './styles';

interface Props {
  menu: MenuInfoResponse;
  deleteMenu: () => void;
}
const MenuDetailPresenter = ({ 
  menu,
  deleteMenu,
}: Props): JSX.Element => (
  <Contaienr>
    <MenuDetailMOdifyButton>수정하기</MenuDetailMOdifyButton>
    <MenuDetailName>이름 {menu.name}</MenuDetailName>
    <MenuDetailPrice>가격 {addCommaPrice(menu.price)}원</MenuDetailPrice>
    <MenuDetailCategory>
      <CategoryConnectionContainer
        categories={menu.categories}
        menuId={menu.menu_id}
      />
    </MenuDetailCategory>
    <MenuDetailOptionGroup>
      옵션 그룹
      <Tags title={""} list={menu.optionGroups}/>
    </MenuDetailOptionGroup>
    <MenuDetailState>
      메뉴 상태
      {menu.state}
    </MenuDetailState>
    <MenuDetailDeleteButton onClick={deleteMenu}>
      메뉴 삭제하기
    </MenuDetailDeleteButton>
  </Contaienr>

);

export default MenuDetailPresenter;