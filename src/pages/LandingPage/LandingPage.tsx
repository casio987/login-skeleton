import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { palette } from "../../components/Palette";
import { Banner, LoginContainer } from "./style";

const LandingPage = () => {
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
        usernameValue={username}
        passwordValue={password}
        handleUsernameChange={updateUsername}
        handlePasswordChange={updatePassword}
        incorrectPasswordError={passwordError}
        noUserError={noUserError}
      />
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
        onClick={handleLoginClick}
      >
        Login
      </Button>
      <Button
        backgroundColor={palette.rasberry}
        width="10rem"
        color={palette.white}
        onClick={() => history.push("/signup")}
      >
        New around? Register here!
      </Button>
    </LoginContainer>
  );
};

export default LandingPage;