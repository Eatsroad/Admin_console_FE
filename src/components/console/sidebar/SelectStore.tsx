import React from 'react';
import { SelectStoreDropDownContainer } from './styles';
import Dropdown from 'react-dropdown';
import { StorePreviewInfo } from '../../common/type';

interface Props {
  storeId: number,
  userData: StorePreviewInfo[];
  setStore: (storeId: number) => void;
}
const SelectStore = ({storeId, userData} : Props): JSX.Element => {
  const options = userData.map((data) => ({value: data.name, lable: data.store_id}));
  // console.log(options);
  // const onChange = (arg) => {
    
  // }
  return (
    <SelectStoreDropDownContainer>

      {/* <Dropdown options={} onChange={onChange}/> */}
    </SelectStoreDropDownContainer>
  );
};

export default SelectStore;
