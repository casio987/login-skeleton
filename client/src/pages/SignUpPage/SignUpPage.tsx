import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/users";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { SignUpContainer } from "./style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "@mui/material";
import { FormError } from "../../components/usernamePasswordForm/formError";

const SignUpPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState<FormError>();

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
      setError("mismatch-passwords");
    } else {
      try {
        const { status, data } = await registerUser(username, password);      
        if (status === 201) {
          // TODO: token authentication
          history.push({
            pathname: "/landing",
            state: data,
          }); // TODO: should use token instead of actual data
        } 
      } catch (err: any) {
        if (err.response.status === 400) {
          setError("user-already-exists");
        } else {
          history.push("/error");
        }
      }
    }
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
        error={error}
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