import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AdjustableLayout from '../../common/movingLayout';
import CreateOptionContainer from './CreateOptionPanel/CreateOptionPanelContainer';
import OptionDetailPanelContainer from './OptionDetailPanel/OptionDetailPanelContainer';
import OptionListContainer from './OptionList/OptionListContainer';

const ConsoleOption = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [createItemPanel, setCreateItemPanel] = useState<boolean>(true);
  const dispatch = useDispatch();

  const switchComponent = () => {
    if (createItemPanel) return <CreateOptionContainer/>
    else return <OptionDetailPanelContainer setCreateItemPanel={setCreateItemPanel}/>
  };

  const getAllOptionDispatch = () => {
    dispatch( { type: '/option/getAllOptionSaga'} );
    setLoading(!loading);
  };

  useEffect(() => {
    if (loading) getAllOptionDispatch();
  }, []);

  if (loading) return <div>로딩중</div>
  return (
    <AdjustableLayout
      leftComponent={<OptionListContainer setCreateItemPanel={setCreateItemPanel}/>}
      rightComponent={switchComponent()}
      rightFixedTop={true}
      leftFixedTop={false}
    />
  );
};

export default ConsoleOption;