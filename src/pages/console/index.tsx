import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { userApi } from '../../api';
import { StorePreviewInfo, UserInfoWithUserIdData, UserInfoWithUserIdResponse } from '../../components/common/type';
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
import SelectStore from '../../components/console/sidebar/SelectStore';

const ConsolePage = (): JSX.Element => {
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId")!;
  const history = useHistory();
  const [storeId, setStoreId] = useState<number>(0);
  const [userData, setUserData] = useState<StorePreviewInfo[]>([]);

  const getUserInfo = async () => {
    console.log(userId);
    try {
      const data: UserInfoWithUserIdData= { userId: userId };

      const response: AxiosResponse<UserInfoWithUserIdResponse> = await userApi.getUserInfoWithUserId(data);
      console.log(response.status);
      if (response.status === StatusCodes.OK) {
        setUserData(response.data.stores);
        // setStoreId(userData[0].store_id);
      }
    } catch (e) { console.log(e) }
  }
  useEffect(() => {
    if (!token) history.replace("/");
    
  }, [history, token, userData]);

  return (
    <Container>
      <ConsoleHeader/>
      <Content>
        
        <SelectStore
          setStore={setStoreId}
          userData={userData}
          storeId={storeId}
        />
        <ConsoleSideBar
          setStore={setStoreId}
          userData={userData}
          storeId={storeId}
        />
        <ConsoleSubRouter>
        <button onClick={getUserInfo}>test</button>
          <Switch>
            <Route exact path="/console/menu" component={ConsoleMenu}/>
            <Route exact path="/console/category" component={ConsoleCategory}/>
            <Route exact path="/console/option-group" component={ConsoleOptionGroup}/>
          </Switch>
        </ConsoleSubRouter>
      </Content>
    </Container>
  );
};

export default ConsolePage;