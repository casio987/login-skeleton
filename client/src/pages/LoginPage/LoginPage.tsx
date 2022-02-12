import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import UsernamePasswordForm from "../../components/usernamePasswordForm/UsernamePasswordForm";
import { LoginContainer } from "./style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "@mui/material";
import { loginUser } from "../../api/users";
import { FormError } from "../../components/usernamePasswordForm/formError";


const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<FormError>();

  const updateUsername = useCallback((username) => {
    setUsername(username);
  }, [setUsername]);

  const updatePassword = useCallback((password) => {
    setPassword(password);
  }, [setPassword]);

  const handleLoginClick = async () => {
    try {
      const { status } = await loginUser(username, password);
      if (status === 201) {
        history.push("/landing");
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        setError("incorrect-password");
      } else if (err.response.status === 404) {
        setError("user-not-found");
      }
    }
  };

  return (
    <LoginContainer>
      <Banner>
        Login
      </Banner>
      <UsernamePasswordForm
        handleUsernameChange={updateUsername}
        handlePasswordChange={updatePassword}
        error={error}
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