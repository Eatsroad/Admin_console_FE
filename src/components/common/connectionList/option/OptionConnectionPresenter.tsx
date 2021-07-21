import React from 'react';
import { Container } from './styles';
import GetAllConnection from '../connection/GetAllConnectionContainer';
import ConnectionList from '../ConnectionList';
import { OptionPreviewInfo } from '../../type';

interface Props {
  options: OptionPreviewInfo[];
  id: number;
  connect: (item: any) => void;
  disconnect: (item: any) => void;
  title: string;
}

const OptionConnectionPresenter = ({
  options,
  id,
  connect,
  disconnect,
  title
}: Props): JSX.Element => (
  <Container>
    <GetAllConnection
      mode={4}
      existList={options}
      connect={connect}
      id={id}
    />
    <ConnectionList
      title={title}
      connection={disconnect}
      options={{price: false, connection: true}}
      list={options}
    />
  </Container>
);

export default OptionConnectionPresenter;