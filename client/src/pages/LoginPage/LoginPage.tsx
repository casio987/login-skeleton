import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { LoginContainer } from "./style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "@mui/material";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noUserError, setNoUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const updateUsername = useCallback((username) => {
    setUsername(username);
  }, [setUsername]);

  const updatePassword = useCallback((password) => {
    setPassword(password);
  }, [setPassword]);

  const handleLoginClick = () => {
    console.log(`the username is ${username} and the password is ${password}`);
    setNoUserError(false);
    setPasswordError(false);
    // if name not in db
    // if password incorrect
  }

  return (
    <LoginContainer>
      <Banner>
        Login
      </Banner>
      <UsernamePasswordForm
        handleUsernameChange={updateUsername}
        handlePasswordChange={updatePassword}
        incorrectPasswordError={passwordError}
        noUserError={noUserError}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleLoginClick}
      >
        Login
      </Button>
      <Button
        variant="text"
        onClick={() => history.push("/signup")}
      >
        New around? Register here!
      </Button>
    </LoginContainer>
  );
};

export default LoginPage;