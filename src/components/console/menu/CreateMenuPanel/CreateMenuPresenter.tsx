import React from 'react';
import ButtonWithRequiredState from '../../../common/buttons/ButtonWithRequiredState';
import CreateFormWithRequiredInput, { DefaultData } from '../../../common/input/CreateForm';
import { 
  Container 
} from './styles';

interface PresenterProps {
  data: DefaultData[];
  state: boolean;
  errState: boolean;
  onClick: () => void;
  errMessege: string;
}
const CreateMenuPresenter = ({
  data,
  state,
  errState,
  errMessege,
  onClick
}: PresenterProps): JSX.Element => {
  
  return (
    <Container>
     <CreateFormWithRequiredInput
      data={data}
    />
    <ButtonWithRequiredState
      state={state}
      onClick={onClick}
      text={"메뉴 추가하기"}
      errMessege={errMessege!}
      errState={errState}
    />      
    </Container>
  );
}

export default CreateMenuPresenter;