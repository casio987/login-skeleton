import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Banner, LandingPageContainer, Text } from "./style";

const LandingPage = () => {
  const { location } = useHistory();
  const user = location.state;

  useEffect(() => {
    console.log(user);
  });

  return (
    <LandingPageContainer>
      <Banner>
        You in...
      </Banner>
      <Text>
        You've signed in with
      </Text>
    </LandingPageContainer>
  );
};

export default LandingPage;