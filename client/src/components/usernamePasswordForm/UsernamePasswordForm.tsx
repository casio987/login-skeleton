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
          error={error === "user-not-found" || error === "user-already-exists"}
          helperText={error === "user-not-found" ? "The username you've entered is not connected to an account" : 
            error === "user-already-exists" ? "A user with that username already exists" : null
          }
          inputProps={{ "data-testid": "username-textfield"  }}
        />
        <Input
          label="password"
          onChange={(e: { target: { value: string; }; }) => handlePasswordChange(e.target.value)}
          error={error === "incorrect-password" || error === "mismatch-passwords"}
          helperText={error === "incorrect-password" ? "Your password is incorrect" : null}
          type="password"
          inputProps={{ "data-testid": "password-textfield"  }}
        />
      {confirmPasswordValue !== undefined && handleConfirmPasswordChange ? (
        <Input
          label="confirm password"
          onChange={(e: { target: { value: string; }; }) => handleConfirmPasswordChange(e.target.value)}
          error={error === "mismatch-passwords"}
          helperText={error === "mismatch-passwords" ? "The passwords do not match" : null}
          type="password"
          inputProps={{ "data-testid": "confirm-password-textfield" }}
        />
      ): null}
      {/* TODO: add shake on error animation? */}
    </InputContainer>
  );
};


export default UsernamePasswordForm;