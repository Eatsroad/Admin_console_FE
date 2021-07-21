/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import { userApi } from '../../api';
import { StorePreviewInfo, UserInfoWithUserIdData, UserInfoWithUserIdResponse } from '../common/type';
import CreateStoreBox from './CreateStoreBox';
import StoreBox from './StoreBax';
import { Container, Wrapper } from './styles';

const SelectStore = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stores, setStores] = useState<StorePreviewInfo[]>();
  const userId = localStorage.getItem('userId');


  const getStores = async () => {
    try {
      const data: UserInfoWithUserIdData = {
        userId : userId!
      }
      const response: AxiosResponse<UserInfoWithUserIdResponse> = await userApi.getUserInfoWithUserId(data);

      if (response.status === StatusCodes.OK) {
        setStores(response.data.stores);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getStores();
  }, []);

  if (loading) return <div>로딩중</div>
  return (
    <Container>
      <Wrapper>
        {
          stores?.map((store) => (
            <StoreBox
              storeId={store.store_id}
              storeName={store.name}
              key={store.store_id}
            />
          ))
        }
        <CreateStoreBox/>
      </Wrapper>
    </Container>
  );
};

export default SelectStore;