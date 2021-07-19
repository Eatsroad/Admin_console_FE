import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AdjustableLayout from '../../common/movingLayout';
import CreateOptionGroupPanelContainer from './CreateOptionGroupPanel/CreateOptionGroupPanelContainer';
import OptionGroupDeailePanelContainer from './OptionGroupDetailPanel/OptionGroupDetailPanelContainer';
import OptionGroupListContainer from './OptionGroupList/OptionGroupListContainer';

const ConsoleOptionGroup = ():JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [createItemPanel, setCreateItemPanel] = useState<boolean>(true);
  const dispatch = useDispatch();

  const switchComponent = () => {
    if (createItemPanel) return <CreateOptionGroupPanelContainer/>
    else return <OptionGroupDeailePanelContainer setCreateItemPanel={setCreateItemPanel}/>
  }

  const getAllOptionGroupDispatch = () => {
    console.log("asdf");
    dispatch( { type: '/optionGroup/getAllOptionGroupSaga' , payload: {}} );
    setLoading(!loading);
  }
  useEffect(() => {
    if (loading) getAllOptionGroupDispatch();
  }, []);

  if (loading) return <div>로딩중</div>
  return (
    <AdjustableLayout
      leftComponent={<OptionGroupListContainer setCreateItemPanel={setCreateItemPanel}/>}
      rightComponent={switchComponent()}
      rightFixedTop={true}
      leftFixedTop={false}
    />
  );
};

export default ConsoleOptionGroup;