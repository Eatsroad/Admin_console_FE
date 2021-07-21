import React from 'react';
import { RequiredInput } from '.';
import { CreateFormContainer } from './styles';

export interface DefaultData {
  placeholder: string;
  value: any;
  messege: string[];
  state: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressKey: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
interface Props {
  data: DefaultData[];
}

const CreateFormWithRequiredInput = ( { data }: Props ): JSX.Element => {
  return (
    <CreateFormContainer>
      {
        data.map((item, index) => (
          <RequiredInput
            key={index}
            value={item.value}
            placeholder={item.placeholder}
            onChange={item.onChange}
            onPressKey={item.onPressKey}
            state={item.state}
            messege={item.messege}
          />
        ))
      }
    </CreateFormContainer>
  );
};

export default CreateFormWithRequiredInput;