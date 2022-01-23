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
          helperText={noUserError ? "you have entered the wrong username" : null}
        />
        <Input
          label="password"
          onChange={(e) => handlePasswordChange(e.target.value)}
          error={incorrectPasswordError}
          helperText={incorrectPasswordError ? "incorrect password" : null}
        />
      {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
        <Input
          label="confirm password"
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          error={confirmPasswordError}
          helperText={confirmPasswordError ? "passwords do not match" : null}
        />
      ): null}
      {/* TODO: add shake on error animation? */}
    </InputContainer>
  );
};


export default UsernamePasswordForm;