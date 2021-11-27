import React, { FC } from "react";
import { InputContainer } from "./style";

type FormProps = {
  // TODO: have additional css props for input?
  usernameValue: string;
  passwordValue: string;
  handleUsernameChange: (username: string) => void;
  handlePasswordChange: (password: string) => void;
}

const UsernamePasswordForm: FC<FormProps> = ({
  usernameValue,
  passwordValue,
  handleUsernameChange,
  handlePasswordChange,
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
      </InputContainer>
    </form>
  );
};


export default UsernamePasswordForm;