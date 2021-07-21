import React from 'react';
import { MenuPreviewInfo } from '../../type';
import ConnectionList from '../ConnectionList';
import { Container } from './styles';
import GetAllConnection from '../connection/GetAllConnectionContainer';

interface Props {
  menus: MenuPreviewInfo[];
  id: number;
  connect: (item: any) => void;
  disconnect: (item: any) => void;
  title: string;
}

const MenuConnectionPresenter = ({
  menus, 
  id, 
  connect,
  disconnect,
  title
}: Props): JSX.Element => (
  <Container>
    <GetAllConnection
      mode={2}
      existList={menus}
      connect={connect}
      id={id}
    />
    <ConnectionList
      title={title}
      connection={disconnect}
      options={{price: true, connection: true}}
      list={menus}
    />
  </Container>
);

export default MenuConnectionPresenter;