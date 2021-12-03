import React, { FC } from "react";
import { ErrorText, ErrorTextContainer, Input, InputContainer } from "./style";

type FormProps = {
  usernameValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
  handleUsernameChange: (username: string) => void;
  handlePasswordChange: (password: string) => void;
  handleConfirmPasswordChange?: (password: string) => void;
  confirmPasswordError?: boolean;
  incorrectPasswordError?: boolean;
  noUserError?: boolean;
}

const UsernamePasswordForm: FC<FormProps> = ({
  usernameValue,
  passwordValue,
  confirmPasswordValue,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  confirmPasswordError,
  incorrectPasswordError,
  noUserError
}) => {  
  return (
    <form>
      <InputContainer>
        {/* TODO: include on focus inputs */}
        <Input
          placeholder="username"
          value={usernameValue}
          onChange={(e) => handleUsernameChange(e.target.value)}
          border={noUserError ? "2px solid red" : ""}
        />
        <Input
          placeholder="password"
          value={passwordValue}
          onChange={(e) => handlePasswordChange(e.target.value)}
          border={incorrectPasswordError || confirmPasswordError ? "2px solid red" : ""}
        />
        {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
          <Input
            placeholder="confirm password"
            value={confirmPasswordValue}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            border={confirmPasswordError ? "2px solid red" : ""}
            />
        ): null}
        {/* TODO: add shake on error animation? */}
        <ErrorTextContainer>
          {noUserError || incorrectPasswordError || confirmPasswordError ? (
            // TODO: add use state to keep track of what error occurrs
            <ErrorText>some placeholder error text</ErrorText>
          ): null}
        </ErrorTextContainer>
      </InputContainer>
    </form>
  );
};


export default UsernamePasswordForm;