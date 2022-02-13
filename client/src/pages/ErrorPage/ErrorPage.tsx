import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorPageContainer } from "./style";
import { Error } from "@mui/icons-material";
import { Button } from "@mui/material";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <ErrorPageContainer>
      <Error sx={{ fontSize: 100 }} color="error" />
      <p>Whoops, something went wrong...</p>
      <Button
        variant="contained"
        color="error"
        onClick={() => history.push("/")}
      >
        CLICK HERE TO TRY AGAIN
      </Button>
    </ErrorPageContainer>
  );
};

export default ErrorPage;