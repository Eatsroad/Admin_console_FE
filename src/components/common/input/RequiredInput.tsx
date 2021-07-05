import React from 'react';
import { Input, RequiredInputContainer, RequiredMessege } from './styles';
interface Props {
  placeholder: string;
  value: any;
  messege: string[];
  state: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressKey: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const RequiredInput: React.FC<Props> = ({
  placeholder,
  value,
  messege,
  state,
  onChange,
  onPressKey
}: Props) => {
  return (
    <RequiredInputContainer>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onPressKey}
      />
      {
        !state ? <RequiredMessege>{messege[0]}</RequiredMessege>
        : <></>
      }
    </RequiredInputContainer>
  );
};
export default RequiredInput; 