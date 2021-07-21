import React from 'react';
import { OptionGroupPreviewInfo } from '../../type';
import { OptionGroupConnectionContainer } from '../styles';
import GetAllConnection from '../connection/GetAllConnectionContainer';
import ConnectionList from '../ConnectionList';

interface Props {
  optionGroups: OptionGroupPreviewInfo[];
  id: number;
  connect: (item: any) => void;
  disconnect: (item: any) => void;
  title: string;
}

const OptionGroupConnectionPresenter = ({
  optionGroups,
  id,
  connect,
  disconnect,
  title
}: Props) => (
  <OptionGroupConnectionContainer>
    <GetAllConnection
      mode={3}
      existList={optionGroups}
      connect={connect}
      id={id}
    />
    <ConnectionList
      title={title}
      connection={disconnect}
      options={{price: false, connection: true}}
      list={optionGroups}
    />
  </OptionGroupConnectionContainer>
);

export default OptionGroupConnectionPresenter;