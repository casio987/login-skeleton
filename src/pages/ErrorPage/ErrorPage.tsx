import React from "react";
import { Button } from "../../components/button/Button";
import { ErrorPageContainer } from "./style";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>    
      <Button backgroundColor="red">
        .insertImageHere()
      </Button>
      <p>
        Whoops, something went wrong...
      </p>
      <Button backgroundColor="red" color="white">
        Click here to try again
      </Button>
    </ErrorPageContainer>
  );
};

export default ErrorPage;