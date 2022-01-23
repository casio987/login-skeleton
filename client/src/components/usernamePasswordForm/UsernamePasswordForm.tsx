import React, { FC } from "react";
import { InputContainer, Input } from "./style";

type FormProps = {
  confirmPasswordValue?: string;
  handleUsernameChange: (username: string) => void;
  handlePasswordChange: (password: string) => void;
  handleConfirmPasswordChange?: (password: string) => void;
  confirmPasswordError?: boolean;
  incorrectPasswordError?: boolean;
  noUserError?: boolean;
}

const UsernamePasswordForm: FC<FormProps> = ({
  confirmPasswordValue,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  confirmPasswordError,
  incorrectPasswordError,
  noUserError
}) => {  
  return (
    <InputContainer>
        <Input
          label="username"
          onChange={(e) => handleUsernameChange(e.target.value)}
          error={noUserError}
        />
        <Input
          label="password"
          onChange={(e) => handlePasswordChange(e.target.value)}
          error={incorrectPasswordError || confirmPasswordError}
        />
      {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
        <Input
          label="confirm password"
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          error={confirmPasswordError}
        />
      ): null}
      {/* TODO: add shake on error animation? */}
    </InputContainer>
  );
};


export default UsernamePasswordForm;