import React from 'react';
import { CategoryPreviewInfo } from '../../type';
import GetAllConnection from '../connection/GetAllConnectionContainer';
import ConnectionList from '../ConnectionList';
import { CategoryConnectionContainer } from '../styles';

interface Props {
  categories: CategoryPreviewInfo[];
  menuId: number;
  connect: (item: any) => void;
  disconnect: (item: any) => void;
  title: string;
}

const CateogryConnectionPresenter = ({ 
  categories,
  menuId,
  connect,
  disconnect,
  title
}: Props): JSX.Element => (
  <CategoryConnectionContainer>
    <GetAllConnection
      mode={1}
      existList={categories}
      connect={connect}
      menuId={menuId}
    />
    <ConnectionList
      title={title}
      connection={disconnect}
      options={{price: false, connection: true}}
      list={categories}
    />
  </CategoryConnectionContainer>

);

export default CateogryConnectionPresenter;