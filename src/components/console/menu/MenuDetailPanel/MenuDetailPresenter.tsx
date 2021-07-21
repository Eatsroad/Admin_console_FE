import React from 'react';
import CategoryConnectionContainer from '../../../common/connectionList/category/CategoryConnectionContainer';
import OptionGroupConnectionContainer from '../../../common/connectionList/optionGroup/OptionGroupConnectionContainer';
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
      <OptionGroupConnectionContainer
        optionGroups={menu.optionGroups}
        id={menu.menu_id}
        mode={1}
      />
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