import React, { useCallback, useState } from "react";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { Banner, SignUpContainer } from "./style";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const updateUsername = useCallback((username) => {
    setUsername(username);
  }, [setUsername]);

  const updatePassword = useCallback((password) => {
    setPassword(password);
  }, [setPassword]);

  const updateConfirmedPassword = useCallback((password) => {
    setConfirmedPassword(password);
  }, [setConfirmedPassword]);

  return (
    <SignUpContainer>
      <Banner>
        Register
      </Banner>
      <UsernamePasswordForm
        usernameValue={username}
        passwordValue={password}
        confirmPasswordValue={confirmedPassword}
        handleUsernameChange={updateUsername}
        handlePasswordChange={updatePassword}
        handleConfirmPasswordChange={updateConfirmedPassword}
      />
    </SignUpContainer>
  );
};

export default SignUpPage;