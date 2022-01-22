import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/users";
import { Button } from "../../components/button/Button";
import { palette } from "../../components/Palette";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { Banner, SignUpContainer } from "./style";

const SignUpPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);

  const updateUsername = useCallback((username) => {
    setUsername(username);
  }, [setUsername]);

  const updatePassword = useCallback((password) => {
    setPassword(password);
  }, [setPassword]);

  const updateConfirmedPassword = useCallback((password) => {
    setConfirmedPassword(password);
  }, [setConfirmedPassword]);

  const handleRegisterClick = async () => {
    if (password !== confirmedPassword) {
      setErrorOccurred(true);
    } else {
      console.log("you shall pass");
      const { status, data } = await registerUser(username, password);
      
      if (status === 201) {
        console.log(data);
        // TODO: token authentication
        history.push({
          pathname: "/landing",
          state: { data },
        }); // TODO: should use token instead of actual data
      } else {
        history.push("/error");
      }
      setErrorOccurred(false);
    }
    // TODO: check if username already exists
  }

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
        confirmPasswordError={errorOccurred}
      />
      <Button
        backgroundColor={palette.lightTeal}
        width="5rem"
        color={palette.white}
        onClick={handleRegisterClick}
      >
        Register
      </Button>
      <Button
        backgroundColor={palette.rasberry}
        width="12.5rem"
        color={palette.white}
        onClick={() => history.push("/")}
      >
        Already have an account? Login here!
      </Button>
    </SignUpContainer>
  );
};

export default SignUpPage;