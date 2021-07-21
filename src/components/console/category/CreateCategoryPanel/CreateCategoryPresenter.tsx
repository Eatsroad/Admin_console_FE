import React from 'react';
import ButtonWithRequiredState from '../../../common/buttons/ButtonWithRequiredState';
import CreateFormWithRequiredInput, { DefaultData } from '../../../common/input/CreateForm';
import { Container } from './styles';

interface Props {
  data: DefaultData[];
  state: boolean;
  errState: boolean;
  onClick: () => void;
  errMessege: string;
}

const CreateCategoryPresenter = ({
  data,
  state,
  errState,
  errMessege,
  onClick
}: Props): JSX.Element => (
  <Container>
    <CreateFormWithRequiredInput
      data={data}
    />
    <ButtonWithRequiredState
      state={state}
      onClick={onClick}
      text={"카테고리 추가하기"}
      errMessege={errMessege!}
      errState={errState}
    />    
  </Container>
);

export default CreateCategoryPresenter;