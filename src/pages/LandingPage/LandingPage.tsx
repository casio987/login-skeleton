import React, { useCallback, useState } from "react";
import { Button } from "../../components/button/Button";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { palette } from "../../components/Palette";
import { Banner, InputSection, LoginContainer } from "./style";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = useCallback((username) => {
    setUsername(username);
  }, [setUsername]);

  const updatePassword = useCallback((password) => {
    setPassword(password);
  }, [setPassword]);

  // TODO: will need to handle onsubmit 
  // const handleSubmit = (e: Event) => {
  //   e.preventDefault();
  //   // console.log(`the username is ${username} and the password is ${password}`);
  // }

  return (
    <LoginContainer>
      <Banner>
        Login
      </Banner>
      <InputSection>
        <UsernamePasswordForm
          usernameValue={username}
          passwordValue={password}
          handleUsernameChange={updateUsername}
          handlePasswordChange={updatePassword}
        />
      </InputSection>
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
      >
        Login
      </Button>
      <p>Not signed up? Sign up now!</p>
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
      >
        Sign Up
      </Button>
    </LoginContainer>
  )
}

export default LandingPage;