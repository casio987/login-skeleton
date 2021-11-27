import React, { FC } from "react";
import { InputContainer } from "./style";

type FormProps = {
  // TODO: have additional css props for input?
  usernameValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
  handleUsernameChange: (username: string) => void;
  handlePasswordChange: (password: string) => void;
  handleConfirmPasswordChange?: (password: string) => void;
}

const UsernamePasswordForm: FC<FormProps> = ({
  usernameValue,
  passwordValue,
  confirmPasswordValue,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange
}) => {  
  return (
    <form>
      <InputContainer>
        <input
          type="text"
          placeholder="username"
          value={usernameValue}
          onChange={(e) => handleUsernameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={passwordValue}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
          <input
            type="text"
            placeholder="confirm password"
            value={confirmPasswordValue}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
        />
        ): null}
      </InputContainer>
    </form>
  );
};


export default UsernamePasswordForm;