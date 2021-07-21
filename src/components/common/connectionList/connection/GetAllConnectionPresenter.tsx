import React from 'react';
import { ConnectButton, Container } from './styles';
import { CategoryPreviewInfo, MenuPreviewInfo, OptionGroupPreviewInfo } from '../../type';
import ConnectionList from '../ConnectionList';

interface PresenterProps {
  list: CategoryPreviewInfo[] | OptionGroupPreviewInfo[] | MenuPreviewInfo[];
  state: boolean;
  onClick: () => void;
  connect: (id: number) => void;
}

const GetAllConnectionPresenter = ({
  list,
  state,
  onClick,
  connect
}: PresenterProps): JSX.Element => (
  <Container>
    <ConnectButton onClick={onClick}>{state ? "완료" : "연결하기"}</ConnectButton>
    {
      list.length !== 0 && state &&
      <ConnectionList
        title={""}
        list={list}
        connection={connect}
        options={{price: false, connection: false}}
      />
    }
  </Container>
);

export default GetAllConnectionPresenter;