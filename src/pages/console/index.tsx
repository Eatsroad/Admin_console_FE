/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storeAPI } from '../../api';
import { 
  ConsoleCategory,
  ConsoleHeader,
  ConsoleMenu, 
  ConsoleOptionGroup,
  ConsoleSideBar 
} from '../../components/console';
import { ConsoleSubRouter, Container, Content } from './styles';
import { AxiosResponse } from 'axios';
import { StatusCodes } from "http-status-codes";
import { CreateStoreResponse } from '../../components/common/type';

const SwitchComponent = (index: number, storeId: string): JSX.Element => {
  if (index === 0) return <ConsoleMenu storeId={storeId}/>
  if (index === 1) return <ConsoleCategory/>
  if (index === 2) return <ConsoleOptionGroup/>
  return <></>
}

const ConsolePage = (): JSX.Element => {
  const { store_id } = useParams<any>();
  const [storeName, setStoreName] = useState<string>("");
  const [com, setCom] = useState<number>(0);

  const getStoreInfo = async () => {
    try {
      const result: AxiosResponse<CreateStoreResponse> = await storeAPI.getStoreInfo(store_id);

      if (result.status === StatusCodes.OK) {
        setStoreName(result.data.name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStoreInfo();
  }, []);
  console.log(storeName);
  return (
    <Container>
      <ConsoleHeader/>
      <Content>
        <ConsoleSideBar
          storeName={storeName}
          setCom={setCom}
          currentIndex={com}
        />
        <ConsoleSubRouter>
          {SwitchComponent(com, store_id)}
        </ConsoleSubRouter>
      </Content>
    </Container>
  );
};

export default ConsolePage;