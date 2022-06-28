import React, { FC, useState } from 'react';
import { TextInputProps } from './TextInput.models';
import { ErrorText, EyeBtn, Input, InputContainer, InputLabel } from './TextInput.styles';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';

const TextInput: FC<TextInputProps> = ({
  name, value, label, setValue, isPassword = false, error
}) => {
  const [visible, setVisible] = useState(true)

  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        type={isPassword && visible ? "password" : "text"}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={error}
      />
      {isPassword && (
        <EyeBtn
          name="show password"
          type="button"
          onClick={(e) => {
            setVisible(!visible)
          }}
        >
          <Eye />
        </EyeBtn>
      )}
      <ErrorText error={error}>{error.length > 0 ? error : 'placeholder'}</ErrorText>
    </InputContainer>
  );
}

export default TextInput;
