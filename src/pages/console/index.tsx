/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
import ConsoleOption from '../../components/console/option';

const SwitchComponent = (index: number): JSX.Element => {
  if (index === 0) return <ConsoleMenu/>
  if (index === 1) return <ConsoleCategory/>
  if (index === 2) return <ConsoleOptionGroup/>
  if (index === 3) return <ConsoleOption/>
  return <></>
}

const ConsolePage = (): JSX.Element => {
  const [storeName, setStoreName] = useState<string>("");
  const [com, setCom] = useState<number>(0);
  
  const getStoreInfo = async () => {
    try {
      const result: AxiosResponse<CreateStoreResponse> = await storeAPI.getStoreInfo(localStorage.getItem('storeId')!);

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
          {SwitchComponent(com)}
        </ConsoleSubRouter>
      </Content>
    </Container>
  );
};

export default ConsolePage;