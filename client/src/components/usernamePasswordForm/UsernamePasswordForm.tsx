import React, { FC } from "react";
import { FormError } from "./formError";
import { InputContainer, Input } from "./style";

type FormProps = {
  confirmPasswordValue?: string;
  handleUsernameChange: (username: string) => void;
  handlePasswordChange: (password: string) => void;
  handleConfirmPasswordChange?: (password: string) => void;
  error: FormError | undefined;
}

const UsernamePasswordForm: FC<FormProps> = ({
  confirmPasswordValue,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  error
}) => {
  return (
    <InputContainer>
        <Input
          label="username"
          onChange={(e: { target: { value: string; }; }) => handleUsernameChange(e.target.value)}
          error={error === "user-not-found"}
          helperText={error === "user-not-found" ? "the username you entered is not connected to an account" : null}
        />
        <Input
          label="password"
          onChange={(e: { target: { value: string; }; }) => handlePasswordChange(e.target.value)}
          error={error === "incorrect-password" || error === "mismatch-passwords"}
          helperText={error === "incorrect-password" ? "your pass word is incorrect" : null}
        />
      {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
        <Input
          label="confirm password"
          onChange={(e: { target: { value: string; }; }) => handleConfirmPasswordChange(e.target.value)}
          error={error === "mismatch-passwords"}
          helperText={error === "mismatch-passwords" ? "passwords do not match" : null}
        />
      ): null}
      {/* TODO: add shake on error animation? */}
    </InputContainer>
  );
};


export default UsernamePasswordForm;