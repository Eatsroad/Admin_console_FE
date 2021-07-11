import React from 'react';
import CateogryConnection from '../../../common/connectionList/CategoryConnection';
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
  storeId: string;
}
const MenuDetail = ({ menu, storeId}: Props): JSX.Element => (
  <Contaienr>
    <MenuDetailMOdifyButton>수정하기</MenuDetailMOdifyButton>
    <MenuDetailName>이름 {menu.name}</MenuDetailName>
    <MenuDetailPrice>가격 {addCommaPrice(menu.price)}원</MenuDetailPrice>
    <MenuDetailCategory>
      <CateogryConnection
        categories={menu.categories}
        storeId={storeId}
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
    <MenuDetailDeleteButton>
      메뉴 삭제하기
    </MenuDetailDeleteButton>
  </Contaienr>

);

export default MenuDetail;