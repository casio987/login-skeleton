import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Navbar, LandingPageContainer } from "./style";

const LandingPage = () => {
  const { location } = useHistory();
  const user = location.state;

  useEffect(() => {
    console.log(user);
  });

  return (
    <LandingPageContainer>
      <Navbar>
        <Button
          width="auto"
          height="auto"
        >
          .dropDownAvatar()
        </Button>
      </Navbar>
    </LandingPageContainer>
  );
};

export default LandingPage;