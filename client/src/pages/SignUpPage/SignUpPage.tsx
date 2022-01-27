import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/users";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { SignUpContainer } from "./style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "@mui/material";

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
      const { status, data } = await registerUser(username, password);      
      if (status === 201) {
        // TODO: token authentication
        history.push({
          pathname: "/landing",
          state: data,
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
        confirmPasswordValue={confirmedPassword}
        handleUsernameChange={updateUsername}
        handlePasswordChange={updatePassword}
        handleConfirmPasswordChange={updateConfirmedPassword}
        confirmPasswordError={errorOccurred}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleRegisterClick}
      >
        Register
      </Button>
      <Button
        variant="text"
        onClick={() => history.push("/")}
      >
        Already have an account? Login here!
      </Button>
    </SignUpContainer>
  );
};

export default SignUpPage;